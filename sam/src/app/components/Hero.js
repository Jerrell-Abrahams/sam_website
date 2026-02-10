

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            <div className="absolute inset-0 hero-glow -z-10"></div>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                <div className="flex flex-col gap-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Online Since 2026</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                        Engineering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Digital Excellence.</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed font-light">
                        We craft premium digital experiences that combine high-end aesthetics with cutting-edge engineering. Tailored for the modern era.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="/contact-us" className="bg-primary hover:scale-[.9] hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-base font-bold transition-all flex items-center gap-2">
                            Get In Touch
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                        <a href="#services" className="bg-white/5 dark:bg-white/5 hover:bg-white/10 hover:scale-[.9] border border-slate-200 dark:border-white/10 px-8 py-4 rounded-lg text-base font-bold transition-all">
                            View Services
                        </a>
                    </div>
                    <div className="flex items-center gap-6 pt-8 grayscale opacity-50">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Trusted by:</span>
                        <div className="flex gap-8">
                            <span className="font-black text-sm italic">LOCALFOCAL</span>
                            <span className="font-black text-sm italic">ANIMALORTHO</span>
                            <span className="font-black text-sm italic">PIELOUENS</span>
                        </div>
                    </div>
                </div>
                <div className="relative hidden lg:block">
                    <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-black border border-white/10 shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" data-alt="Abstract 3D digital flow pattern with blue accents"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                        <div className="absolute top-10 left-10 p-4 rounded-xl glass-nav border border-white/20 animate-bounce" style={{ "animation-duration": "4s" }}>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="mt-4 h-2 w-24 bg-white/10 rounded"></div>
                            <div className="mt-2 h-2 w-16 bg-white/10 rounded"></div>
                        </div>
                        <div className="absolute bottom-12 right-12 p-6 rounded-2xl glass-nav border border-primary/30 w-64 shadow-2xl">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-[10px] font-bold text-primary tracking-widest">PERFORMANCE</span>
                                <span className="text-lg font-black">99%</span>
                            </div>
                            <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                                <div className="bg-primary h-full w-[99%]"></div>
                            </div>
                        </div>
                        <div className="absolute bottom-12 right-12 p-6 rounded-2xl glass-nav border border-primary/30 w-64 shadow-2xl">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-[10px] font-bold text-primary tracking-widest">PERFORMANCE</span>
                                <span className="text-lg font-black">99%</span>
                            </div>
                            <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                                <div className="bg-primary h-full w-[99%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
