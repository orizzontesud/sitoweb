/* DATABASE ORIZZONTE SUD - V 5.1.0 (FINAL COMPLETE) */

const aziendaInfo = {
    nome: "ORIZZONTE SUD SAS",
    descrizione: "Distributore Esclusivo Lux.<br>Dal 1983 al tuo fianco per un ambiente sano e sicuro.",
    piva: "IT04276540632",
    emailForm: "form.orizzonte@gmail.com", 
    whatsappLink: "https://wa.me/39081640438", 
    // ID Analytics (Sostituisci con il tuo G-XXXX reale se diverso)
    // googleAnalyticsId: "G-376319778",
    images: {
        home: "assets/img/hero-home.jpg",
        noleggio: "assets/img/hero-noleggio.jpg",
        lavora: "assets/img/hero-lavora.jpg",
        contatti: "assets/img/hero-contatti.jpg"
    },
    sedi: [
        { citta: "Napoli", indirizzo: "Via Alessandro Manzoni, 115" },
        { citta: "Napoli", indirizzo: "Calata Trinità Maggiore, 53" },
        { citta: "S. Maria C.V.", indirizzo: "Via Pietro Morelli, 2" }
    ],
    contatti: [
        { tipo: "tel", valore: "081 640438", icona: "fa-phone-alt" },
        { tipo: "tel", valore: "081 646486", icona: "fa-phone-alt" },
        { tipo: "mail", valore: "info@orizzontesud.it", icona: "fa-envelope" }
    ]
};

const siteMenu = [
    { label: "Home", link: "index.html" },
    { label: "Aria", link: "prodotto.html?id=aeroguard-aria" },
    { label: "Acqua", link: "prodotto.html?id=waterlogic-acqua" },
    { label: "Pulizia", link: "prodotto.html?id=uniprof-pulizia" },
    { label: "Noleggio", link: "noleggio.html" }, 
    { label: "Lavora con noi", link: "lavora.html" },
    { label: "Contatti", link: "contatti.html" }
];

/* --- CONFIGURAZIONI PAGINE --- */

const homePageConfig = {
    heroTitle: "Orizzonte Sud, partner per una vita sana. Dal 1983.",
    heroSub: "Soluzioni per la tua famiglia e la tua azienda.",
    heroBtn1: "Le Nostre Soluzioni",
    heroBtn2: "Chi siamo",
    sections: {
        aria: { title: "Aria Pura Certificata", desc: "Soluzioni per <strong>Casa e Ufficio</strong>. Trascorriamo il 90% del tempo al chiuso. I nostri purificatori Aeroguard eliminano virus, allergeni e polveri sottili.", linkText: "SCOPRI GAMMA ARIA", img: "assets/img/cat-aria.jpg" },
        acqua: { title: "L'Acqua come deve essere", desc: "Acqua pura per <strong>Famiglie e Aziende</strong>. Dimentica le bottiglie di plastica. Sistemi sottolavello e colonnine refrigeranti a km zero.", linkText: "SCOPRI GAMMA ACQUA", img: "assets/img/cat-acqua.jpg" },
        pulizia: { title: "Igiene Profonda", desc: "<strong>Domestica e Professionale</strong>. La potenza del vapore, l'aspirazione certificata, tutto al servizio dei tuoi spazi.", linkText: "SCOPRI GAMMA PULIZIA", img: "assets/img/cat-pulizia.jpg" }
    },
    storia: { title: "40 Anni di Storia.", textBold: "Dal 1983, Orizzonte Sud è sinonimo di protezione e benessere.", text: "Una realtà solida, costruita sulla fiducia che generazioni di famiglie e aziende ci rinnovano ogni giorno." }
};

const noleggioPageConfig = {
    heroTitle: "Noleggio Operativo",
    heroSub: "La soluzione flessibile per Aziende e Partite IVA.",
    introTitle: "Perché acquistare se puoi noleggiare?",
    introText: "Il Noleggio Operativo è una formula alternativa all’acquisto che ti permette di disporre dei beni strumentali necessari alla tua attività pagando un canone periodico.",
    benefits: [
        { title: "Vantaggi Fiscali", icon: "fa-file-invoice-dollar", items: [ { strong: "Deducibilità 100%", text: "Canoni interamente deducibili." }, { strong: "Nessun Ammortamento", text: "Contabilità semplificata." } ] },
        { title: "Vantaggi Finanziari", icon: "fa-chart-line", items: [ { strong: "Liquidità Intatta", text: "Nessun esborso immediato." }, { strong: "Costi Certi", text: "Canone fisso programmabile." } ] },
        { title: "Vantaggi Operativi", icon: "fa-tools", items: [ { strong: "All Risk Inclusa", text: "Assicurazione completa." }, { strong: "Manutenzione Inclusa", text: "Assistenza garantita." } ] }
    ],
    ctaTitle: "Parliamone di persona.",
    ctaSub: "Analizziamo insieme i vantaggi fiscali per la tua attività.",
    ctaBtn: "Richiedi Consulenza Noleggio"
};

const contactPageConfig = {
    heroTitle: "PARLIAMO?",
    heroSub: "Scegli il modo più comodo per metterti in contatto con noi.",
    formTitle: "Mandaci un messaggio",
    formBtn: "INVIA MESSAGGIO",
    cards: [
        { type: "phone", title: "Chiamaci", text: "Parla direttamente con la nostra sede.<br>Lun-Ven 9:00 - 18:00", action: "081 640438", link: "tel:+39081640438", icon: "fa-phone-alt" },
        { type: "whatsapp", title: "WhatsApp", text: "Chatta con il servizio clienti per info veloci e assistenza.", action: "Avvia Chat", link: "https://wa.me/39081640438", icon: "fab fa-whatsapp" },
        { type: "mail", title: "Scrivici", text: "Preferisci una mail? Compila il modulo qui sotto.", action: "Compila Form", link: "#scrivici", icon: "fa-envelope-open-text" }
    ]
};

