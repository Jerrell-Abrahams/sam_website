export default function TermsOfServices() {
    return (
        <main className="flex-grow">

            {/* Hero */}
            <section className="relative px-6 py-12 lg:px-20 lg:py-20 bg-gradient-to-b from-background-dark to-charcoal-glass">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider">
                            <span className="material-symbols-outlined text-lg">gavel</span>
                            <span>Legal</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black">
                            Terms of Service
                        </h1>

                        <p className="text-gray-400 text-lg max-w-2xl">
                            Please read these terms carefully before using our services. They
                            outline the rules and regulations for the use of SAM’s website and
                            services.
                        </p>

                        <div className="flex items-center gap-2 mt-4 text-sm text-gray-400 bg-white/5 w-fit px-3 py-1.5 rounded-full border border-white/10">
                            <span className="material-symbols-outlined text-base">history</span>
                            <span>Last updated: 09 February, 2026</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-12 text-gray-300 leading-relaxed">

                <section id="intro">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-primary text-sm">
                            1
                        </span>
                        Introduction
                    </h2>
                    <p className="mb-4">
                        Welcome to SAM ("we", "our", or "us"). By accessing or using our
                        website and services, you agree to be bound by these Terms of
                        Service. If you do not agree, please do not use our services.
                    </p>
                    <p>
                        We may update these Terms from time to time. Continued use of our
                        services after changes constitutes acceptance of the updated Terms.
                    </p>
                </section>

                <section id="definitions" className="pt-8 border-t border-white/10">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-primary text-sm">
                            2
                        </span>
                        Definitions
                    </h2>
                    <ul className="list-disc pl-5 space-y-3 marker:text-primary">
                        <li>
                            <strong className="text-white">Client:</strong> Any individual or
                            entity engaging SAM for services.
                        </li>
                        <li>
                            <strong className="text-white">Deliverables:</strong> The final
                            work products created by SAM under an agreed scope.
                        </li>
                        <li>
                            <strong className="text-white">Confidential Information:</strong>{" "}
                            Non-public information disclosed by either party.
                        </li>
                    </ul>
                </section>

                <section id="scope" className="pt-8 border-t border-white/10">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-primary text-sm">
                            3
                        </span>
                        Scope of Services
                    </h2>
                    <p className="mb-4">
                        SAM provides website development, custom software, hosting, and
                        maintenance services as defined in the agreed project scope.
                    </p>

                    <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Website & Web App Development",
                                "Custom Software Solutions",
                                "Hosting & Maintenance",
                                "Technical Consulting",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-primary text-sm mt-1">
                                        check_circle
                                    </span>
                                    <span className="text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* 4. Client Obligations */}
                <section id="obligations" className="pt-8 border-t border-white/10">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-primary text-sm">
                            4
                        </span>
                        Client Obligations
                    </h2>
                    <ol className="list-decimal pl-5 space-y-3">
                        <li>Provide required content and access on time.</li>
                        <li>Review and approve deliverables promptly.</li>
                        <li>
                            Ensure all supplied materials do not violate third-party rights.
                        </li>
                    </ol>
                </section>

                {/* 5. Payments */}
                <section id="payments" className="pt-8 border-t border-white/10">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-primary text-sm">
                            5
                        </span>
                        Payment Terms
                    </h2>
                    <p>
                        Payments are fixed-price and due according to the agreed payment
                        schedule. All fees are non-refundable once work has commenced unless
                        otherwise agreed in writing.
                    </p>
                </section>

                <section className="pt-8 border-t border-white/10">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Additional Terms
                    </h2>
                    <ul className="space-y-3">
                        <li>Intellectual property transfers upon full payment.</li>
                        <li>Both parties must maintain confidentiality.</li>
                        <li>Services are provided “as is” without guarantees.</li>
                        <li>Liability is limited to fees paid.</li>
                        <li>Governing law: Republic of South Africa.</li>
                    </ul>
                </section>

            </section>
        </main>
    );
}
