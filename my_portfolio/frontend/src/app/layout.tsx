import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import ScrollToTop from "../components/ui/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sonu Gupta | Full Stack Developer",
  description: "Portfolio of Sonu Gupta, a Full Stack Developer specializing in React.js, Next.js, TypeScript, and Node.js.",
  keywords: ["Sonu Gupta", "Full Stack Developer", "Hanging Panda", "MERN Stack", "Next.js", "TypeScript", "Spring Boot", "Bihar", "India"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Providers>
          <Header />
          <main className="flex-grow pt-16 sm:pt-20">
            {children}
          </main>
          <ScrollToTop />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
