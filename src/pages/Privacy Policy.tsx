import { CheckCircle, AlertCircle, XCircle, FileText, Edit, ArrowRight } from "lucide-react";

const sections = [
  {
    icon: CheckCircle,
    title: "What we'll do",
    type: "list",
    items: [
      "Provide the web design, development, and related services outlined in our contract in a professional and timely manner.",
      "Maintain the confidentiality of any information you share with us.",
      "Bill you according to the payment schedule in our contract.",
    ],
  },
  {
    icon: AlertCircle,
    title: "What we expect from you",
    type: "list",
    items: [
      "Timely payment for our services as outlined in our contract.",
      "Prompt provision of materials, feedback, or approvals needed for us to complete work on time per our agreement.",
      "Ownership and rights to use any text, images, or other assets provided to us for inclusion on your site.",
      "Reasonable opportunities to fix any bugs or issues that come up after launch at no additional cost.",
    ],
  },
  {
    icon: XCircle,
    title: "Limitation of liability",
    type: "paragraph",
    content:
      "While we aim for great results, websites can never be perfect or completely secure. Our liability is limited to direct damages in an amount up to the fees you paid under our contract. We won't be liable for lost profits, revenue, or data or any other indirect, special, or consequential damages.",
  },
  {
    icon: FileText,
    title: "Termination",
    type: "paragraph",
    content:
      "We hope our partnership lasts for years to come! But you can terminate this agreement with written notice if you become dissatisfied. We may also terminate it if necessary with the same notice period.",
  },
  {
    icon: Edit,
    title: "Modifications",
    type: "paragraph",
    content:
      "On occasion we may need to modify these terms. If we do, we'll inform you in writing prior to any changes taking effect. We're excited to partner with you! Let us know if you have any other questions.",
  },
];

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 pt-24 pb-16 border-b border-white/10 bg-black">
        <p className="text-white text-[13px] uppercase tracking-[0.12em] font-medium mb-4">
          Legal
        </p>
        <h1 className="font-display text-[40px] sm:text-[56px] md:text-[72px] leading-[0.95] tracking-[-0.03em] max-w-3xl text-white">
          Privacy{" "}
          <span className="text-[#3B82F6]">Policy</span>
        </h1>
        <p className="mt-6 text-white/60 text-[16px] leading-relaxed max-w-xl">
          This policy outlines our mutual responsibilities and sets clear expectations
          for our working relationship. We believe in full transparency.
        </p>
        <p className="mt-4 text-white/40 text-[13px]">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </section>

      {/* Sections */}
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-4xl space-y-0">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="group flex gap-6 sm:gap-10 py-10 border-b border-white/10 last:border-b-0"
              >
                {/* Index + Icon */}
                <div className="flex flex-col items-center gap-3 flex-shrink-0">
                  <span className="text-[#3B82F6]/40 text-[12px] font-mono tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center group-hover:border-[#3B82F6]/50 transition-colors duration-300">
                    <Icon className="w-4 h-4 text-white/50 group-hover:text-[#3B82F6] transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h2 className="text-[18px] sm:text-[20px] font-medium text-black leading-snug mb-5">
                    {section.title}
                  </h2>

                  {section.type === "list" ? (
                    <ul className="space-y-4">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-[6px] flex-shrink-0 w-5 h-5 rounded-full bg-black/10 border border-black/30 flex items-center justify-center">
                            <span className="text-[#3B82F6] text-[10px] font-mono font-medium">
                              {i + 1}
                            </span>
                          </span>
                          <p className="text-[15px] sm:text-[16px] text-black/60 leading-relaxed">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-[15px] sm:text-[16px] text-black/60 leading-relaxed">
                      {section.content}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-16 border-t border-black/10">
        <div className="max-w-4xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h3 className="text-[22px] sm:text-[28px] font-medium leading-snug">
              Ready to get started?
            </h3>
            <p className="text-white/50 text-[15px] mt-2">
              We're excited to partner with you and bring your ideas to life.
            </p>
          </div>
          <a
                  href="mailto:skymatedigital@gmail.com"
                  className="animate-bottom-top inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#2A62EB] text-white font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] transition-colors duration-200 hover:bg-[#2A62EB]/90"
                >
                  <span className="button-children inline-flex items-center gap-2">
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
        </div>
      </section>

    
    </main>
  );
};

export default PrivacyPolicy;