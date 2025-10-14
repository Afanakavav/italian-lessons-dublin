# 🇮🇹 Ciao Dublin! - Italian Lessons Landing Page

Una pagina web interattiva e coinvolgente per promuovere le lezioni di italiano di Francesco a Dublino. La pagina è ottimizzata per essere aperta tramite QR code e offre un'esperienza mobile-first con molte funzionalità interattive.

## 🚀 Funzionalità Implementate

### ✨ Design e UX
- **Design responsive** ottimizzato per mobile e desktop
- **Colori italiani** (verde, bianco, rosso) con accenti dorati
- **Animazioni fluide** e transizioni eleganti
- **Font giocosi** (Poppins + Playfair Display)
- **Elementi fluttuanti** animati (caffè, libro, sorriso, vespa)

### 🎮 Elementi Interattivi
- **Quiz italiano** con domande a scelta multipla
- **Parola del giorno** che cambia ogni volta
- **Mini-gioco** "Indovina la parola italiana"
- **Countdown timer** per l'offerta speciale
- **Mappa interattiva** di Dublino

### 📅 Sistema di Prenotazione
- **Calendario con orari disponibili** predefiniti
- **Form per richieste di orari personalizzati**
- **Integrazione WhatsApp** per conferme immediate
- **Modal responsive** per la prenotazione

### 📱 Contatti e Comunicazione
- **Pulsanti WhatsApp** diretti
- **Link email** funzionanti
- **Mappa Google Maps** con marker personalizzato
- **Informazioni di contatto** sempre visibili

### 📊 Analytics e Tracking
- **Google Analytics** integrato
- **Event tracking** per conversioni
- **Monitoraggio interazioni** utente

## 🛠️ Setup e Configurazione

### 1. File Necessari
```
italian-lessons-dublin/
├── index.html          # Pagina principale
├── styles.css          # Stili CSS
├── script.js           # JavaScript interattivo
├── videos/             # Cartella per video
│   └── francesco-intro.mp4  # Video di presentazione (da aggiungere)
└── README.md           # Questo file
```

### 2. Configurazioni Richieste

#### Google Analytics
Sostituisci `GA_MEASUREMENT_ID` in `index.html` con il tuo ID di Google Analytics:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=TUO_GA_ID"></script>
```

#### Google Maps API
Sostituisci `YOUR_API_KEY` in `index.html` con la tua chiave API di Google Maps:
```html
<script src="https://maps.googleapis.com/maps/api/js?key=TUA_CHIAVE_API&callback=initMap" async defer></script>
```

#### Video di Presentazione
Aggiungi un video di 30-60 secondi in `videos/francesco-intro.mp4` dove ti presenti in italiano e inglese.

### 3. Personalizzazioni

#### Orari Disponibili
Modifica gli orari nel file `script.js` nella sezione booking modal:
```javascript
// Modifica questi orari secondo le tue disponibilità
<button class="time-slot" onclick="selectTimeSlot(this, 'Monday 10:00')">Mon 10:00</button>
```

#### Parole Italiane
Aggiungi o modifica le parole nel database `italianWords` in `script.js`:
```javascript
const italianWords = [
    { italian: "Ciao", english: "Hello/Goodbye", pronunciation: "/ˈtʃa.o/" },
    // Aggiungi altre parole...
];
```

#### Elementi del Gioco
Modifica gli elementi del mini-gioco in `gameItems` in `script.js`:
```javascript
const gameItems = [
    { icon: "fas fa-pizza-slice", word: "pizza", options: ["Pizza", "Pasta", "Gelato"], correct: 0 },
    // Aggiungi altri elementi...
];
```

## 🌐 Deploy e Hosting

### Opzioni di Hosting Gratuito
1. **Netlify** - Drag & drop della cartella
2. **Vercel** - Connessione GitHub
3. **GitHub Pages** - Hosting gratuito
4. **Firebase Hosting** - Google Cloud

### Per Netlify (Raccomandato)
1. Vai su [netlify.com](https://netlify.com)
2. Trascina la cartella del progetto
3. Ottieni l'URL pubblico
4. Genera il QR code con l'URL

## 📱 Generazione QR Code

### Strumenti Online
- [QR Code Generator](https://www.qr-code-generator.com/)
- [QR Code Monkey](https://www.qrcode-monkey.com/)
- [Google QR Code Generator](https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=URL_DELLA_TUA_PAGINA)

### Suggerimenti per il QR Code
- **Dimensioni**: Almeno 2x2 cm per la stampa
- **Contrasto**: Nero su sfondo bianco
- **Test**: Scansiona sempre prima di stampare
- **Backup**: Tieni sempre un URL di backup

## 🎨 Personalizzazioni Avanzate

### Colori
Modifica i colori principali in `styles.css`:
```css
:root {
    --italian-green: #009246;
    --italian-white: #ffffff;
    --italian-red: #ce2b37;
    --accent-gold: #ffd700;
}
```

### Animazioni
Aggiungi nuove animazioni in `styles.css`:
```css
@keyframes nomeAnimazione {
    0% { /* stato iniziale */ }
    100% { /* stato finale */ }
}
```

### Contenuti
- **Testimonial**: Aggiungi sezione testimonial
- **Prezzi**: Inserisci tariffe trasparenti
- **Certificazioni**: Mostra le tue qualifiche
- **Storie**: Racconta la tua esperienza italiana

## 📈 Ottimizzazioni SEO

### Meta Tags
```html
<meta name="description" content="Learn Italian in Dublin with Francesco, native Italian teacher. Fun, personalized lessons for all levels.">
<meta name="keywords" content="Italian lessons Dublin, learn Italian, Italian teacher, Francesco, Dublin Italian classes">
<meta property="og:title" content="🇮🇹 Ciao Dublin! - Learn Italian with Francesco">
<meta property="og:description" content="Learn Italian the fun way with a native Italian teacher in Dublin">
<meta property="og:image" content="URL_IMMAGINE_ANTEPRIMA">
```

### Performance
- **Lazy loading** per immagini
- **Minificazione** CSS/JS per produzione
- **Compressione** immagini
- **CDN** per font e librerie

## 🔧 Manutenzione

### Aggiornamenti Regolari
- **Parole del giorno**: Aggiungi nuove parole
- **Orari**: Aggiorna disponibilità
- **Contenuti**: Mantieni freschi i testi
- **Analytics**: Monitora le performance

### Backup
- **Backup regolare** del codice
- **Versioning** con Git
- **Test** su dispositivi diversi
- **Monitoraggio** uptime

## 📞 Supporto

Per domande o personalizzazioni:
- **Email**: francesco.perone00@gmail.com
- **WhatsApp**: +353 89 404 0077

---

**Buona fortuna con le tue lezioni di italiano a Dublino! 🇮🇹🍀**
