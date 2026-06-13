import type { Metadata } from "next";
import { Code2, Layout, Smartphone, Database, Paintbrush, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Services - Han Han Portfolio",
  description: "Explore the software testing services I offer including manual testing, automation, and API testing.",
};

const services = [
  {
    icon: <Layout size={28} />,
    title: "Manual Testing",
    description: "Performing thorough manual testing including functional, regression, smoke, and exploratory testing to ensure software quality.",
    features: ["Functional Testing", "Regression Testing", "UAT", "Exploratory Testing"],
  },
  {
    icon: <Database size={28} />,
    title: "Backend Development",
    description: "Creating robust server-side applications and RESTful APIs with NestJS, ASP.NET, and database management systems.",
    features: ["NestJS & Node.js", "ASP.NET Core", "PostgreSQL & MongoDB", "RESTful APIs"],
  },
  {
    icon: <Paintbrush size={28} />,
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user interfaces with attention to detail, accessibility, and user experience best practices.",
    features: ["Figma & Adobe XD", "Design Systems", "Prototyping", "User Research"],
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications using modern frameworks and native-like performance.",
    features: ["React Native", "Kotlin", "Cross-Platform", "App Store Ready"],
  },
  {
    icon: <Code2 size={28} />,
    title: "API Integration",
    description: "Seamlessly integrating third-party services, payment gateways, and external APIs into web applications.",
    features: ["REST & GraphQL", "Payment Integration", "OAuth & Auth", "WebSocket"],
  },
  {
    icon: <Rocket size={28} />,
    title: "DevOps & Deployment",
    description: "Setting up CI/CD pipelines, containerization with Docker, and deploying applications to cloud platforms.",
    features: ["Docker", "CI/CD Pipelines", "Vercel & AWS", "Monitoring"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-[var(--border)] bg-[var(--background)] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[var(--accent-cyan)]/10 rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 lg:py-32 text-center">
          <p className="section-label">Services</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-[var(--foreground)]">
            What I{" "}
            <span className="bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent)] bg-clip-text text-transparent">
              Can Do
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[var(--muted)] leading-7">
            From test planning to bug reporting, I offer comprehensive software testing services
            to ensure your product quality.
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
                  <h3 className="mt-6 text-xl font-semibold text-[var(--foreground)]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{service.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.features.map((f) => (
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
