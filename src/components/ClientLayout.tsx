import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
// import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/Header"; // Changed to named import if Header is default export
import { Footer } from "@/components/Footer"; // Changed to named import if Footer is default export

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <div className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

