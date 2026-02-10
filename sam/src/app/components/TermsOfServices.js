export default function TermsOfService() {
    return (
        <main className="flex-grow">
            <section className="relative px-6 py-12 lg:px-20 lg:py-20 bg-gradient-to-b from-background-dark to-charcoal-glass">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider">
                            <span className="material-symbols-outlined text-lg">gavel</span>
                            <span>Legal</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black tracking-tight">
                            Terms of Service
                        </h1>

                        <p className="text-slate-400 max-w-2xl">
                            Please read these Terms of Service carefully before using SAM’s
                            website or engaging our services.
                        </p>

                        <div className="flex items-center gap-2 mt-4 text-sm text-slate-400/80 bg-white/5 w-fit px-3 py-1.5 rounded-full border border-white/10">
                            <span className="material-symbols-outlined text-base">history</span>
                            <span>Last updated: February 09, 2026</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-[1200px] mx-auto px-6 lg:px-20 py-16 flex flex-col gap-12 text-slate-300 leading-relaxed">
                <section id="intro" className="scroll-mt-28">
                    <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                    <p className="mb-4">
                        Welcome to SAM (“we”, “our”, or “us”). By accessing our website or
                        using our services, you agree to be bound by these Terms of Service
                        (“Terms”). If you do not agree, you must not use our services.
                    </p>
                    <p>
                        We may update these Terms from time to time. Continued use of our
                        services after changes are posted constitutes acceptance of the
                        revised Terms.
                    </p>
                </section>

                {/* 2. Definitions */}
                <section id="definitions" className="scroll-mt-28 border-t border-white/10 pt-8">
                    <h2 className="text-2xl font-bold text-white mb-4">2. Definitions</h2>
                    <ul className="list-disc pl-5 space-y-3">
                        <li><strong className="text-white">Client:</strong> Any individual or entity engaging SAM.</li>
                        <li><strong className="text-white">Services:</strong> Website development, hosting, maintenance, and custom development.</li>
                        <li><strong className="text-white">Deliverables:</strong> All work products provided under an agreement or SOW.</li>
                        <li><strong className="text-white">Confidential Information:</strong> Non-public business or technical information.</li>
                    </ul>
                </section>

                {/* 3. Scope of Services */}
                <section id="scope" className="scroll-mt-28 border-t border-white/10 pt-8">
                    <h2 className="text-2xl font-bold text-white mb-4">3. Scope of Services</h2>
                    <p className="mb-4">
                        SAM provides fixed-price digital services including custom website
                        development, hosting, and ongoing maintenance as agreed in writing.
                    </p>
                    <p>
                        Services are performed primarily after business hours and on
                        weekends, unless otherwise agreed.
                    </p>
                </section>

                {/* 4. Client Obligations */}
                <section id="obligations" className="scroll-mt-28 border-t border-white/10 pt-8">
                    <h2 className="text-2xl font-bold text-white mb-4">4. Client Obligations</h2>
                    <ol className="list-decimal pl-5 space-y-3">
                        <li>Provide timely access to content, credentials, and approvals.</li>
                        <li>Ensure supplied materials do not infringe third-party rights.</li>
                        <li>Review deliverables promptly to avoid delays.</li>
                    </ol>
                </section>

                {/* 5. Payment Terms */}
                <section id="payments" className="scroll-mt-28 border-t border-white/10 pt-8">
                    <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms</h2>
                    <p className="mb-4">
                        All pricing is fixed unless otherwise stated. Invoices are payable
                        within the agreed timeframe.
                    </p>
                    <p>
                        Late payments may result in suspension of services and may accrue
                        interest at the maximum rate permitted by law.
                    </p>
                </section>

                {/* 6. Intellectual Property */}
                <section id="intellectual" className="scroll-mt-28 border-t border-white/10 pt-8">
                    <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
                    <p className="mb-4">
                        Upon full payment, the Client receives ownership of final
                        Deliverables, excluding SAM’s pre-existing tools and frameworks.
                    </p>
                    <p>
                        SAM retains rights to its background technology and may reuse
                        non-confidential concepts.
                    </p>
                </section>

                {/* 7. Confidentiality */}
                <section id="confidentiality" className="scroll-mt-28 border-t border-white/10 pt-8">
                    <h2 className="text-2xl font-bold text-white mb-4">7. Confidentiality</h2>
                    <p>
                        Both parties agree to keep Confidential Information private unless
                        disclosure is required by law.
                    </p>
                </section>

                {/* 8. Termination */}
                <section id="termination" className="scroll-mt-28 border-t border-white/10 pt-8">
                    <h2 className="text-2xl font-bold text-white mb-4">8. Term & Termination</h2>
                    <p>
                        Either party may terminate for material breach with written notice.
                        Fees for work completed remain payable.
                    </p>
                </section>

                {/* 9. Warranties */}
                <section id="warranties" className="scroll-mt-28 border-t border-white/10 pt-8">
                    <h2 className="text-2xl font-bold text-white mb-4">9. Warranties</h2>
                    <p>
                        Services are provided “as is” except where explicitly stated
                        otherwise.
                    </p>
                </section>

                {/* 10. Limitation of Liability */}
                <section id="liability" className="scroll-mt-28 border-t border-white/10 pt-8">
                    <h2 className="text-2xl font-bold text-white mb-4">10. Limitation of Liability</h2>
                    <p>
                        SAM shall not be liable for indirect or consequential damages. Total
                        liability is limited to fees paid in the preceding 12 months.
                    </p>
                </section>

                {/* 11–15. Misc */}
                <section id="misc" className="scroll-mt-28 border-t border-white/10 pt-8">
                    <h2 className="text-2xl font-bold text-white mb-4">11–15. Miscellaneous</h2>
                    <ul className="list-disc pl-5 space-y-3">
                        <li>Force Majeure</li>
                        <li>Indemnification</li>
                        <li>Severability</li>
                        <li>Entire Agreement</li>
                        <li>
                            <strong className="text-white">Governing Law:</strong> Republic of
                            South Africa
                        </li>
                    </ul>
                </section>

            </section>
        </main>
    );
}
