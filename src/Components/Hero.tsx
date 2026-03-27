import { FaGithub } from "react-icons/fa";
import image from "../assets/shesh1.jpg";

const Hero = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-20 overflow-hidden"
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.035,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* Cyan glow blob */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(600px, 120vw)",
          height: "min(600px, 120vw)",
          background:
            "radial-gradient(ellipse, rgba(34,211,238,0.07) 0%, transparent 68%)",
        }}
      />

      {/* Bottom-right glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "10%",
          right: "-10%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center max-w-2xl w-full">
        {/* Avatar */}
        <div
          className="relative mx-auto mb-8"
          style={{
            width: "clamp(100px, 22vw, 140px)",
            height: "clamp(100px, 22vw, 140px)",
            animation: "float 5s ease-in-out infinite",
          }}
        >
          {/* Spinning ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, #22d3ee, #0ea5e9, #22d3ee)",
              padding: 2,
              borderRadius: "50%",
              animation: "spin 8s linear infinite",
            }}
          />

          {/* YOUR IMAGE HERE */}
          <div className="absolute inset-0.5 rounded-full bg-[#08080f] overflow-hidden">
            <img
              src={image}
              alt="Kurt"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Badge */}
        <div
          style={{ fontFamily: "'Space Mono', monospace" }}
          className="inline-flex items-center gap-2 bg-cyan-400/8 border border-cyan-400/25 rounded-full px-4 py-1.5 text-cyan-400 text-[0.65rem] uppercase tracking-[0.18em] mb-6"
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-cyan-400 block"
            style={{ animation: "pulse 2s infinite" }}
          />
          Frontend Developer
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.8rem, 10vw, 6.5rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
          }}
          className="text-white font-bold mb-2"
        >
          Kurt John
        </h1>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.8rem, 10vw, 6.5rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            WebkitTextStroke: "1.5px rgba(34,211,238,0.9)",
            color: "transparent",
          }}
          className="font-bold mb-6"
        >
          Montes
        </h1>

        {/* Tagline */}
        <p
          className="text-white/50 leading-relaxed mx-auto mb-10 max-w-lg"
          style={{ fontSize: "clamp(0.88rem, 2.2vw, 1.05rem)" }}
        >
          IT student & frontend developer crafting thoughtful interfaces with
          React, TypeScript, and Tailwind CSS.{" "}
          <span className="text-white/30">
            Based in Davao City, PH.
          </span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href="https://github.com/Kurev"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "'Space Mono', monospace" }}
            className="bg-cyan-400 text-neutral-950 font-bold text-[0.68rem] uppercase tracking-[0.18em] px-8 py-3.5 rounded-lg no-underline hover:opacity-85 transition-opacity duration-200 flex items-center gap-2"
          >
            <FaGithub className="text-sm" />
            Github
          </a>

          <a
            href="#contact"
            style={{ fontFamily: "'Space Mono', monospace" }}
            className="border border-white/15 text-white/60 text-[0.68rem] uppercase tracking-[0.18em] px-8 py-3.5 rounded-lg no-underline hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span
          style={{ fontFamily: "'Space Mono', monospace" }}
          className="text-white/25 text-[0.6rem] uppercase tracking-[0.2em]"
        >
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(34,211,238,0.6), transparent)",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;