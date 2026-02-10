export default function Footer() {
    return (
        <footer className="bg-background-light dark:bg-[#050506] border-t border-slate-200 dark:border-white/5 py-16">
            <footer className="bg-background-light dark:bg-[#050506] border-t border-slate-200 dark:border-white/5 py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="flex flex-col gap-6 md:col-span-1">
                        <div className="flex items-center gap-3">
                            <div className="text-primary">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <h2 className="text-lg font-black tracking-tighter">SAM</h2>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                            Engineering premium digital experiences for the next generation of global industry leaders.
                        </p>
                        <div className="flex gap-4">
                            <a className="w-8 h-8 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#">
                                <span className="material-symbols-outlined text-lg">public</span>
                            </a>
                            <a className="w-8 h-8 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#">
                                <span className="material-symbols-outlined text-lg">alternate_email</span>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h5 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">Services</h5>
                        <ul className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400 font-light">
                            <li><a className="hover:text-primary transition-colors" href="#">Web Design</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">E-commerce</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Custom App Dev</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">SEO &amp; Performance</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h5 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">Company</h5>
                        <ul className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400 font-light">
                            <li><a className="hover:text-primary transition-colors" href="#">Case Studies</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Our Approach</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h5 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">Newsletter</h5>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-light">Stay updated with our latest insights.</p>
                        <div className="flex flex-col gap-3">
                            <input className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all" placeholder="Email address" type="email" />
                            <button className="bg-primary text-white font-bold py-3 rounded-lg text-sm transition-all hover:bg-blue-700">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500 dark:text-slate-500">© {new Date().getFullYear()} SAM Digital Engineering. All rights reserved.</p>
                    <div className="flex gap-6 text-xs text-slate-500 dark:text-slate-500">
                        <a className="hover:text-white" href="/privacy-policy">Privacy Policy</a>
                        <a className="hover:text-white" href="/terms-of-service">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </footer>
    );
}
