import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ResumeViewer from "@/components/ResumeViewer";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Read and download Vedant Somani's resume, in a software engineering and a data science version.",
};

export default function ResumePage() {
  return (
    <div className="frame">
      <PageHeader
        index="05"
        kicker="Curriculum vitae"
        title="Resume."
        description="Two versions, depending on the role. Read either one in full below, or download it."
      />

      <section className="px-5 py-12 sm:px-8 sm:py-16">
        <ResumeViewer />
      </section>
    </div>
  );
}
