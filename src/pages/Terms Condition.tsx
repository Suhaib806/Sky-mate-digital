import { Shield, Info, Lock, User, Cookie, RefreshCw, ArrowRight } from "lucide-react";

const sections = [
  {
    icon: Info,
    title: "What information do we collect?",
    content:
      "When you sign up to work with us, we'll ask for basic contact information like your name, email address, and phone number so we can communicate about your project.",
  },
  {
    icon: User,
    title: "How do we use your information?",
    content:
      "We only use your personal information to provide our services, communicate with you, and improve our offerings. We will never sell or share your personal information with third parties unless you explicitly allow us to, like if a service integration requires it. Even then, we'll only share what is absolutely necessary.",
  },
  {
    icon: Lock,
    title: "How do we protect your data?",
    content:
      "We take many precautions like encryption, firewalls, and access controls to protect your information from unauthorized access or disclosure. We take data protection very seriously and do our best to keep your information safe.",
  },
  {
    icon: Shield,
    title: "Your rights over your information",
    content:
      "It's your information, so you have the right to know what we collect, access what we store, request corrections to inaccuracies, delete information, and more. Just send us an email if you have any questions or concerns.",
  },
  {
    icon: Cookie,
    title: "Cookies and tracking",
    content:
      "We use cookies, pixels, and local storage to provide our services, understand user activity, and improve your experience. You can control these through your browser settings if you prefer. By using our site, you consent to these for the purposes outlined.",
  },
  {
    icon: RefreshCw,
    title: "Changes to this policy",
    content:
      "If we make changes to our privacy practices, we'll update this policy. Please check back periodically for revisions. Have any other questions? Feel free to ask us to clarify anything that's unclear. We're happy to explain in more detail!",
  },
];

const TermsAndConditions = () => {
  return (
    <main className="min-h-screen text-black">
      {/* Hero */}
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 pt-24 pb-16 border-b border-gray-200 bg-black">
        <p className="text-[#3B82F6] text-[13px] uppercase tracking-[0.12em] font-medium mb-4">
          Legal
        </p>
        <h1 className="font-display text-[40px] sm:text-[56px] md:text-[72px] leading-[0.95] tracking-[-0.03em] max-w-3xl text-white">
          Terms &amp;{" "}
          <span className="text-white">Conditions</span>
        </h1>
        <p className="mt-6 text-white/60 text-[16px] leading-relaxed max-w-xl">
          Please read these terms carefully before using our services. By accessing
          our website or engaging with Sky mate digital, you agree to the following.
        </p>
        <p className="mt-4 text-white/40 text-[13px]">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
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
                className="group flex gap-6 sm:gap-10 py-10 border-b border-gray-200 last:border-b-0"
              >
                {/* Number + Icon */}
                <div className="flex flex-col items-center gap-3 flex-shrink-0">
                  <span className="text-black/40 text-[12px] font-mono tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center group-hover:border-[#3B82F6]/50 transition-colors duration-300">
                    <Icon className="w-4 h-4 text-white/50 group-hover:text-[#3B82F6] transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h2 className="text-[18px] sm:text-[20px] font-medium text-black leading-snug mb-4">
                    {section.title}
                  </h2>
                  <p className="text-[15px] sm:text-[16px] text-black/60 leading-relaxed">
                    {section.content}
                  </p>
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
              Still have questions?
            </h3>
            <p className="text-black/50 text-[15px] mt-2">
              We're happy to clarify anything you're unsure about.
            </p>
          </div>
          <a
                  href="mailto:skymatedigital@gmail.com"
                  className="animate-bottom-top inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#2A62EB] text-black font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] transition-colors duration-200 hover:bg-[#2A62EB]/90"
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

export default TermsAndConditions;