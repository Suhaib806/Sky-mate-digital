import nodemailer from "nodemailer";

const ALLOWED_ORIGINS = new Set([
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:8080",
  "http://127.0.0.1:8080",
]);

function corsHeadersForOrigin(origin) {
  const allowOrigin = origin && ALLOWED_ORIGINS.has(origin) ? origin : "";
  return {
    ...(allowOrigin ? { "Access-Control-Allow-Origin": allowOrigin } : {}),
    "Vary": "Origin",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS(request) {
  const origin = request.headers.get("origin") || "";
  return new Response(null, { status: 204, headers: corsHeadersForOrigin(origin) });
}

export async function POST(request) {
  const origin = request.headers.get("origin") || "";
  const corsHeaders = corsHeadersForOrigin(origin);

  try {
    const { name, email, phone, message, category } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Missing required fields" },
        { status: 400, headers: corsHeaders },
      );
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return Response.json(
        { ok: false, error: "Email server is not configured. Missing SMTP_USER/SMTP_PASS." },
        { status: 500, headers: corsHeaders },
      );
    }

    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const isSecure = smtpPort === 465;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: smtpPort,
      secure: isSecure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject = `New project inquiry – ${category || "General"}`;
    const textLines = [
      `Category: ${category || "Not specified"}`,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      "",
      "Message:",
      message,
    ].filter(Boolean);

    const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER;
    const adminRecipient = process.env.SMTP_TO || "maliksuhaib543@gmail.com";

    await Promise.all([
      // Admin notification email (lead details)
      transporter.sendMail({
        from: `"Sky mate digital Website" <${fromAddress}>`,
        to: adminRecipient,
        replyTo: email,
        subject,
        text: textLines.join("\n"),
      }),
      // User confirmation email
      transporter.sendMail({
        from: `"Sky mate digital Team" <${fromAddress}>`,
        to: email,
        subject: "Thanks for contacting Sky mate digital",
        text: [
          `Hi ${name},`,
          "",
          "Thanks for reaching out to Sky mate digital.",
          "We have received your inquiry and our team will get back to you soon.",
          "",
          "Your submission details:",
          `Category: ${category || "Not specified"}`,
          phone ? `Phone: ${phone}` : "",
          "",
          "Message:",
          message,
          "",
          "Best regards,",
          "Sky mate digital Team",
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    ]);

    return Response.json({ ok: true }, { headers: corsHeaders });
  } catch (error) {
    console.error("Email send error:", error);
    return Response.json(
      { ok: false, error: "Failed to send email" },
      { status: 500, headers: corsHeaders },
    );
  }
}

