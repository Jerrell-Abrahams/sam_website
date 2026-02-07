import "./globals.css";

export const metadata = {
  title: "SAM | Engineering Digital Excellence",
};

export default function RootLayout({ children }) {
  return (
    <html className="dark" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

        <script
          id="tailwind-config"
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: "class",
                theme: {
                  extend: {
                    colors: {
                      "primary": "#1337ec",
                      "background-light": "#f6f6f8",
                      "background-dark": "#0a0a0b",
                      "charcoal-glass": "rgba(28, 29, 39, 0.7)",
                    },
                    fontFamily: {
                      "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "full": "9999px"
                    },
                  },
                },
              }
            `,
          }}
        />
      </head>

      <body className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
