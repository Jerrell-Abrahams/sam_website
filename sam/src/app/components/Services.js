export default function OurServices() {
    return (
        <section className="py-24 bg-white/50 dark:bg-white/[0.02]" id="services">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4">What we do</h2>
                        <h3 className="text-4xl font-black tracking-tight leading-tight">Expertise in Digital <br />Craftsmanship.</h3>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 max-w-sm font-light">
                        We blend design intuition with technical precision to build products that redefine categories.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="service-card bg-white dark:bg-[#111218] p-10 rounded-2xl flex flex-col gap-6 animate-fade-in-up delay-100">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-3xl">draw</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-xl font-bold">Custom Web Design</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                Beyond aesthetics. We focus on conversion-optimized UX/UI and cohesive brand identities that resonate with modern audiences.
                            </p>
                        </div>
                        <ul className="flex flex-col gap-3 mt-4">
                            <li className="flex items-center gap-2 text-xs font-medium text-slate-400">
                                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                User Experience Strategy
                            </li>
                            <li className="flex items-center gap-2 text-xs font-medium text-slate-400">
                                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                Visual Identity Systems
                            </li>
                            <li className="flex items-center gap-2 text-xs font-medium text-slate-400">
                                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                High-Fidelity Prototyping
                            </li>
                        </ul>
                    </div>
                    <div className="service-card bg-white dark:bg-[#111218] p-10 rounded-2xl flex flex-col gap-6 animate-fade-in-up delay-200">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-3xl">code</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-xl font-bold">Custom Development</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                Robust, scalable, and future-proof. We specialize in complex web applications and seamless API integrations.
                            </p>
                        </div>
                        <ul className="flex flex-col gap-3 mt-4">
                            <li className="flex items-center gap-2 text-xs font-medium text-slate-400">
                                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                Next.js &amp; React Specialists
                            </li>
                            <li className="flex items-center gap-2 text-xs font-medium text-slate-400">
                                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                Headless CMS Architectures
                            </li>
                            <li className="flex items-center gap-2 text-xs font-medium text-slate-400">
                                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                API &amp; Third-party Sync
                            </li>
                        </ul>
                    </div>
                    <div className="service-card bg-white dark:bg-[#111218] p-10 rounded-2xl flex flex-col gap-6 animate-fade-in-up delay-300">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-3xl">language</span>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h4 className="text-xl font-bold">Web App Standards</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                Clean, modern websites built to establish your online presence and grow alongside your business.
                            </p>
                        </div>

                        <ul className="flex flex-col gap-3 mt-4">
                            <li className="flex items-center gap-2 text-xs font-medium text-slate-400">
                                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                Responsive & Mobile-First Design
                            </li>
                            <li className="flex items-center gap-2 text-xs font-medium text-slate-400">
                                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                Fast & SEO-Friendly Pages
                            </li>
                            <li className="flex items-center gap-2 text-xs font-medium text-slate-400">
                                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                Strong focus on Digital Presence and your Business Image 
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </section>
    );
}
