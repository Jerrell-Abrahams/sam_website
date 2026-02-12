export default function Contact() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative bg-primary rounded-[2.5rem] overflow-hidden p-12 lg:p-24 text-center">
                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{"backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3TZvreS5JbJuCCiOQwNCaszlfgrjp5bRjjfQCoOwSRhi3yqCV3DfLT0mQSJan89R22or39zpjmkKL0wxL8kAtkZrDMecd7bbt16CwpfIRdQFvnOS9bPTF1JV3KawUmY-tGSHdm9lZsP3whdbpq0QL-WAB09V1Coh-dG_wfJNCyr7jDtL5MjYU3RqmcSBbz7Wd79pyrKYBmr9bgwkoWSk2vqZ3OK1lYqAekNp1E1tlYu0XTxZgy1q-MmwxYm1FuJmmc_sqYsilUfQJ');"}}></div>
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/30 rounded-full blur-[100px]"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/40 rounded-full blur-[100px]"></div>
                    <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl mx-auto">
                        <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                            Ready to build something extraordinary?
                        </h2>
                        <p className="text-blue-100 text-lg lg:text-xl font-light leading-relaxed">
                            Join high-growth brands and let's turn your vision into a high-performance digital reality. Our calendar is filling fast.
                        </p>
                        {/* <div className="flex flex-wrap justify-center gap-4 mt-4">
                            <button className="bg-white text-primary hover:bg-slate-100 px-10 py-5 rounded-xl text-lg font-bold transition-all shadow-xl hover:scale-105">
                                Book a Strategy Call
                            </button>
                            <button className="bg-primary/20 hover:bg-primary/30 text-white border border-white/30 px-10 py-5 rounded-xl text-lg font-bold transition-all backdrop-blur-md">
                                View Pricing
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>

        </section>
    );
}