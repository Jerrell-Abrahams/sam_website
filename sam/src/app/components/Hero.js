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
                        {/* <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Trusted by:</span> */}
                        {/* <div className="flex gap-8">
                            <span className="font-black text-sm italic">LOCAL FOCAL</span>
                            <span className="font-black text-sm italic">ANIMALORTHO</span>
                            <span className="font-black text-sm italic"></span>
                        </div> */}
                    </div>
                </div>
                <div className="relative hidden lg:block">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 shadow-xl max-w-md mx-auto">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm focus:border-primary focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm focus:border-primary focus:ring-primary"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-medium mb-1">
                                    Service Interest
                                </label>
                                <select className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm">
                                    <option>Select a service</option>
                                    <option>Website Development</option>
                                    <option>Custom Software</option>
                                    <option>Hosting & Maintenance</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-medium mb-1 flex items-center gap-1">
                                    Budget Range
                                    <div>
                                        <abbr title="Your budget range helps us tailor our services to your needs." className="text-gray-400 cursor-help no-underline">?</abbr>
                                    </div>
                                </label>
                                <input
                                    type="text"
                                    placeholder="R0 - R10,000"
                                    className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm focus:border-primary focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium mb-1">
                                    Project Details
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="Tell us about your project, timeline, and goals..."
                                    className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm"
                                />
                            </div>
                            <div className="pt-1">
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-primary hover:bg-primary/90 font-bold text-sm transition shadow-lg shadow-primary/30"
                                >
                                    Send Message
                                    <span className="material-symbols-outlined text-base">
                                        arrow_forward
                                    </span>
                                </button>
                                <p className="mt-3 text-[11px] text-center text-gray-500">
                                    By submitting this form, you agree to our{" "}
                                    <a href="/privacy" className="underline hover:text-primary">
                                        Privacy Policy
                                    </a>.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
