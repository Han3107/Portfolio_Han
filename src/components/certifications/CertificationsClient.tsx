"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, X, Download, ExternalLink } from "lucide-react";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  issuedDate: string;
  expiryDate: string;
  description: string;
  certificateFile: string;
  image: string;
}

interface CertificationsClientProps {
  certifications: Certification[];
}

export default function CertificationsClient({
  certifications,
}: CertificationsClientProps) {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [fullscreenPDF, setFullscreenPDF] = useState(false);

  const handleDownload = (certificateFile: string) => {
    const link = document.createElement("a");
    link.href = certificateFile;
    link.download = certificateFile.split("/").pop() || "certificate.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPDF = (certificateFile: string) => {
    window.open(certificateFile, "_blank");
  };

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="group relative rounded-2xl border border-[var(--border)] bg-[var(--surface)]/30 overflow-hidden transition-all duration-300 hover:border-[var(--accent-cyan)] hover:shadow-lg hover:shadow-[var(--accent)]/10 hover:-translate-y-1 backdrop-blur-sm"
          >
            {/* Certificate Preview */}
            <div className="relative h-64 bg-[var(--surface)] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--accent)]/10 to-[var(--accent-cyan)]/5">
                <Award size={48} className="text-[var(--accent-cyan)]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <p className="text-sm font-semibold text-[var(--muted)]">
                  {cert.issuer}
                </p>
              </div>
            </div>

            {/* Certificate Info */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--accent-cyan)] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--accent-cyan)]">
                    {cert.issuer}
                  </p>
                </div>
                <Award
                  size={20}
                  className="flex-shrink-0 text-[var(--accent)]"
                />
              </div>

              <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
                {cert.description}
              </p>

              {/* Dates */}
              <div className="mt-4 flex flex-col gap-2 border-t border-[var(--border)] pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--muted)]">Issued:</span>
                  <span className="font-semibold text-[var(--foreground)]">
                    {cert.issuedDate}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--muted)]">Valid Until:</span>
                  <span className="font-semibold text-[var(--foreground)]">
                    {cert.expiryDate}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => handleViewPDF(cert.certificateFile)}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]/70 px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition-all hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]"
                >
                  <ExternalLink size={16} />
                  View
                </button>
                <button
                  onClick={() => handleDownload(cert.certificateFile)}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-[var(--accent)]/30"
                >
                  <Download size={16} />
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PDF Viewer Modal */}
      {fullscreenPDF && selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
          <button
            onClick={() => setFullscreenPDF(false)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close PDF viewer"
          >
            <X size={22} />
          </button>
          <div className="relative w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden bg-white">
            <iframe
              src={selectedCert.certificateFile}
              className="w-full h-full"
              title={selectedCert.title}
            />
          </div>
        </div>
      )}
    </>
  );
}
