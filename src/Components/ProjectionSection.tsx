import { projects, type Project } from "../data";
import Reveal from "../Features/Reveal";
import SectionHeading from "./SectionHeading";

interface ProjectCardProps {
  project: Project;
  index: number;
  delay: number;
}

const ProjectCard = ({ project, index, delay }: ProjectCardProps) => {
  const imgSrc = project.image; // ✅ FIXED

  return (
    <Reveal delay={delay} className="h-full">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="h-full flex flex-col rounded-2xl overflow-hidden group"
        style={{
          textDecoration: "none",
          background: "rgba(255,255,255,0.025)",
          border: "1px solid rgba(255,255,255,0.07)",
          transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.borderColor = "rgba(34,211,238,0.35)";
          el.style.boxShadow = "0 8px 40px rgba(34,211,238,0.08)";
          el.style.transform = "translateY(-5px)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.borderColor = "rgba(255,255,255,0.07)";
          el.style.boxShadow = "none";
          el.style.transform = "translateY(0)";
        }}
      >
        {/* Screenshot */}
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: "16/9", background: "rgba(0,0,0,0.4)" }}
        >
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={project.title}
              className="w-full h-full object-cover object-top"
              style={{
                transition: "transform 0.5s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span
                className="font-serif font-bold select-none"
                style={{ fontSize: "4rem", color: "rgba(255,255,255,0.04)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          )}

          {/* Overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
            style={{
              background: "rgba(6,6,10,0.90)",
              backdropFilter: "blur(10px)",
              transition: "opacity 0.3s",
            }}
          >
            <span
              className="font-mono text-cyan-400 text-xs uppercase tracking-[0.2em] border border-cyan-400/50 px-4 py-2 rounded-lg"
              style={{ backgroundColor: "rgba(34,211,238,0.08)" }}
            >
              Visit Site ↗
            </span>
          </div>

          {/* Number badge */}
          <div
            className="absolute top-3 left-3 font-mono text-[0.6rem] tracking-widest px-2 py-0.5 rounded"
            style={{
              color: "rgba(34,211,238,0.8)",
              backgroundColor: "rgba(6,6,10,0.75)",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(34,211,238,0.2)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-3 p-5 sm:p-6 flex-1">
          <h3
            className="font-serif text-white text-lg sm:text-xl leading-snug"
            style={{ letterSpacing: "-0.01em" }}
          >
            {project.title}
          </h3>

          <p
            className="text-sm leading-relaxed flex-1"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-cyan-400 text-[0.6rem] tracking-wide px-2.5 py-1 rounded-md border"
                style={{
                  backgroundColor: "rgba(34,211,238,0.07)",
                  borderColor: "rgba(34,211,238,0.18)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </Reveal>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-20 sm:py-28 px-4 sm:px-6"
      style={{ background: "rgba(255,255,255,0.012)" }}
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionHeading label="Work" title="Projects" />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={
                projects.length % 2 !== 0 && i === projects.length - 1
                  ? "sm:col-span-2 sm:max-w-lg sm:mx-auto sm:w-full"
                  : ""
              }
            >
              <ProjectCard project={p} index={i} delay={i * 0.08} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;