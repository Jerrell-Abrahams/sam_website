export default function AboutSection() {
    return (
        <section className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 pt-24 pb-32">
                {/* Header */}
                <header className="mb-24 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                            Our Story
                        </span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white mb-6">
                        A small team <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                            building big ideas.
                        </span>
                    </h1>

                    <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light max-w-2xl">
                        We focus on crafting premium digital products through thoughtful
                        engineering, modern design, and obsessive attention to detail.
                    </p>
                </header>

                {/* Mission */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
                    <div className="p-10 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur border border-slate-200 dark:border-white/10 shadow-sm">
                        <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center rounded-xl mb-6">
                            <span className="material-icons-round text-primary">
                                rocket_launch
                            </span>
                        </div>

                        <h2 className="text-2xl font-black mb-4 text-slate-900 dark:text-white">
                            Our Mission
                        </h2>

                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                            To transform ambitious ideas into refined digital experiences.
                            Every decision we make balances performance, usability, and long-term
                            scalability.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                icon: "auto_awesome",
                                title: "Innovation First",
                                desc: "We embrace modern tools and patterns to stay ahead without chasing hype.",
                            },
                            {
                                icon: "verified_user",
                                title: "Uncompromising Quality",
                                desc: "Clean code, strong foundations, and polished execution — always.",
                            },
                            {
                                icon: "diversity_3",
                                title: "True Collaboration",
                                desc: "We operate as an extension of your team, not just a vendor.",
                            },
                        ].map((item) => (
                            <div key={item.title} className="flex gap-6">
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                    <span className="material-icons-round text-primary">
                                        {item.icon}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 font-light">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team */}
                {/* <section>
                    <div className="mb-12 max-w-xl">
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
                            Meet the team
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 font-light">
                            The people shaping every line of code and pixel on screen.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            {
                                name: "Jason Smith",
                                role: "Developer & Founder",
                                bio: "Full Stack Developer",
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXVtI5TyhXRMA7cAQtp9xPbF6rzGICfY8LgXeS5_42_G5ym1gvX9KC6tl7gl6NicU7m3yPmDSZhGDK8hsYSw6kLxCYuDD6QNIIYFHfrOP544NWkasq8G6HrqCTukxBfMFKTUuGTKQ0LSJSaTPhNjnAmKdtX-Kln2yxYFqv2hA1uD794tejWZh8u0V-aRIow9TgbGvHE4szKZyx19AoYPntl0jHIY8EeNV72arkK7rX9vnC1H0-YK6Wud72Ux2L97xNeRplYDXmz-k",
                            },
                            {
                                name: "Jerrell Abrahams",
                                role: "Developer & Founder",
                                bio: "Full Stack Developer",
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjpJQsR1HUVyiEv7WX779eOAIm7eu89OWjCxLRDThjVSMEMaYMGUE4cUo3MqAh8WhfXztIfEKOiXnllZ4l-wFvvnOhhNQEcXzyA3Odj5EBaoE-2bH_9k93jbWAnNj3rjpDExiutclyPYpldKsaLakwSYf1nrFLrIbOB65yWlkauYrlTpk6Za9Xx9_b3Iwizf9LXRLfsb5K6LUxp456HX_zPGX7DP4DZnLAOVWWuMgr4lxvdeZXjIZpErlhAX43pZNrYdGV2fZTCkw",
                            },
                            {
                                name: "Dylan Mostert",
                                role: "Developer & Founder",
                                bio: "Chartered Developer",
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFlrsv-jNqdAYoZosVwD5C9qOWQE-Rhj7ve-suRUMJImhfoWa3uMJHF3txRfbxe6HKU6ZcT7sQr1w8fLTjfa-n_JqxrCGt4aH5PONrzot4wc8KHo4vanksXQlxPHZB3H4JdD3kzNypBm-OpK9I2qSN_vxOruN5ZvjWWzJbAuoRsqASp2yXWdbm3nPS2OGR93b4VYGKBNh_Vabh131XqwOJ7W9YBR_wq_It8993fDokcJLP2ig1fr-5PcpB8v5Ak9zH2lAnH9nUCV8",
                            },

                        ].map((member) => (
                            <div key={member.name}>
                                <div className="aspect-square rounded-3xl overflow-hidden mb-6 bg-slate-100 dark:bg-zinc-900">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                                    />
                                </div>
                                <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                                    {member.name}
                                </h4>
                                <p className="text-primary text-sm font-bold tracking-wide">
                                    {member.role}
                                </p>
                                <p className="text-slate-600 dark:text-slate-400 text-sm font-light">
                                    {member.bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </section> */}
            </div>
        </section>
    );
}
