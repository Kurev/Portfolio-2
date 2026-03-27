import { education } from "../data";
import Reveal from "../Features/Reveal";
import SectionHeading from "./SectionHeading";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <SectionHeading label="Background" title="Education" />
        </Reveal>

        <div className="flex flex-col gap-5">
          {education.map((item, i) => (
            <Reveal key={item.school} delay={i * 0.12}>
              <div
                className="relative overflow-hidden rounded-2xl p-7 sm:p-8 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transition: "border-color 0.25s, background 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)";
                  e.currentTarget.style.background = "rgba(34,211,238,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute top-0 left-0 w-0.5 rounded-r"
                  style={{
                    height: "100%",
                    background: "linear-gradient(to bottom, #22d3ee, #0ea5e9)",
                  }}
                />

                <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
                  <span
                    style={{ fontFamily: "'Space Mono', monospace" }}
                    className="text-cyan-400 text-[0.68rem] tracking-wide"
                  >
                    {item.year}
                  </span>
                  <span
                    className={`text-[0.6rem] px-3 py-0.5 rounded-full border tracking-[0.12em] uppercase font-mono`}
                    style={
                      item.status === "Ongoing"
                        ? { color: "#99f6e4", borderColor: "rgba(153,246,228,0.4)", backgroundColor: "rgba(34,211,238,0.08)" }
                        : { color: "rgba(255,255,255,0.35)", borderColor: "rgba(255,255,255,0.12)" }
                    }
                  >
                    {item.status}
                  </span>
                </div>

                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-white text-xl mb-1"
                >
                  {item.school}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.45)" }} className="text-sm m-0">{item.degree}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;