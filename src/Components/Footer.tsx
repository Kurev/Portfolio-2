const Footer = () => {
  return (
    <footer className="border-t border-white/6 py-8 px-6 text-center">
      <p className="font-mono text-white/25 text-[0.7rem] tracking-wide m-0">
        © {new Date().getFullYear()} Kurt John Montes · Built with React &
        TypeScript
      </p>
    </footer>
  );
};

export default Footer;