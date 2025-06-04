"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const handleChange = () => {
      setIsMobile(mediaQuery.matches);
      if (!mediaQuery.matches) {
        setIsMenuOpen(false);
      }
    };
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/diensten", label: "Diensten" },
    { href: "/werkgebieden", label: "Werkgebieden" },
    { href: "/over-ons", label: "Over Ons" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      // Updated to use a lighter background from the new palette, e.g., a light primary or secondary color
      // The specific Tailwind class will depend on the final chosen light color from globals.css
      // For example, if --primary is a light blue, it might be `bg-primary` or a specific light blue class like `bg-blue-100`
      // For now, using a generic light background, assuming it will be defined or adjusted via CSS variables
      className={`sticky top-0 z-50 bg-secondary text-secondary-foreground shadow-md ${
        isMenuOpen && isMobile ? "h-screen" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            {/* Text color will now be based on --secondary-foreground, which should be dark for good contrast */}
            <span className="text-2xl font-bold">
              {siteConfig.name.split(" ")[0]} <span className="text-primary">{siteConfig.name.split(" ").slice(1).join(" ")}</span>
            </span>
          </Link>

          <nav className="hidden lg:flex space-x-4 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                // Text color adjusted for light background, should be a contrasting dark color
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variant="ghost"
              size="icon"
              // Adjusted icon colors for light background
              className="text-foreground/80 hover:bg-foreground/10 hover:text-foreground"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button asChild size="sm" className="ml-2 bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href={`tel:${siteConfig.contactInfo.telefoon ? siteConfig.contactInfo.telefoon.replace(/\D/g, "") : ""}`}>
                <Phone className="mr-2 h-4 w-4" />
                {siteConfig.contactInfo.telefoon}
              </a>
            </Button>
          </nav>

          <div className="lg:hidden flex items-center">
             <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variant="ghost"
              size="icon"
              className="mr-2 text-foreground/80 hover:bg-foreground/10 hover:text-foreground"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              onClick={toggleMenu}
              variant="ghost"
              size="icon"
              className="text-foreground/80 hover:bg-foreground/10 hover:text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && isMobile && (
        // Mobile menu background also light, text adjusted
        <div className="lg:hidden absolute top-20 left-0 w-full bg-secondary shadow-lg py-4 flex flex-col items-center h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="flex flex-col space-y-4 items-center w-full px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-lg font-medium text-foreground/80 hover:text-foreground w-full text-center py-3 rounded-md hover:bg-foreground/10"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="lg" className="w-full max-w-xs mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href={`tel:${siteConfig.contactInfo.telefoon ? siteConfig.contactInfo.telefoon.replace(/\D/g, "") : ""}`} onClick={closeMenu}>
                <Phone className="mr-2 h-5 w-5" />
                {siteConfig.contactInfo.telefoon}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

