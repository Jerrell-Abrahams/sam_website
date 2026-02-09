export default function Pricing() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 relative">
            <div className="relative pb-20 sm:pt-10 sm:pb-24 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 dark:bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
                        <span className="text-xs font-semibold tracking-wide uppercase text-gray-600 dark:text-gray-300">
                            You pay for what you want
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
                        Transparent Pricing for{" "}
                        <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                            Digital Presence.
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-text-muted">
                        Choose the plan that fits your growth stage. The right investment in your digital presence can unlock new opportunities and drive exponential growth.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    <div className="relative flex flex-col p-8 bg-white dark:bg-charcoal-glass rounded-2xl border border-gray-200/60 dark:border-white/10 hover:border-primary/50 transition-all duration-300">
                        <div className="mb-6">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                <span className="material-symbols-outlined text-2xl">
                                    rocket_launch
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Starter</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm h-10">
                                Perfect for startups needing a robust MVP or landing page.
                            </p>
                        </div>

                        <div className="mb-8">
                            <span className="text-4xl font-extrabold">R3000</span>
                            <span className="text-gray-500 dark:text-gray-400 font-medium">
                                /project
                            </span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Custom UI/UX Design",
                                "Mobile Responsive Layout",
                                "CMS Integration (Headless)",
                                "Basic SEO Optimization",
                                "2 Rounds of Revisions",
                            ].map((item) => (
                                <li key={item} className="flex items-start">
                                    <span className="material-symbols-outlined text-primary mr-3">
                                        check_circle
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#"
                            className="block w-full py-3 px-4 bg-gray-100 dark:bg-white/5 hover:bg-primary hover:text-white font-semibold text-center rounded-lg transition"
                        >
                            Get Started
                        </a>
                    </div>

                    <div className="relative flex flex-col p-8 bg-white dark:bg-charcoal-glass rounded-2xl border-2 border-primary shadow-2xl shadow-primary/20 scale-105 z-10">
                        <div className="absolute top-0 right-0 -mt-4 mr-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            Most Popular
                        </div>

                        <div className="mb-6">
                            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-6 text-white shadow-lg shadow-primary/30">
                                <span className="material-symbols-outlined text-2xl">
                                    trending_up
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Growth</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm h-10">
                                Scalable solutions for growing businesses and e-commerce.
                            </p>
                        </div>

                        <div className="mb-8">
                            <span className="text-4xl font-extrabold">R12,500</span>
                            <span className="text-gray-500 dark:text-gray-400 font-medium">
                                /project
                            </span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Everything in Starter, plus:",
                                "Advanced Interactions & Animations",
                                "E-commerce Functionality",
                                "API Integrations & Webhooks",
                                "Performance Optimization (99+ Lighthouse)",
                                "Analytics Setup & Tracking",
                            ].map((item) => (
                                <li key={item} className="flex items-start">
                                    <span className="material-symbols-outlined text-primary mr-3">
                                        check_circle
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#"
                            className="block w-full py-3 px-4 bg-primary hover:bg-primary/90 text-white font-semibold text-center rounded-lg shadow-lg shadow-primary/25 transition"
                        >
                            Get Started
                        </a>
                    </div>

                    <div className="relative flex flex-col p-8 bg-white dark:bg-charcoal-glass rounded-2xl border border-gray-200/60 dark:border-white/10 hover:border-primary/50 transition-all duration-300">
                        <div className="mb-6">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                <span className="material-symbols-outlined text-2xl">
                                    business
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm h-10">
                                Full-scale digital product development and dedicated teams.
                            </p>
                        </div>

                        <div className="mb-8">
                            <span className="text-4xl font-extrabold">Custom</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Everything in Growth, plus:",
                                "Dedicated Project Manager",
                                "Complex Backend Architecture",
                                "SLA & Priority Support",
                                "Security Audits & Compliance",
                                "User Testing & QA Labs",
                            ].map((item) => (
                                <li key={item} className="flex items-start">
                                    <span className="material-symbols-outlined text-primary mr-3">
                                        check_circle
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#"
                            className="block w-full py-3 px-4 bg-gray-100 dark:bg-white/5 hover:bg-primary hover:text-white font-semibold text-center rounded-lg transition"
                        >
                            Contact Sales
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
