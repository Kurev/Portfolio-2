import type { JSX } from "react";
import { skills } from "../data";
import Reveal from "../Features/Reveal";
import SectionHeading from "./SectionHeading";

// ✅ React Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiFramer,
  SiVercel,
  SiMysql,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

// ✅ Icon map
const iconMap: Record<string, JSX.Element> = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJs />,
  TypeScript: <SiTypescript />,
  React: <FaReact />,
  "Next.js": <SiNextdotjs />,
  Vite: <SiVite />,
  "Tailwind CSS": <SiTailwindcss />,
  "Framer Motion": <SiFramer />,
  Vercel: <SiVercel />,
  Git: <FaGitAlt />,
  "VS Code": <VscCode />,
  MySQL: <SiMysql />,
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <SectionHeading label="Toolkit" title="Skills" />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.1}>
              <div
                className="rounded-2xl p-7"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <p
                  style={{ fontFamily: "'Space Mono', monospace" }}
                  className="text-cyan-400 text-[0.65rem] uppercase tracking-[0.15em] mb-5 m-0"
                >
                  {group.category}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item, ii) => (
                    <Reveal key={item} delay={gi * 0.08 + ii * 0.05}>
                      <span
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          color: "rgba(255,255,255,0.65)",
                          backgroundColor: "rgba(255,255,255,0.03)",
                          borderColor: "rgba(255,255,255,0.10)",
                          transition:
                            "border-color 0.2s, color 0.2s, background-color 0.2s",
                        }}
                        className="text-[0.72rem] px-3.5 py-1.5 rounded-lg border cursor-default block"
                        onMouseEnter={(e) => {
                          const el = e.currentTarget;
                          el.style.color = "#22d3ee";
                          el.style.borderColor = "rgba(34,211,238,0.6)";
                          el.style.backgroundColor = "rgba(34,211,238,0.08)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget;
                          el.style.color = "rgba(255,255,255,0.65)";
                          el.style.borderColor = "rgba(255,255,255,0.10)";
                          el.style.backgroundColor = "rgba(255,255,255,0.03)";
                        }}
                      >
                        {/* ✅ Icon + Text */}
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm">
                            {iconMap[item]}
                          </span>
                          {item}
                        </div>
                      </span>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;