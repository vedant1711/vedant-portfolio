import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ResumeViewer from "@/components/ResumeViewer";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "View and download Vedant Somani's resume, tailored for software engineering or data science roles.",
};

export default function ResumePage() {
  return (
    <div className="frame">
      <PageHeader
        index="05"
        kicker="Curriculum vitae"
        title="Resume."
        description="Two versions, depending on the role. Read either one below, download it, or grab every variant from my Drive."
      />

      <section className="px-5 py-12 sm:px-8 sm:py-16">
        <ResumeViewer />
      </section>
    </div>
  );
}
