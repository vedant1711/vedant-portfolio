import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Vedant Somani about roles, research collaborations, or building something together.",
};

const channels = [
  { k: "Email", v: profile.email, href: `mailto:${profile.email}` },
  { k: "LinkedIn", v: "in/vedant-somani17", href: profile.links.linkedin },
  { k: "GitHub", v: "vedant1711", href: profile.links.github },
  {
    k: "ResearchGate",
    v: "Vedant Somani",
    href: profile.links.researchgate,
  },
  { k: "eScience", v: "UW profile", href: profile.links.escience },
];

export default function ContactPage() {
  return (
    <div className="frame">
      <PageHeader
        index="06"
        kicker="Say hello"
        title="Let us build something together."
        description="I am open to new-grad and internship roles for 2027 across AI, software engineering, and data science, plus research collaborations and any interesting problem in agents, data, or production systems."
      />

      <section className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* channels */}
          <div>
            <SectionLabel n="01">Direct</SectionLabel>
            <dl className="mt-8">
              {channels.map((c) => (
                <a
                  key={c.k}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 border-t border-line py-4 last:border-b"
                >
                  <dt className="mono-label">{c.k}</dt>
                  <dd className="flex items-center gap-2 text-right text-[15px] font-medium text-ink transition-colors group-hover:text-accent">
                    {c.v}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </dd>
                </a>
              ))}
            </dl>

            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line">
              <div className="bg-surface px-5 py-6">
                <p className="mono-label">Based in</p>
                <p className="mt-2 text-lg font-semibold text-ink">
                  {profile.location}
                </p>
              </div>
              <div className="bg-surface px-5 py-6">
                <p className="mono-label">Status</p>
                <p className="mt-2 flex items-center gap-2 text-lg font-semibold text-ink">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Available
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted">{profile.status}.</p>
          </div>

          {/* form */}
          <div>
            <SectionLabel n="02">Message</SectionLabel>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
