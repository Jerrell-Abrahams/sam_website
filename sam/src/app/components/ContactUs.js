export default function ContactUs() {
    return (
        <main className="flex-grow pt-24 pb-20 relative overflow-hidden">

            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <section className="mb-20">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wide uppercase mb-6">
                        <span className="w-2 h-2 rounded-full bg-primary mr-2" />
                        Get in Touch
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
                        Let’s build something <br />
                        <span className="text-primary">extraordinary.</span>
                    </h1>

                    <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
                        Ready to transform your digital presence? Tell us about your project, and let’s create something amazing together.
                    </p>
                </section>

                {/* Main grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Contact info */}
                    <aside className="lg:col-span-5 space-y-12">

                        {/* Email */}
                        <div className="flex items-start">
                            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                <span className="material-symbols-outlined text-primary">
                                    mail
                                </span>
                            </div>
                            <div className="ml-5">
                                <h3 className="text-lg font-semibold">Email Us</h3>
                                <p className="text-sm text-gray-400 mt-1 mb-2">
                                    For project inquiries and collaborations.
                                </p>
                                <a
                                    href="mailto:sales@sam-developments.com"
                                    className="text-primary font-medium hover:underline"
                                >
                                    sales@sam-developments.com
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start">
                            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                <span className="material-symbols-outlined text-primary">
                                    location_on
                                </span>
                            </div>
                            <div className="ml-5">
                                <h3 className="text-lg font-semibold">Working Hours</h3>
                                <p className="text-sm text-gray-400 mt-1">
                                    After hours & weekends
                                </p>
                                <p className="text-sm text-gray-500 mt-2 max-w-sm">
                                    We are a small, focused engineering team operating outside
                                    standard business hours to deliver high-quality work.
                                </p>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="flex items-start">
                            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                <span className="material-symbols-outlined text-primary">
                                    share
                                </span>
                            </div>
                            <div className="ml-5">
                                <h3 className="text-lg font-semibold">Follow Us</h3>
                                <div className="flex space-x-4 mt-3 text-gray-400">
                                    <a href="#" className="hover:text-primary transition">
                                        GitHub
                                    </a>
                                    <a href="#" className="hover:text-primary transition">
                                        LinkedIn
                                    </a>
                                    <a href="#" className="hover:text-primary transition">
                                        Twitter
                                    </a>
                                </div>
                            </div>
                        </div>

                    </aside>

                    {/* Form */}
                    <section className="lg:col-span-7">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 shadow-xl">

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-3 focus:border-primary focus:ring-primary"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="john@company.com"
                                            className="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-3 focus:border-primary focus:ring-primary"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Service Interest
                                    </label>
                                    <select className="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-3">
                                        <option>Select a service</option>
                                        <option>Website Development</option>
                                        <option>Custom Software</option>
                                        <option>Hosting & Maintenance</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 flex items-center gap-1">
                                        Budget Range
                                        <div>
                                            <abbr title="Your budget range helps us tailor our services to your needs." className="text-gray-400 cursor-help no-underline">?</abbr>
                                        </div>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="R0 - R10,000"
                                        className="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-3 focus:border-primary focus:ring-primary"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Project Details
                                    </label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us about your project, timeline, and goals..."
                                        className="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-3"
                                    />
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg bg-primary hover:bg-primary/90 font-bold transition shadow-lg shadow-primary/30"
                                    >
                                        Send Message
                                        <span className="material-symbols-outlined">
                                            arrow_forward
                                        </span>
                                    </button>

                                    <p className="mt-4 text-xs text-center text-gray-500">
                                        By submitting this form, you agree to our{" "}
                                        <a href="/privacy" className="underline hover:text-primary">
                                            Privacy Policy
                                        </a>
                                        .
                                    </p>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
