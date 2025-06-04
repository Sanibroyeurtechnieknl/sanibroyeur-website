/**
 * Automatische Integratie Script voor Sanibroyeur Diensten
 * 
 * Dit script zorgt ervoor dat:
 * 1. Het hoofdmenu automatisch wordt uitgebreid met "Alle Diensten"
 * 2. Bestaande diensten knoppen doorverwijzen naar de nieuwe pagina's
 * 3. Alle links automatisch worden gemapped
 */

(function() {
    'use strict';
    
    // Mapping van bestaande diensten naar nieuwe pagina's
    const dienstenMapping = {
        // Problemen (zoals ze waarschijnlijk op de huidige site staan)
        'verstopt': '/diensten/sanibroyeur-verstopt/',
        'lekt': '/diensten/sanibroyeur-lekt/',
        'werkt-niet': '/diensten/sanibroyeur-werkt-niet/',
        'start-niet': '/diensten/sanibroyeur-start-niet/',
        'maakt-lawaai': '/diensten/sanibroyeur-maakt-lawaai/',
        'stinkt': '/diensten/sanibroyeur-stinkt/',
        'rood-lampje': '/diensten/sanibroyeur-rood-lampje/',
        'motor-problemen': '/diensten/sanibroyeur-motor-problemen/',
        
        // Standaard diensten
        'reparatie': '/diensten/sanibroyeur-reparatie/',
        'installatie': '/diensten/sanibroyeur-installatie/',
        'onderhoud': '/diensten/sanibroyeur-onderhoud/',
        'ontstopping': '/diensten/sanibroyeur-ontstopping/',
        'vervanging': '/diensten/sanibroyeur-vervanging/',
        
        // Service diensten
        'spoeddienst': '/diensten/sanibroyeur-spoeddienst/',
        '24-uur': '/diensten/sanibroyeur-24-uur/',
        'weekend': '/diensten/sanibroyeur-weekend/',
        'avond': '/diensten/sanibroyeur-avond/',
        
        // Locatie specifiek
        'kelder': '/diensten/sanibroyeur-kelder/',
        'toilet': '/diensten/sanibroyeur-toilet/',
        'badkamer': '/diensten/sanibroyeur-badkamer/',
        'kantoor': '/diensten/sanibroyeur-kantoor/',
        
        // Merken
        'sfa': '/diensten/sfa-sanibroyeur/',
        'grundfos': '/diensten/grundfos-sanibroyeur/',
        'saniflo': '/diensten/saniflo-sanibroyeur/',
        'dab': '/diensten/dab-sanibroyeur/'
    };
    
    // Tekst-gebaseerde mapping voor flexibele matching
    const tekstMapping = {
        'sanibroyeur verstopt': '/diensten/sanibroyeur-verstopt/',
        'sanibroyeur lekt': '/diensten/sanibroyeur-lekt/',
        'sanibroyeur werkt niet': '/diensten/sanibroyeur-werkt-niet/',
        'sanibroyeur start niet': '/diensten/sanibroyeur-start-niet/',
        'sanibroyeur reparatie': '/diensten/sanibroyeur-reparatie/',
        'sanibroyeur installatie': '/diensten/sanibroyeur-installatie/',
        'sanibroyeur onderhoud': '/diensten/sanibroyeur-onderhoud/',
        'sanibroyeur spoeddienst': '/diensten/sanibroyeur-spoeddienst/',
        'sanibroyeur ontstopping': '/diensten/sanibroyeur-ontstopping/',
        'sanibroyeur service': '/diensten.html',
        'alle diensten': '/diensten.html',
        'diensten overzicht': '/diensten.html'
    };
    
    /**
     * Voegt "Alle Diensten" toe aan het hoofdmenu
     */
    function voegDienstenToeAanMenu() {
        // Zoek naar verschillende mogelijke menu structuren
        const menuSelectors = [
            'nav ul',
            '.menu ul',
            '.navigation ul',
            '.main-menu ul',
            '.header-menu ul',
            '#menu ul',
            '.navbar ul'
        ];
        
        let menuGevonden = false;
        
        menuSelectors.forEach(selector => {
            const menu = document.querySelector(selector);
            if (menu && !menuGevonden) {
                // Controleer of "Alle Diensten" al bestaat
                const bestaandeDienstenLink = Array.from(menu.querySelectorAll('a')).find(
                    link => link.textContent.toLowerCase().includes('diensten') || 
                           link.href.includes('/diensten')
                );
                
                if (!bestaandeDienstenLink) {
                    // Maak nieuwe menu item
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = '/diensten.html';
                    a.textContent = 'Alle Diensten';
                    a.style.cssText = `
                        color: inherit;
                        text-decoration: none;
                        padding: inherit;
                        font-weight: inherit;
                    `;
                    
                    li.appendChild(a);
                    menu.appendChild(li);
                    menuGevonden = true;
                    
                    console.log('✅ "Alle Diensten" toegevoegd aan menu');
                } else {
                    // Update bestaande link
                    bestaandeDienstenLink.href = '/diensten.html';
                    if (!bestaandeDienstenLink.textContent.toLowerCase().includes('alle')) {
                        bestaandeDienstenLink.textContent = 'Alle Diensten';
                    }
                    menuGevonden = true;
                    
                    console.log('✅ Bestaande diensten link geüpdatet');
                }
            }
        });
        
        if (!menuGevonden) {
            console.log('⚠️ Geen menu gevonden om "Alle Diensten" toe te voegen');
        }
    }
    
    /**
     * Herleidt bestaande diensten links naar nieuwe pagina's
     */
    function herleidDienstenLinks() {
        const alleLinks = document.querySelectorAll('a');
        let aantalHerleid = 0;
        
        alleLinks.forEach(link => {
            const href = link.getAttribute('href') || '';
            const tekst = link.textContent.toLowerCase().trim();
            
            // Check op basis van href
            Object.keys(dienstenMapping).forEach(key => {
                if (href.includes(key) && !href.includes('/diensten/')) {
                    link.href = dienstenMapping[key];
                    aantalHerleid++;
                    console.log(`🔄 Link herleid: ${href} → ${dienstenMapping[key]}`);
                }
            });
            
            // Check op basis van tekst
            Object.keys(tekstMapping).forEach(zoekTekst => {
                if (tekst.includes(zoekTekst) && !href.includes('/diensten/')) {
                    link.href = tekstMapping[zoekTekst];
                    aantalHerleid++;
                    console.log(`🔄 Tekst link herleid: "${tekst}" → ${tekstMapping[zoekTekst]}`);
                }
            });
        });
        
        console.log(`✅ ${aantalHerleid} links herleid naar nieuwe diensten pagina's`);
    }
    
    /**
     * Voegt knoppen toe voor snelle toegang tot populaire diensten
     */
    function voegSnelleToegangToe() {
        // Zoek naar een geschikte plek voor snelle toegang knoppen
        const mogelijkePlekken = [
            '.hero-section',
            '.main-content',
            '.services-section',
            'main',
            '.content'
        ];
        
        let doelElement = null;
        mogelijkePlekken.forEach(selector => {
            if (!doelElement) {
                doelElement = document.querySelector(selector);
            }
        });
        
        if (doelElement) {
            const snelleToegangDiv = document.createElement('div');
            snelleToegangDiv.id = 'snelle-toegang-diensten';
            snelleToegangDiv.style.cssText = `
                background: #f8fafc;
                padding: 20px;
                margin: 20px 0;
                border-radius: 10px;
                text-align: center;
                border: 1px solid #e2e8f0;
            `;
            
            snelleToegangDiv.innerHTML = `
                <h3 style="color: #1e40af; margin-bottom: 15px; font-size: 1.2rem;">
                    🚀 Snelle Toegang tot Diensten
                </h3>
                <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
                    <a href="/diensten/sanibroyeur-verstopt/" style="background: #2563eb; color: white; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-size: 0.9rem;">Verstopt</a>
                    <a href="/diensten/sanibroyeur-lekt/" style="background: #2563eb; color: white; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-size: 0.9rem;">Lekt</a>
                    <a href="/diensten/sanibroyeur-reparatie/" style="background: #2563eb; color: white; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-size: 0.9rem;">Reparatie</a>
                    <a href="/diensten/sanibroyeur-spoeddienst/" style="background: #10b981; color: white; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-size: 0.9rem;">Spoeddienst</a>
                    <a href="/diensten.html" style="background: #f59e0b; color: white; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-size: 0.9rem;">Alle Diensten →</a>
                </div>
            `;
            
            // Voeg toe na het eerste element in de doelcontainer
            if (doelElement.firstElementChild) {
                doelElement.insertBefore(snelleToegangDiv, doelElement.firstElementChild.nextSibling);
            } else {
                doelElement.appendChild(snelleToegangDiv);
            }
            
            console.log('✅ Snelle toegang knoppen toegevoegd');
        }
    }
    
    /**
     * Voegt een floating "Alle Diensten" knop toe
     */
    function voegFloatingDienstenKnopToe() {
        const floatingButton = document.createElement('div');
        floatingButton.id = 'floating-diensten-knop';
        floatingButton.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 20px;
            z-index: 1000;
            background: #2563eb;
            color: white;
            padding: 12px 20px;
            border-radius: 25px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            cursor: pointer;
            font-weight: bold;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
        `;
        
        floatingButton.innerHTML = '📋 Alle Diensten';
        
        floatingButton.addEventListener('click', () => {
            window.location.href = '/diensten.html';
        });
        
        floatingButton.addEventListener('mouseenter', () => {
            floatingButton.style.transform = 'scale(1.05)';
            floatingButton.style.background = '#1d4ed8';
        });
        
        floatingButton.addEventListener('mouseleave', () => {
            floatingButton.style.transform = 'scale(1)';
            floatingButton.style.background = '#2563eb';
        });
        
        document.body.appendChild(floatingButton);
        console.log('✅ Floating diensten knop toegevoegd');
    }
    
    /**
     * Hoofdfunctie die alle integraties uitvoert
     */
    function initializeerDienstenIntegratie() {
        console.log('🚀 Sanibroyeur Diensten Integratie gestart...');
        
        // Wacht tot DOM volledig geladen is
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                setTimeout(() => {
                    voegDienstenToeAanMenu();
                    herleidDienstenLinks();
                    voegSnelleToegangToe();
                    voegFloatingDienstenKnopToe();
                    console.log('✅ Sanibroyeur Diensten Integratie voltooid!');
                }, 100);
            });
        } else {
            setTimeout(() => {
                voegDienstenToeAanMenu();
                herleidDienstenLinks();
                voegSnelleToegangToe();
                voegFloatingDienstenKnopToe();
                console.log('✅ Sanibroyeur Diensten Integratie voltooid!');
            }, 100);
        }
    }
    
    // Start de integratie
    initializeerDienstenIntegratie();
    
    // Maak functies beschikbaar voor handmatige uitvoering
    window.SanibroyeurDienstenIntegratie = {
        herleidLinks: herleidDienstenLinks,
        voegMenuToe: voegDienstenToeAanMenu,
        voegSnelleToegang: voegSnelleToegangToe,
        mapping: dienstenMapping
    };
    
})();

