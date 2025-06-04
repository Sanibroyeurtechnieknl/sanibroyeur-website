"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, HomeIcon, WrenchIcon, MapIcon, UsersIcon, InfoIcon, MessageCircleQuestionIcon, NewspaperIcon } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerNavLinks = [
    { href: "/", label: "Home", icon: <HomeIcon className="h-4 w-4 mr-2" /> },
    { href: "/diensten", label: "Diensten", icon: <WrenchIcon className="h-4 w-4 mr-2" /> },
    { href: "/werkgebieden", label: "Werkgebieden", icon: <MapIcon className="h-4 w-4 mr-2" /> },
    // { href: "/over-ons", label: "Over Ons", icon: <UsersIcon className="h-4 w-4 mr-2" /> }, // Assuming Over Ons might not be a priority page for now
    { href: "/faq", label: "FAQ", icon: <MessageCircleQuestionIcon className="h-4 w-4 mr-2" /> },
    { href: "/blog", label: "Blog", icon: <NewspaperIcon className="h-4 w-4 mr-2" /> },
    { href: "/contact", label: "Contact", icon: <Mail className="h-4 w-4 mr-2" /> },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-black text-gray-300 dark:text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Column 1: Brand & Intro */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <h2 className="text-2xl font-bold text-white">{siteConfig.name}</h2>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              {siteConfig.description.substring(0, 150)}... {/* Shortened description for footer */}
            </p>
            <Button asChild variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors">
              <Link href="/contact">Direct Contact</Link>
            </Button>
          </div>

          {/* Column 2: Navigatie */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Pagina&apos;s</h3>
            <ul className="space-y-2 text-sm">
              {footerNavLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center text-gray-300 hover:text-blue-300 hover:underline transition-colors">
                    {link.icon}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Bedrijfsgegevens */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact & Info</h3>
            <ul className="space-y-3 text-sm">
              {siteConfig.contactInfo.adres && siteConfig.contactInfo.adres.straat && (
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2.5 mt-1 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400">
                    {siteConfig.contactInfo.adres.straat}<br />
                    {siteConfig.contactInfo.adres.postcode} {siteConfig.contactInfo.adres.plaats}
                  </span>
                </li>
              )}
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2.5 text-blue-400 flex-shrink-0" />
                <a href={`tel:${siteConfig.contactInfo.telefoon ? siteConfig.contactInfo.telefoon.replace(/\D/g, "") : ""}`} className="text-gray-300 hover:text-blue-300 transition-colors">
                  {siteConfig.contactInfo.telefoon}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2.5 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contactInfo.email}`} className="text-gray-300 hover:text-blue-300 transition-colors">{siteConfig.contactInfo.email}</a>
              </li>
              <li className="mt-3 pt-3 border-t border-slate-700">
                {siteConfig.contactInfo.kvk && <p className="text-xs text-gray-500">KVK: {siteConfig.contactInfo.kvk}</p>}
                {siteConfig.contactInfo.btw && <p className="text-xs text-gray-500">BTW: {siteConfig.contactInfo.btw}</p>}
                {siteConfig.contactInfo.iban && <p className="text-xs text-gray-500">IBAN: {siteConfig.contactInfo.iban}</p>} {/* Added IBAN */}
              </li>
            </ul>
            <h3 className="text-lg font-semibold text-white mb-3 mt-6">Meer Informatie</h3>
            <ul className="space-y-1.5 text-sm">
                <li><Link href="/privacybeleid" className="text-gray-400 hover:text-blue-300 transition-colors">Privacybeleid</Link></li>
                <li><Link href="/algemene-voorwaarden" className="text-gray-400 hover:text-blue-300 transition-colors">Algemene Voorwaarden</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 mt-8 text-center text-xs text-gray-500">
          <p>&copy; {currentYear} {siteConfig.name}. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}