const lavoraPageConfig = {
    heroTitle: "LAVORA CON NOI",
    heroSub: "Entra a far parte della famiglia Orizzonte Sud",
    titolo: "Costruiamo insieme il futuro del benessere.",
    descrizione: "<p>In Orizzonte Sud crediamo che le persone facciano la differenza. Da oltre 40 anni investiamo nella crescita professionale dei nostri collaboratori.</p>",
    formTitle: "Inviaci la tua candidatura",
    formBtn: "INVIA CANDIDATURA",
    posizioniAperte: [ "Candidatura Spontanea", "Consulente Commerciale", "Tecnico Installatore", "Amministrazione / Back Office" ],
    benefits: [ "Formazione tecnica e commerciale continua", "Affiancamento sul campo con esperti", "Reali opportunità di carriera", "Ambiente di lavoro dinamico e positivo" ]
};

const garanziaConfig = {
    titolo: "Orizzonte Sud : il partner affidabile.",
    sottotitolo: "La differenza tra comprare un prodotto e scegliere una soluzione.",
    card: [
        { titolo: "Consulenza Reale", icon: "fa-user-friends", testo: "Non vendiamo 'scatole'. Analizziamo le tue reali necessità per darti solo ciò che ti serve davvero." },
        { titolo: "Formazione", icon: "fa-hands-helping", testo: "La tecnologia serve solo se la sai usare. Ti consegniamo il prodotto e ti insegniamo a sfruttarlo al 100%." },
        { titolo: "Assistenza sempre disponibile", icon: "fa-wrench", testo: "Il nostro lavoro inizia dopo la vendita. Manutenzione, ricambi e tecnici pronti. Non sarai mai solo." }
    ]
};

const formLabels = {
    nome: "Nome e Cognome *",
    azienda: "Nome Azienda (Opzionale)",
    telefono: "Telefono *",
    citta: "Città",
    messaggio: "Come possiamo aiutarti?",
    btnInvia: "INVIA RICHIESTA",
    privacy: "Cliccando invia accetti la Privacy Policy."
};

const privacyConfig = {
    testo: "Utilizziamo i cookie e tecnologie simili per analizzare il traffico e migliorare la tua esperienza. Cliccando su 'Accetta', acconsenti al nostro utilizzo dei cookie.",
    btnAccetta: "ACCETTA TUTTO",
    linkPolicy: "privacy.html"
};

const productsDB = [
    {
        id: "aeroguard-aria",
        categoria: "Aria",
        nome: "Gamma Aeroguard",
        sottotitolo: "Purificazione intelligente per ogni ambiente",
        heroImage: "assets/img/hero-aria.jpg",
        descrizione: "Abbiamo progettato una linea completa per ogni esigenza volumetrica. Dalla compattezza del <strong>Mini</strong> per la camera da letto, alla potenza del <strong>Premium S</strong> per il living, fino alle prestazioni industriali del <strong>Premium L</strong> per grandi uffici.<br><br>Non importa la dimensione: la tecnologia di filtrazione rimane l'eccellenza certificata.",
        features: ["Filtrazione Virus e Batteri al 99.97%", "Sistema NANOPURE", "Certificazione TÜV Nord", "Silenziosità assoluta"],
        immagini: ["assets/img/aeroguard-mini.png", "assets/img/aeroguard-4s.png", "assets/img/aeroguard-pro.png"]
    },
    {
        id: "waterlogic-acqua",
        categoria: "Acqua",
        nome: "Trattamento Acqua",
        sottotitolo: "Acqua pura, fredda e frizzante a Km 0",
        heroImage: "assets/img/hero-acqua.jpg",
        descrizione: "L'acqua è l'elemento essenziale per la vita e la produttività. Le nostre soluzioni <strong>per la tua Casa e per la tua Azienda</strong> eliminano la gestione delle bottiglie di plastica, offrendo un'alternativa ecologica, economica e soprattutto sicura. Grazie alla vasta gamma disponibile, è possibile soddisfare qualunque tipo di esigenza.",
        features: ["Microfiltrazione/ultrafiltrazione/osmosi inversa", "Tecnologia all'avanguardia", "Risparmio economico", "Acqua Fredda, Ambiente e Frizzante"],
        immagini: ["assets/img/acqua1.jpg", "assets/img/acqua2.jpg", "assets/img/acqua3.jpg"]
    },
    {
        id: "uniprof-pulizia",
        categoria: "Pulizia",
        nome: "Pulizia",
        sottotitolo: "Perfezione in ogni Ambiente",
        heroImage: "assets/img/hero-pulizia.jpg",
        descrizione: "L'igiene e la pulizia non sono mai stati così semplici. <strong>Nella tua Casa come nella tua Azienda</strong> abbiamo la soluzione giusta per qualunque esigenza, dal piccolo ambiente al capannone industriale",
        features: ["Pulizia senza filo", "Aspirazione al Top", "Spazzatrici", "Vapore secco con solo acqua di rubinetto"],
        immagini: ["assets/img/pulizia1.jpg", "assets/img/pulizia2.jpg", "assets/img/pulizia3.jpg"]
    }
];