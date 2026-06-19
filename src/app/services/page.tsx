"use client";

import { Code2, Layout, Smartphone, Database, Paintbrush, Rocket } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const services = [
  {
    icon: <Layout size={28} />,
    title: "Manual Testing",
    titleVi: "Kiểm thử thủ công",
    description: "Performing thorough manual testing including functional, regression, smoke, and exploratory testing to ensure software quality.",
    descriptionVi: "Thực hiện kiểm thử thủ công gồm functional, regression, smoke và exploratory testing để đảm bảo chất lượng phần mềm.",
    features: ["Functional Testing", "Regression Testing", "UAT", "Exploratory Testing"],
    featuresVi: ["Functional Testing", "Regression Testing", "UAT", "Exploratory Testing"],
  },
  {
    icon: <Database size={28} />,
    title: "Backend Development",
    titleVi: "Phát triển Backend",
    description: "Creating robust server-side applications and RESTful APIs with NestJS, ASP.NET, and database management systems.",
    descriptionVi: "Xây dựng ứng dụng phía server và RESTful API với NestJS, ASP.NET cùng hệ quản trị cơ sở dữ liệu.",
    features: ["NestJS & Node.js", "ASP.NET Core", "PostgreSQL & MongoDB", "RESTful APIs"],
    featuresVi: ["NestJS & Node.js", "ASP.NET Core", "PostgreSQL & MongoDB", "RESTful APIs"],
  },
  {
    icon: <Paintbrush size={28} />,
    title: "UI/UX Design",
    titleVi: "Thiết kế UI/UX",
    description: "Designing intuitive and beautiful user interfaces with attention to detail, accessibility, and user experience best practices.",
    descriptionVi: "Thiết kế giao diện dễ dùng, đẹp mắt, chú ý chi tiết, khả năng tiếp cận và trải nghiệm người dùng.",
    features: ["Figma & Adobe XD", "Design Systems", "Prototyping", "User Research"],
    featuresVi: ["Figma & Adobe XD", "Design System", "Prototype", "Nghiên cứu người dùng"],
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile Development",
    titleVi: "Phát triển Mobile",
    description: "Developing cross-platform mobile applications using modern frameworks and native-like performance.",
    descriptionVi: "Phát triển ứng dụng mobile đa nền tảng bằng framework hiện đại với trải nghiệm gần native.",
    features: ["React Native", "Kotlin", "Cross-Platform", "App Store Ready"],
    featuresVi: ["React Native", "Kotlin", "Đa nền tảng", "Sẵn sàng phát hành"],
  },
  {
    icon: <Code2 size={28} />,
    title: "API Integration",
    titleVi: "Tích hợp API",
    description: "Seamlessly integrating third-party services, payment gateways, and external APIs into web applications.",
    descriptionVi: "Tích hợp dịch vụ bên thứ ba, cổng thanh toán và API bên ngoài vào ứng dụng web.",
    features: ["REST & GraphQL", "Payment Integration", "OAuth & Auth", "WebSocket"],
    featuresVi: ["REST & GraphQL", "Tích hợp thanh toán", "OAuth & Auth", "WebSocket"],
  },
  {
    icon: <Rocket size={28} />,
    title: "DevOps & Deployment",
    titleVi: "DevOps & Triển khai",
    description: "Setting up CI/CD pipelines, containerization with Docker, and deploying applications to cloud platforms.",
    descriptionVi: "Thiết lập CI/CD, container với Docker và triển khai ứng dụng lên nền tảng cloud.",
    features: ["Docker", "CI/CD Pipelines", "Vercel & AWS", "Monitoring"],
    featuresVi: ["Docker", "CI/CD", "Vercel & AWS", "Giám sát"],
  },
];

export default function ServicesPage() {
  const { locale, t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-[var(--border)] bg-[var(--background)] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[var(--accent-cyan)]/10 rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 lg:py-32 text-center">
          <p className="section-label">{t.servicesPage.label}</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-[var(--foreground)]">
            {t.servicesPage.titleA}{" "}
            <span className="bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent)] bg-clip-text text-transparent">
              {t.servicesPage.titleB}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[var(--muted)] leading-7">
            {t.servicesPage.description}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[var(--background)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <article
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-[var(--accent-soft)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--accent)]/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface)] text-[var(--accent-cyan)] ring-1 ring-[var(--border)] transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-white group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[var(--foreground)]">
                    {locale === "vi" ? service.titleVi : service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {locale === "vi" ? service.descriptionVi : service.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {(locale === "vi" ? service.featuresVi : service.features).map((f) => (
                      <li key={f} className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--muted)]">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
