import Reveal from "../Features/Reveal";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-6"
      style={{ background: "rgba(255,255,255,0.012)" }}
    >
      <div className="max-w-xl mx-auto text-center">
        <Reveal>
          <span
            style={{ fontFamily: "'Space Mono', monospace" }}
            className="text-cyan-400 text-[0.65rem] uppercase tracking-[0.2em] block mb-3"
          >
            Get in Touch
          </span>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
            }}
            className="text-white font-bold mb-5"
          >
            Let's Connect
          </h2>

          <p style={{ color: "rgba(255,255,255,0.45)" }} className="text-sm leading-relaxed mb-10 max-w-sm mx-auto">
            Open to collaborations, internships, and new opportunities. Feel
            free to reach out.
          </p>

          <a
            href="mailto:kurtjohnmontes@gmail.com"
            style={{ fontFamily: "'Space Mono', monospace", textDecoration: "none" }}
            className="inline-block bg-cyan-400 text-neutral-950 font-bold text-[0.68rem] uppercase tracking-[0.18em] px-9 py-4 rounded-xl hover:opacity-85 transition-opacity duration-200"
          >
            Say Hello →
          </a>

          <div className="flex justify-center gap-10 mt-14 flex-wrap">
            {[
              { label: "GitHub", href: "https://github.com/Kurev" },
              { label: "LinkedIn", href: "https://linkedin.com/in/kurtmontes" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'Space Mono', monospace" }}
                className="text-white/35 text-[0.68rem] tracking-widest no-underline hover:text-cyan-400 transition-colors duration-200 uppercase"
              >
                {label} ↗
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;