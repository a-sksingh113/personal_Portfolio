import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import ScrollToTop from "./ScrollToTop"; 

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Satish's Portfolio",
  description: "My Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/sk-logo.png" sizes="any" />
      </head>
      <body>
        {/* className={inter.className} */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollToTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
