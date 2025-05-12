/* eslint-disable */
"use client";

import { siteConfig } from "@/lib/siteConfig";
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle2, MessageSquare, Clock, Info } from "lucide-react"; // Added Clock and Info icons
import Link from "next/link";
import ProminentCallButton from "@/components/ProminentCallButton";
import React, { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  const { contactInfo } = siteConfig;
  const adres = contactInfo?.adres;
  const openingstijden = {
    standaard: "Maandag - Vrijdag: 08:00 - 18:00",
    weekend: "Zaterdag: 09:00 - 17:00",
    zondag: "Zondag: Gesloten (spoedservice beschikbaar)",
    spoed: "24/7 Spoedservice beschikbaar voor noodgevallen"
  }; // Placeholder business hours

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    if (!formData.name || !formData.email || !formData.message) {
      setError("Naam, e-mailadres en bericht zijn verplichte velden.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Er is een fout opgetreden.");
      }

      setSuccess(result.message || "Bericht succesvol verzonden!");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" }); // Reset form
    } catch (err: any) {
      setError(err.message || "Kon het bericht niet verzenden. Probeer het later opnieuw.");
    }
    setIsLoading(false);
  };

  const phoneNumber = contactInfo.telefoon;
  const whatsappNumber = phoneNumber.replace(/[^0-9]/g, "");
  const whatsappLink = `https://wa.me/${whatsappNumber.startsWith("31") ? whatsappNumber : "31" + whatsappNumber.substring(1)}`;

  const fullAddress = adres ? `${adres.straat}, ${adres.postcode} ${adres.plaats}, Nederland` : "";
  const mapsEmbedUrl = fullAddress ? `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed&hl=nl` : "";


  return (
    <main className="flex-1 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProminentCallButton phoneNumber={contactInfo.telefoon} className="w-full md:w-auto mb-8" />
      
        <section className="grid items-center gap-10 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-4">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl text-gray-800 dark:text-white">
              Neem Contact Op met {siteConfig.name}
            </h1>
            <p className="max-w-[700px] text-lg text-gray-600 dark:text-gray-300">
              Heeft u een vraag over uw Sanibroyeur, wilt u een vrijblijvende offerte aanvragen, of direct een afspraak maken voor installatie, reparatie of onderhoud? Ons team van Sanibroyeur specialisten staat klaar om u te helpen.
            </p>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-2 items-start">
            <div className="rounded-xl border bg-white dark:bg-slate-800 p-6 shadow-lg">
              <h2 className="mb-6 text-3xl font-semibold text-gray-700 dark:text-gray-100">Onze Contactgegevens</h2>
              <div className="space-y-6">
                {adres && adres.straat && adres.postcode && adres.plaats && (
                  <div className="flex items-start">
                    <MapPin className="mr-4 h-7 w-7 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Postadres:</h3>
                      <address className="text-gray-500 dark:text-gray-400 not-italic">
                        {adres.straat}<br />
                        {adres.postcode} {adres.plaats}
                      </address>
                    </div>
                  </div>
                )}
                <div className="flex items-start">
                  <Phone className="mr-4 h-7 w-7 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Telefoonnummer:</h3>
                    <a href={`tel:${contactInfo.telefoon.replace(/\s/g, "")}`} className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
                      {contactInfo.telefoon}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-4 h-7 w-7 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">E-mailadres:</h3>
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageSquare className="mr-4 h-7 w-7 flex-shrink-0 text-green-500 dark:text-green-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">WhatsApp:</h3>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:underline">
                      Stuur ons een bericht
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-gray-700 dark:text-gray-200 flex items-center">
                  <Clock className="mr-3 h-6 w-6 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                  Openingstijden:
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{openingstijden.standaard}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{openingstijden.weekend}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{openingstijden.zondag}</p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 italic">{openingstijden.spoed}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-gray-700 dark:text-gray-200 flex items-center">
                    <Info className="mr-3 h-6 w-6 flex-shrink-0 text-blue-600 dark:text-blue-400" /> 
                    Bedrijfsinformatie:
                </h3>
                {contactInfo.kvk && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">KVK-nummer: {contactInfo.kvk}</p>}
                {contactInfo.btw && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">BTW-nummer: {contactInfo.btw}</p>}
                {contactInfo.iban && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">IBAN: {contactInfo.iban}</p>} 
              </div>

              {mapsEmbedUrl && (
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-700">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">Locatie:</h3>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                        <iframe 
                            src={mapsEmbedUrl}
                            width="100%" 
                            height="300" 
                            style={{ border:0 }} 
                            allowFullScreen={true} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Kaartlocatie van ${siteConfig.name}`}>
                        </iframe>
                    </div>
                </div>
              )}
            </div>

            <div id="contact-form" className="rounded-xl border bg-white dark:bg-slate-800 p-6 shadow-lg scroll-mt-20">
              <h2 className="mb-6 text-3xl font-semibold text-gray-700 dark:text-gray-100">Stuur Ons Direct Een Bericht</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Naam *</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} autoComplete="name" required className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">E-mailadres *</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} autoComplete="email" required className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Telefoonnummer (optioneel)</label>
                  <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} autoComplete="tel" className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Betreft dienst (optioneel)</label>
                  <select name="service" id="service" value={formData.service} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                    <option value="">Kies een dienst...</option>
                    <option value="Sanibroyeur Installatie">Sanibroyeur Installatie</option>
                    <option value="Sanibroyeur Reparatie">Sanibroyeur Reparatie</option>
                    <option value="Sanibroyeur Onderhoud">Sanibroyeur Onderhoud</option>
                    <option value="Sanibroyeur Verstopping">Sanibroyeur Verstopping</option>
                    <option value="Advies en Inspectie">Advies en Inspectie</option>
                    <option value="Spoedservice">Spoedservice</option>
                    <option value="Algemene vraag">Algemene vraag</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Bericht *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"></textarea>
                </div>
                
                {error && (
                  <div className="flex items-center rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-700 dark:bg-red-900/30 dark:text-red-300">
                    <AlertCircle className="mr-2 h-5 w-5 flex-shrink-0" />
                    {error}
                  </div>
                )}
                {success && (
                  <div className="flex items-center rounded-md border border-green-200 bg-green-50 p-3 text-sm text-green-700 dark:border-green-700 dark:bg-green-900/30 dark:text-green-300">
                    <CheckCircle2 className="mr-2 h-5 w-5 flex-shrink-0" />
                    {success}
                  </div>
                )}

                <div>
                  <Button type="submit" disabled={isLoading} className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-base font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-slate-900 disabled:opacity-70">
                    {isLoading ? (
                      <>
                        <svg className="mr-2 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Verzenden...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Verstuur Bericht
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

