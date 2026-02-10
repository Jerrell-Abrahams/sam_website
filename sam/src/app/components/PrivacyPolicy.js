export default function PrivacyPolicy() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto sidebar-scroll pr-4">
            <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 pl-3">
              Contents
            </h5>
            <nav className="space-y-1">
              <a
                href="#introduction"
                className="block px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-neutral-dark hover:text-primary dark:hover:text-primary transition-colors"
              >
                Introduction
              </a>
              <a
                href="#info-collect"
                className="block px-3 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary dark:text-primary-light border-l-2 border-primary"
              >
                Information We Collect
              </a>
              <a
                href="#purpose"
                className="block px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-neutral-dark hover:text-primary dark:hover:text-primary transition-colors"
              >
                Purpose of Processing
              </a>
              <a
                href="#security"
                className="block px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-neutral-dark hover:text-primary dark:hover:text-primary transition-colors"
              >
                Data Security
              </a>
              <a
                href="#rights"
                className="block px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-neutral-dark hover:text-primary dark:hover:text-primary transition-colors"
              >
                Your Rights (POPIA)
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-neutral-dark hover:text-primary dark:hover:text-primary transition-colors"
              >
                Information Officer
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-9 space-y-16">
          {/* Header */}
          <div className="mb-12 border-b border-slate-200 dark:border-neutral-dark pb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary dark:text-primary-light">
                POPIA Compliant
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-neutral-dark text-slate-600 dark:text-slate-400">
                Last Updated: Oct 24, 2023
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
              At SAM, we are committed to protecting your privacy and ensuring
              the security of your personal information. This policy outlines
              how we process data in compliance with the Protection of Personal
              Information Act (POPIA).
            </p>
          </div>

          {/* Sections */}
          {/* 1. Introduction */}
          <section className="scroll-mt-28" id="introduction">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              1. Introduction
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
              <p>
                SAM (Pty) Ltd ("SAM", "we", "us", or "our") respects your
                privacy and is committed to protecting your personal data. This
                privacy policy will inform you as to how we look after your
                personal data when you visit our website (regardless of where
                you visit it from) and tell you about your privacy rights and
                how the law protects you.
              </p>
              <p>
                This policy applies to all visitors to our website, clients,
                potential clients, and suppliers. By using our services or
                providing us with your personal information, you agree to the
                processing of your personal information as set out in this
                policy.
              </p>
            </div>
          </section>

          {/* 2. Information We Collect */}
          <section className="scroll-mt-28" id="info-collect">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              2. Information We Collect
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              We may collect, use, store and transfer different kinds of personal
              data about you which we have grouped together as follows:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Identity & Contact Data */}
              <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-neutral-dark shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="material-icons text-primary">badge</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Identity &amp; Contact Data
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="material-icons text-primary text-base mt-0.5">
                      check_circle
                    </span>
                    First name, maiden name, last name.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="material-icons text-primary text-base mt-0.5">
                      check_circle
                    </span>
                    Email address and telephone numbers.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="material-icons text-primary text-base mt-0.5">
                      check_circle
                    </span>
                    Billing address and delivery address.
                  </li>
                </ul>
              </div>

              {/* Technical & Usage Data */}
              <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-neutral-dark shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="material-icons text-primary">devices</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Technical &amp; Usage Data
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="material-icons text-primary text-base mt-0.5">
                      check_circle
                    </span>
                    IP address, browser type and version.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="material-icons text-primary text-base mt-0.5">
                      check_circle
                    </span>
                    Time zone setting and location.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="material-icons text-primary text-base mt-0.5">
                      check_circle
                    </span>
                    Operating system and platform.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}