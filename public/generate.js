#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Import data
const { diensten, provincies, stats } = require('./data.js');

const baseDir = '/home/ubuntu/sanibroyeur-diensten';

// Template voor dienst index pagina (provincie keuze)
function createServiceIndexTemplate(dienst) {
    return `<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${dienst.naam} | Kies Uw Regio | Sanibroyeur Techniek Nederland</title>
    <meta name="description" content="${dienst.naam} service in heel Nederland. Kies uw provincie voor lokale service. 12 provincies, 245+ steden beschikbaar. Bel 085-2033172.">
    <meta name="keywords" content="${dienst.naam.toLowerCase()}, alle provincies, nederland, lokale service, ${dienst.categorie}">
    
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        
        .header {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            color: white;
            padding: 60px 0;
            text-align: center;
        }
        
        .header h1 { font-size: 3rem; font-weight: bold; margin-bottom: 20px; }
        .header p { font-size: 1.2rem; margin-bottom: 30px; opacity: 0.9; }
        
        .breadcrumb {
            background: #f8fafc;
            padding: 15px 0;
            font-size: 0.9rem;
        }
        
        .breadcrumb a {
            color: #2563eb;
            text-decoration: none;
        }
        
        .breadcrumb a:hover {
            text-decoration: underline;
        }
        
        .provinces-section {
            padding: 60px 0;
        }
        
        .provinces-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }
        
        .province-card {
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
            border-left: 5px solid #2563eb;
        }
        
        .province-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        }
        
        .province-name {
            font-size: 1.5rem;
            font-weight: bold;
            color: #1e40af;
            margin-bottom: 10px;
        }
        
        .province-stats {
            color: #6b7280;
            margin-bottom: 20px;
        }
        
        .province-button {
            width: 100%;
            background: #2563eb;
            color: white;
            padding: 12px;
            border: none;
            border-radius: 8px;
            font-weight: bold;
            text-decoration: none;
            text-align: center;
            display: block;
            transition: background 0.3s;
        }
        
        .province-button:hover {
            background: #1d4ed8;
        }
        
        .cta-button {
            background: #10b981;
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: bold;
            text-decoration: none;
            display: inline-block;
            transition: background 0.3s;
        }
        
        .cta-button:hover {
            background: #059669;
        }
        
        @media (max-width: 768px) {
            .header h1 { font-size: 2rem; }
            .provinces-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <!-- Breadcrumb -->
    <section class="breadcrumb">
        <div class="container">
            <nav>
                <a href="../">Diensten</a> › <span>${dienst.naam}</span>
            </nav>
        </div>
    </section>
    
    <!-- Header -->
    <section class="header">
        <div class="container">
            <h1>${dienst.naam}</h1>
            <p>Kies uw provincie voor lokale service en aanrijtijden</p>
            <a href="tel:085-2033172" class="cta-button">
                📞 Direct Bellen: 085-2033172
            </a>
        </div>
    </section>
    
    <!-- Provinces -->
    <section class="provinces-section">
        <div class="container">
            <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 20px; color: #1e40af;">
                Kies Uw Provincie
            </h2>
            <p style="text-align: center; color: #6b7280; font-size: 1.1rem; margin-bottom: 40px;">
                Selecteer uw provincie om de beschikbare steden en aanrijtijden te bekijken
            </p>
            
            <div class="provinces-grid">
                ${provincies.map(provincie => `
                    <div class="province-card">
                        <div class="province-name">${provincie.naam}</div>
                        <div class="province-stats">
                            📍 ${provincie.steden.length} steden beschikbaar<br>
                            ⏱️ Aanrijtijd: ${provincie.aanrijtijd}
                        </div>
                        <p style="color: #6b7280; margin-bottom: 20px;">
                            ${dienst.naam} service in ${provincie.naam}
                        </p>
                        <a href="${provincie.id}/" class="province-button">
                            Bekijk Steden →
                        </a>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
</body>
</html>`;
}

// Template voor provincie pagina (stad keuze)
function createProvinceTemplate(dienst, provincie) {
    const popularSteden = provincie.steden.filter(stad => stad.populair);
    const andereSteden = provincie.steden.filter(stad => !stad.populair);
    
    return `<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${dienst.naam} ${provincie.naam} | Kies Uw Stad | Sanibroyeur Techniek Nederland</title>
    <meta name="description" content="${dienst.naam} in ${provincie.naam}. ${provincie.steden.length} steden beschikbaar. Aanrijtijd ${provincie.aanrijtijd}. Bel 085-2033172 voor snelle service.">
    <meta name="keywords" content="${dienst.naam.toLowerCase()}, ${provincie.naam.toLowerCase()}, ${provincie.steden.map(s => s.naam.toLowerCase()).join(', ')}">
    
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        
        .header {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            color: white;
            padding: 60px 0;
            text-align: center;
        }
        
        .header h1 { font-size: 3rem; font-weight: bold; margin-bottom: 20px; }
        .header p { font-size: 1.2rem; margin-bottom: 30px; opacity: 0.9; }
        
        .breadcrumb {
            background: #f8fafc;
            padding: 15px 0;
            font-size: 0.9rem;
        }
        
        .breadcrumb a {
            color: #2563eb;
            text-decoration: none;
        }
        
        .cities-section {
            padding: 60px 0;
        }
        
        .cities-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }
        
        .city-card {
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        
        .city-card:hover {
            transform: translateY(-3px);
        }
        
        .city-card.popular {
            border: 2px solid #fbbf24;
            position: relative;
        }
        
        .popular-badge {
            position: absolute;
            top: -10px;
            right: 10px;
            background: #fbbf24;
            color: #92400e;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: bold;
        }
        
        .city-name {
            font-size: 1.2rem;
            font-weight: bold;
            color: #1e40af;
            margin-bottom: 5px;
        }
        
        .city-stats {
            color: #6b7280;
            font-size: 0.9rem;
            margin-bottom: 15px;
        }
        
        .city-button {
            width: 100%;
            background: #2563eb;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 6px;
            font-weight: bold;
            text-decoration: none;
            text-align: center;
            display: block;
            transition: background 0.3s;
        }
        
        .city-button:hover {
            background: #1d4ed8;
        }
        
        .section-title {
            font-size: 1.5rem;
            color: #1e40af;
            margin: 40px 0 20px 0;
            display: flex;
            align-items: center;
        }
        
        .section-title::before {
            content: '';
            width: 30px;
            height: 3px;
            background: #2563eb;
            margin-right: 15px;
        }
        
        @media (max-width: 768px) {
            .header h1 { font-size: 2rem; }
            .cities-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <!-- Breadcrumb -->
    <section class="breadcrumb">
        <div class="container">
            <nav>
                <a href="../../">Diensten</a> › 
                <a href="../">${dienst.naam}</a> › 
                <span>${provincie.naam}</span>
            </nav>
        </div>
    </section>
    
    <!-- Header -->
    <section class="header">
        <div class="container">
            <h1>${dienst.naam}<br><span style="color: #fbbf24;">${provincie.naam}</span></h1>
            <p>Kies uw stad voor lokale service informatie en directe hulp</p>
        </div>
    </section>
    
    <!-- Cities -->
    <section class="cities-section">
        <div class="container">
            ${popularSteden.length > 0 ? `
                <h2 class="section-title">🌟 Populaire Steden</h2>
                <div class="cities-grid">
                    ${popularSteden.map(stad => `
                        <div class="city-card popular">
                            <div class="popular-badge">POPULAIR</div>
                            <div class="city-name">${stad.naam}</div>
                            <div class="city-stats">
                                👥 ${stad.inwoners ? stad.inwoners.toLocaleString() : 'N/A'} inwoners<br>
                                ⏱️ Aanrijtijd: ${stad.aanrijtijd}
                            </div>
                            <a href="${stad.id}.html" class="city-button">
                                Bekijk Service Info →
                            </a>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
            
            ${andereSteden.length > 0 ? `
                <h2 class="section-title">📍 ${popularSteden.length > 0 ? 'Overige Steden' : 'Alle Steden'}</h2>
                <div class="cities-grid">
                    ${andereSteden.map(stad => `
                        <div class="city-card">
                            <div class="city-name">${stad.naam}</div>
                            <div class="city-stats">
                                ${stad.inwoners ? `👥 ${stad.inwoners.toLocaleString()} inwoners<br>` : ''}
                                ⏱️ ${stad.aanrijtijd}
                            </div>
                            <a href="${stad.id}.html" class="city-button">
                                Service Info →
                            </a>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    </section>
</body>
</html>`;
}

// Template voor stad pagina (eindpagina) - ZONDER urgentie
function createCityTemplate(dienst, provincie, stad) {
    return `<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${dienst.naam} ${stad.naam} | Professionele Service | Sanibroyeur Techniek NL</title>
    <meta name="description" content="${dienst.naam} in ${stad.naam}, ${provincie.naam}. ${stad.aanrijtijd} aanrijtijd. Professionele service. Bel: 085-2033172 voor vakkundige hulp.">
    <meta name="keywords" content="${dienst.naam.toLowerCase()}, ${stad.naam.toLowerCase()}, ${provincie.naam.toLowerCase()}, sanibroyeur ${stad.naam.toLowerCase()}">
    
    <!-- Local Business Schema -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Sanibroyeur Techniek Nederland - ${stad.naam}",
        "description": "${dienst.naam} in ${stad.naam}",
        "telephone": "085-2033172",
        "email": "sanibroyeurtechnieknederland@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "${stad.naam}",
            "addressRegion": "${provincie.naam}",
            "addressCountry": "NL"
        },
        "areaServed": {
            "@type": "City",
            "name": "${stad.naam}"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "${dienst.naam}",
            "itemListElement": [{
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "${dienst.naam}",
                    "description": "${dienst.naam} service in ${stad.naam}"
                }
            }]
        }
    }
    </script>
    
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        
        .breadcrumb {
            background: #f8fafc;
            padding: 15px 0;
            font-size: 0.9rem;
        }
        
        .breadcrumb a {
            color: #2563eb;
            text-decoration: none;
        }
        
        .header {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            color: white;
            padding: 60px 0;
            text-align: center;
        }
        
        .header h1 { font-size: 3rem; font-weight: bold; margin-bottom: 20px; }
        .header p { font-size: 1.2rem; margin-bottom: 30px; opacity: 0.9; }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }
        
        .stat-card {
            background: rgba(255, 255, 255, 0.1);
            padding: 15px;
            border-radius: 10px;
            text-align: center;
        }
        
        .stat-number {
            font-size: 1.5rem;
            font-weight: bold;
            color: #fbbf24;
        }
        
        .stat-label {
            font-size: 0.8rem;
            opacity: 0.8;
        }
        
        .cta-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .cta-button {
            background: #10b981;
            color: white;
            padding: 15px 25px;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: bold;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: background 0.3s;
        }
        
        .cta-button:hover {
            background: #059669;
        }
        
        .cta-button.secondary {
            background: white;
            color: #2563eb;
        }
        
        .cta-button.secondary:hover {
            background: #f1f5f9;
        }
        
        .content-section {
            padding: 60px 0;
        }
        
        .content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-top: 40px;
        }
        
        .content-card {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .content-card.problem {
            border-left: 5px solid #f59e0b;
            background: #fffbeb;
        }
        
        .content-card.solution {
            border-left: 5px solid #10b981;
            background: #f0fdf4;
        }
        
        .card-title {
            font-size: 1.3rem;
            font-weight: bold;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .card-title.problem {
            color: #d97706;
        }
        
        .card-title.solution {
            color: #10b981;
        }
        
        .symptom-list {
            list-style: none;
            padding: 0;
        }
        
        .symptom-list li {
            padding: 8px 0;
            border-bottom: 1px solid #e5e7eb;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .symptom-list li:last-child {
            border-bottom: none;
        }
        
        .local-info {
            background: #f8fafc;
            padding: 60px 0;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }
        
        .info-card {
            background: white;
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .info-icon {
            width: 60px;
            height: 60px;
            background: #e0e7ff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 1.5rem;
        }
        
        .info-title {
            font-size: 1.2rem;
            font-weight: bold;
            color: #1e40af;
            margin-bottom: 10px;
        }
        
        .final-cta {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 60px 0;
            text-align: center;
        }
        
        @media (max-width: 768px) {
            .header h1 { font-size: 2rem; }
            .content-grid { grid-template-columns: 1fr; }
            .cta-buttons { flex-direction: column; align-items: center; }
            .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
    </style>
</head>
<body>
    <!-- Breadcrumb -->
    <section class="breadcrumb">
        <div class="container">
            <nav>
                <a href="../../../">Diensten</a> › 
                <a href="../../">${dienst.naam}</a> › 
                <a href="../">${provincie.naam}</a> › 
                <span>${stad.naam}</span>
            </nav>
        </div>
    </section>
    
    <!-- Header -->
    <section class="header">
        <div class="container">
            <h1>${dienst.naam}<br><span style="color: #fbbf24;">${stad.naam}</span></h1>
            <p>Professionele ${dienst.naam.toLowerCase()} in ${stad.naam}, ${provincie.naam}. Aanrijtijd: ${stad.aanrijtijd}.</p>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-number">${stad.aanrijtijd.split(' ')[0]}</div>
                    <div class="stat-label">Min Aanrijtijd</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">100%</div>
                    <div class="stat-label">Garantie</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">5★</div>
                    <div class="stat-label">Beoordeling</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">24/7</div>
                    <div class="stat-label">Bereikbaar</div>
                </div>
            </div>
            
            <div class="cta-buttons">
                <a href="tel:085-2033172" class="cta-button">
                    📞 Direct Bellen: 085-2033172
                </a>
                <button class="cta-button secondary">
                    Gratis Offerte Aanvragen
                </button>
            </div>
        </div>
    </section>
    
    <!-- Content -->
    <section class="content-section">
        <div class="container">
            <div class="content-grid">
                <!-- Service Info -->
                <div class="content-card problem">
                    <h2 class="card-title problem">
                        🔧 ${dienst.naam} in ${stad.naam}
                    </h2>
                    <ul class="symptom-list">
                        <li>🔹 Professionele diagnose</li>
                        <li>🔹 Vakkundige reparatie</li>
                        <li>🔹 Kwaliteitsonderdelen</li>
                        <li>🔹 Snelle service</li>
                        <li>🔹 Eerlijke prijzen</li>
                    </ul>
                    <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px;">
                        <strong style="color: #92400e;">Service:</strong> 
                        <span style="color: #92400e;">Wij bieden professionele ${dienst.naam.toLowerCase()} in ${stad.naam} en omgeving.</span>
                    </div>
                </div>
                
                <!-- Waarom Kiezen -->
                <div class="content-card solution">
                    <h2 class="card-title solution">
                        ✅ Waarom kiezen voor ons?
                    </h2>
                    <ul class="symptom-list">
                        <li>✅ Gecertificeerde monteurs</li>
                        <li>✅ Jarenlange ervaring</li>
                        <li>✅ Garantie op werkzaamheden</li>
                        <li>✅ Transparante prijzen</li>
                        <li>✅ Lokale service</li>
                    </ul>
                    <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border: 1px solid #3b82f6; border-radius: 8px;">
                        <strong style="color: #1e40af;">Garantie:</strong> 
                        <span style="color: #1e40af;">Op alle werkzaamheden geven wij volledige garantie.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Local Info -->
    <section class="local-info">
        <div class="container">
            <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 20px; color: #1e40af;">
                ${dienst.naam} Service in ${stad.naam}
            </h2>
            
            <div class="info-grid">
                <div class="info-card">
                    <div class="info-icon">📍</div>
                    <div class="info-title">Lokale Service</div>
                    <p>Onze monteurs kennen ${stad.naam} goed en zijn snel ter plaatse.</p>
                </div>
                
                <div class="info-card">
                    <div class="info-icon">⏱️</div>
                    <div class="info-title">Snelle Aanrijtijd</div>
                    <p>Gemiddeld ${stad.aanrijtijd} naar ${stad.naam}.</p>
                </div>
                
                <div class="info-card">
                    <div class="info-icon">🔧</div>
                    <div class="info-title">Vakkundige Monteurs</div>
                    <p>Gecertificeerde specialisten met jarenlange ervaring.</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Final CTA -->
    <section class="final-cta">
        <div class="container">
            <h2 style="font-size: 2.5rem; margin-bottom: 20px;">
                Heeft u hulp nodig met uw sanibroyeur?
            </h2>
            <p style="font-size: 1.2rem; margin-bottom: 30px;">
                Neem contact op voor ${dienst.naam.toLowerCase()} in ${stad.naam}. Onze monteurs staan voor u klaar!
            </p>
            <div class="cta-buttons">
                <a href="tel:085-2033172" class="cta-button" style="background: white; color: #10b981;">
                    📞 Bel Nu: 085-2033172
                </a>
                <a href="https://wa.me/31852033172" class="cta-button" style="background: #fbbf24; color: #92400e;">
                    💬 WhatsApp Contact
                </a>
            </div>
            
            <div style="margin-top: 30px; opacity: 0.8;">
                <p>Service gebied: ${stad.naam} en omgeving | Aanrijtijd: ${stad.aanrijtijd}</p>
            </div>
        </div>
    </section>
</body>
</html>`;
}

// Functie om alle bestanden te genereren
function generateAllFiles() {
    console.log('🚀 Genereren van SEO structuur (zonder urgentie)...');
    console.log(`📊 Totaal: ${stats.totalDiensten} diensten × ${stats.totalSteden} steden = ${stats.totalPaginas} pagina's`);
    
    let generatedFiles = 0;
    
    // Maak diensten directory
    const dienstenDir = path.join(baseDir, 'diensten');
    if (!fs.existsSync(dienstenDir)) {
        fs.mkdirSync(dienstenDir, { recursive: true });
    }
    
    // Genereer voor elke dienst
    diensten.forEach(dienst => {
        console.log(`📝 Genereren: ${dienst.naam}...`);
        
        // Maak dienst directory
        const dienstDir = path.join(dienstenDir, dienst.id);
        if (!fs.existsSync(dienstDir)) {
            fs.mkdirSync(dienstDir, { recursive: true });
        }
        
        // Maak dienst index pagina (provincie keuze)
        const dienstIndexPath = path.join(dienstDir, 'index.html');
        fs.writeFileSync(dienstIndexPath, createServiceIndexTemplate(dienst));
        generatedFiles++;
        
        // Genereer voor elke provincie
        provincies.forEach(provincie => {
            // Maak provincie directory
            const provincieDir = path.join(dienstDir, provincie.id);
            if (!fs.existsSync(provincieDir)) {
                fs.mkdirSync(provincieDir, { recursive: true });
            }
            
            // Maak provincie index pagina (stad keuze)
            const provincieIndexPath = path.join(provincieDir, 'index.html');
            fs.writeFileSync(provincieIndexPath, createProvinceTemplate(dienst, provincie));
            generatedFiles++;
            
            // Genereer voor elke stad
            provincie.steden.forEach(stad => {
                const stadPath = path.join(provincieDir, `${stad.id}.html`);
                fs.writeFileSync(stadPath, createCityTemplate(dienst, provincie, stad));
                generatedFiles++;
            });
        });
    });
    
    console.log(`✅ Klaar! ${generatedFiles} bestanden gegenereerd (zonder urgentie).`);
    console.log(`📁 Bestanden staan in: ${baseDir}`);
    
    return {
        totalFiles: generatedFiles,
        totalServices: stats.totalDiensten,
        totalCities: stats.totalSteden,
        totalPages: stats.totalPaginas
    };
}

// Voer generatie uit
if (require.main === module) {
    const result = generateAllFiles();
    console.log('\n🎉 SEO STRUCTUUR COMPLEET (ZONDER URGENTIE)!');
    console.log(`📊 Statistieken:`);
    console.log(`   - ${result.totalServices} diensten`);
    console.log(`   - ${result.totalCities} steden`);
    console.log(`   - ${result.totalFiles} HTML bestanden`);
    console.log(`   - ${result.totalPages} unieke pagina's`);
}

module.exports = { generateAllFiles };

