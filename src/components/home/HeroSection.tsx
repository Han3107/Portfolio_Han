"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowRight, Bug } from "lucide-react";

type Particle = {
  alpha: number;
  baseRadius: number;
  color: string;
  life: number;
  maxLife: number;
  phase: number;
  radius: number;
  speed: number;
  vx: number;
  wave: number;
  x: number;
  y: number;
};

function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let animationFrame = 0;
    let height = 0;
    let lastTime = 0;
    let width = 0;
    let particles: Particle[] = [];

    const createParticle = (fromBottom = false): Particle => {
      const isBright = Math.random() > 0.82;
      const maxLife = 4.6 + Math.random() * 5.4;
      const radius = isBright ? 2.4 + Math.random() * 3.2 : 1.2 + Math.random() * 2.4;

      return {
        alpha: isBright ? 0.62 + Math.random() * 0.22 : 0.28 + Math.random() * 0.36,
        baseRadius: radius,
        color: Math.random() > 0.72 ? "20, 221, 196" : "255, 111, 71",
        life: fromBottom ? 0 : Math.random() * maxLife,
        maxLife,
        phase: Math.random() * Math.PI * 2,
        radius,
        speed: 28 + Math.random() * 54,
        vx: -18 + Math.random() * 36,
        wave: 10 + Math.random() * 28,
        x: Math.random() * width,
        y: fromBottom
          ? height + Math.random() * 120
          : Math.random() * (height + 180),
      };
    };

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      const particleCount = Math.max(70, Math.floor((width * height) / 8800));
      particles = Array.from({ length: particleCount }, () => createParticle());
    };

    const draw = (time = 0) => {
      const delta = Math.min((time - lastTime) / 1000 || 0.016, 0.04);
      lastTime = time;

      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "lighter";

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        particle.life += delta;
        particle.y -= particle.speed * delta;
        particle.x +=
          particle.vx * delta +
          Math.sin(time * 0.002 + particle.phase) * particle.wave * delta;

        const progress = particle.life / particle.maxLife;
        const fade = Math.sin(Math.PI * progress);
        const opacity = Math.max(0, particle.alpha * fade);
        particle.radius =
          particle.baseRadius * (0.82 + Math.sin(time * 0.005 + particle.phase) * 0.18);

        context.beginPath();
        context.fillStyle = `rgba(${particle.color}, ${opacity})`;
        context.shadowBlur = particle.radius * 6;
        context.shadowColor = `rgba(${particle.color}, ${opacity})`;
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();

        if (
          particle.life >= particle.maxLife ||
          particle.y < -20 ||
          particle.x < -30 ||
          particle.x > width + 30
        ) {
          particles[index] = createParticle(true);
        }
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    animationFrame = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full opacity-90"
    />
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--background)]">
      <div className="absolute inset-0 z-0">
        <div className="ambient-blob absolute -left-24 top-16 h-[430px] w-[430px] bg-[var(--accent-warm)] opacity-55" />
        <div className="ambient-blob absolute right-[-10%] top-[-12%] h-[540px] w-[540px] bg-[var(--accent)] opacity-20 [animation-delay:-4s] [animation-duration:15s]" />
        <div className="ambient-blob absolute bottom-[-18%] left-[35%] h-[360px] w-[360px] bg-[#ff9f6e] opacity-28 [animation-delay:-8s] [animation-duration:18s]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,248,245,0.72),rgba(255,248,245,0.48)_46%,rgba(255,248,245,0.78))]" />
        <FloatingParticles />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[680px] max-w-[1180px] items-center gap-8 px-6 py-12 lg:grid-cols-2 lg:gap-12 lg:py-8">
        <div className="relative z-10 max-w-[590px] lg:pl-4 lg:pr-8">
          <h1
            className="animate-fade-in-up text-5xl font-black leading-none text-[var(--foreground)] sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0s" }}
          >
            Han Han
          </h1>

          <p
            className="animate-fade-in-up mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-bold text-white shadow-lg shadow-[var(--accent)]/20 sm:text-base"
            style={{ animationDelay: "0.1s" }}
          >
            <Bug size={16} />
            Tester Intern
          </p>

          <p
            className="animate-fade-in-up mt-7 max-w-[560px] text-base font-medium leading-8 text-[var(--muted)] sm:text-lg"
            style={{ animationDelay: "0.2s" }}
          >
            Information Technology student with a strong learning mindset and
            basic knowledge of software testing. Seeking a Tester Internship to
            apply academic knowledge in real-world projects.
          </p>

          <p
            className="animate-fade-in-up mt-4 text-sm font-semibold text-[var(--foreground)] sm:text-base"
            style={{ animationDelay: "0.25s" }}
          >
            <span className="animate-underline-slide inline-block">
              Writing clean & efficient code
            </span>
          </p>

          <div
            className="animate-fade-in-up mt-9 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.3s" }}
          >
            <Link href="/contact" className="btn-primary">
              Hire Portfolio
            </Link>
            <Link href="/projects" className="btn-secondary group">
              Explore Work
              <ArrowRight
                size={18}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <div className="relative flex min-h-[340px] items-center justify-center lg:min-h-[520px] lg:justify-center">
          <div className="animate-float-text pointer-events-none absolute left-[-8%] top-[36%] hidden -translate-y-1/2 whitespace-nowrap text-[64px] font-black leading-none text-[var(--accent)] opacity-[0.18] lg:block">
            TESTER
          </div>

          <div
            className="animate-fade-in-up relative z-10 mt-0 lg:-mt-14"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="absolute inset-0 scale-105 rounded-full bg-[var(--accent)] opacity-15 blur-3xl" />
            <div className="relative h-[270px] w-[270px] overflow-hidden rounded-full border-[5px] border-white bg-[var(--accent-warm)] shadow-2xl shadow-[var(--accent)]/10 sm:h-[320px] sm:w-[320px] lg:h-[340px] lg:w-[340px]">
              <Image
                src="/han.jpg"
                alt="Han Han portrait"
                fill
                priority
                unoptimized
                sizes="(min-width: 1024px) 340px, (min-width: 640px) 320px, 270px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="animate-float-text pointer-events-none absolute right-[-8%] top-[36%] hidden -translate-y-1/2 whitespace-nowrap text-[64px] font-black leading-none text-[var(--accent)] opacity-[0.18] lg:block">
            INTERN
          </div>
        </div>
      </div>
    </section>
  );
}
