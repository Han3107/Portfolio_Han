"use client";

import CertificationsClient from "@/components/certifications/CertificationsClient";
import { useLanguage } from "@/components/providers/LanguageProvider";

const certifications = [
  {
    id: 1,
    title: "Gemini Certified Student",
    issuer: "Google for Education",
    issuedDate: "12/02/2026",
    expiryDate: "12/02/2029",
    description:
      "Certified in having demonstrated the knowledge, skills, and basic competencies needed to use Google AI.",
    descriptionVi:
      "Chứng nhận đã thể hiện kiến thức, kỹ năng và năng lực cơ bản cần thiết để sử dụng Google AI.",
    certificateFile: "/hd9qxvtf_1770872298078.pdf",
    image: "/hd9qxvtf_1770872298078.pdf",
  },
];

export default function CertificationsPage() {
  const { locale, t } = useLanguage();
  const localizedCertifications = certifications.map((cert) => ({
    ...cert,
    description: locale === "vi" ? cert.descriptionVi : cert.description,
  }));

  return (
    <>
      {/* Hero Banner */}
      <section className="relative border-b border-[var(--border)] bg-[var(--background)] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[var(--accent)]/15 rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 lg:py-32 text-center">
          <p className="section-label">{t.certifications.label}</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-[var(--foreground)]">
            {t.certifications.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-cyan)] bg-clip-text text-transparent">
              {t.certifications.title}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-zinc-400 leading-7">
            {t.certifications.previewDescription}
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="border-b border-[var(--border)] bg-[var(--background)] py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <CertificationsClient certifications={localizedCertifications} />
        </div>
      </section>
    </>
  );
}
