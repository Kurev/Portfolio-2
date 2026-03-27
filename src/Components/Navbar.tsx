import { useEffect, useState } from "react";

const NAV_LINKS = ["About", "Education", "Projects", "Skills", "Contact"];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav
        style={{
          background: scrolled ? "rgba(6,6,10,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
          transition: "all 0.4s ease",
          fontFamily: "'Space Mono', monospace",
        }}
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 sm:px-10"
      >
        <a
          href="#about"
          className="text-cyan-400 font-bold text-sm tracking-[0.25em] no-underline"
        >
          KJM
        </a>

        {/* Desktop links */}
        <ul className="hidden sm:flex gap-8 list-none m-0 p-0">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-white/50 text-[0.7rem] uppercase tracking-[0.15em] hover:text-cyan-400 transition-colors duration-200 no-underline"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="sm:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1"
          aria-label="Toggle menu"
        >
          <span
            style={{
              width: 24,
              transition: "transform 0.2s, opacity 0.2s",
              transform: open ? "rotate(45deg) translateY(7px)" : "",
            }}
            className="block h-px bg-cyan-400 rounded"
          />
          <span
            style={{
              width: 16,
              opacity: open ? 0 : 1,
              transition: "opacity 0.2s",
            }}
            className="block h-px bg-cyan-400 rounded"
          />
          <span
            style={{
              width: 24,
              transition: "transform 0.2s",
              transform: open ? "rotate(-45deg) translateY(-7px)" : "",
            }}
            className="block h-px bg-cyan-400 rounded"
          />
        </button>
      </nav>

      {/* Mobile full-screen drawer */}
      <div
        style={{
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
          fontFamily: "'Space Mono', monospace",
        }}
        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center sm:hidden"
      >
        <ul className="flex flex-col gap-8 list-none m-0 p-0 text-center">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-white/70 text-xl tracking-widest uppercase no-underline hover:text-cyan-400 transition-colors duration-200"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;