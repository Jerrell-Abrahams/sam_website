import Image from "next/image";
export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-primary">
           
          </div>
          <div className="">
            <Image
              src="/sam-logo.svg"
              alt="SAM Logo"
              width={100}
              height={100}
              className="invert"
            />
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            href="#work"
          >
            Work
          </a>
          <a
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            href="#about"
          >
            About
          </a>
          <button className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-tight transition-all active:scale-95">
            Start a Project
          </button>
        </nav>
        <button className="md:hidden text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}
