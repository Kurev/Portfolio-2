interface SectionHeadingProps {
  label: string;
  title: string;
}

const SectionHeading = ({ label, title }: SectionHeadingProps) => {
  return (
    <div className="mb-14 sm:mb-16">
      <span
        style={{ fontFamily: "'Space Mono', monospace" }}
        className="text-cyan-400 text-[0.65rem] uppercase tracking-[0.2em] block mb-2"
      >
        {label}
      </span>
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 5vw, 3.25rem)",
          lineHeight: 1.1,
        }}
        className="text-white font-bold"
      >
        {title}
      </h2>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-px w-10 bg-cyan-400/60" />
        <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
      </div>
    </div>
  );
};

export default SectionHeading;