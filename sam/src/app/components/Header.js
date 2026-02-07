export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            {/* <svg className="w-8 h-8" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                fill="currentColor"></path>
            </svg> */}
          </div>
          <h1 className="text-xl font-black tracking-tighter">SAM</h1>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#services">Services</a>
          <a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#work">Work</a>
          <a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#about">About</a>
          <button
            className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-tight transition-all active:scale-95">
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
