/* =========================================================================
   CONTENUTI — l'unico file che devi modificare per personalizzare l'app.
   Tutto il resto (css/js) puoi lasciarlo com'è.
   ========================================================================= */

const CONTENUTI = {

  /* --- Dati generali ---------------------------------------------------- */
  destinataria: "Sara",
  iniziale: "S",                      // lettera incisa nel sigillo di ceralacca
  occasione: "Buon compleanno",
  data: "20 agosto 2026",             // <-- metti la data giusta
  mittente: "Vincenzo",

  // Frase di apertura, stile "Lady Whistledown". Compare sul frontespizio.
  epigrafe: "Cara Sara, si dice che i doni più preziosi non si comprino: " +
            "si scrivano. Quel che segue è la cronaca fedele di una stagione " +
            "in cui la protagonista, indiscutibilmente, sei tu.",

  // Musica di sottofondo (facoltativa). Metti un tuo file in media/audio/
  // e scrivi qui il percorso, es: "media/audio/valzer.mp3".
  // Lascia null per nascondere il pulsante della musica.
  audio: "media/audio/245_nocturneop9no2-aa86d61b-ee90-4424-894d-adff33ce2a19.mp3",

  /* --- LE LETTERE ------------------------------------------------------- *
   * Ogni lettera arriva sigillata: Sara deve rompere il sigillo per aprirla.
   * `testo`: array di paragrafi. Il primo capoverso avrà il capolettera.
   * `poscritto`: facoltativo.
   * ---------------------------------------------------------------------- */
  lettere: [
    {
      titolo: "Il primo incontro",
      sopratitolo: "Lettera prima",
      luogo: "Pozzeul",
      data: "Credo 2016",
      apertura: "Mia carissima Sara,",
      testo: [
        "scrivo queste righe con la mano che trema appena, come si conviene a chi si accinge a raccontare qualcosa di importante. La prima volta che ci siamo conosciuti è stata una di quelle occasioni che non si dimenticano: ovvero un uscita random in piazzetta della pace quando ancora esisteva il gruppo no name no(chi sa che fine hanno fatto). Eppure, nonostante la casualità dell'incontro, ricordo distintamente il tuo sorriso e la tua risata contagiosa e le tue urla da ubriaca. Da quel momento, all'inizio però non mi piacevi, perchè ero/sono timido e non sapevo come comportarmi con te, ma poi ho iniziato a notare le tue qualità e a capire che eri una persona speciale.",
        "Da allora, ogni volta che ci siamo visti, ho avuto la fortuna di conoscerti meglio e di apprezzare la tua intelligenza, la tua gentilezza e il tuo senso dell'umorismo. Sei una persona che sa ascoltare, che sa dare consigli saggi e che sa far sentire gli altri a proprio agio. La tua presenza rende le giornate più luminose e le conversazioni più interessanti. Quindi sono molto felice di essermi sbagliato sul tuo conto.",
        "Da quando ci siamo conosciuti è stato bello vedere quante cose abbiamo in comune come game of thrones, i quattro bianchi(ok forse non più adesso però comunque), lady bug, Follettina creation, Renny, il condividere le passioni e i nostri sogni mentre eravamo sdraiati sugli scogli di Via Napoli, e anche le differenze che ci rendono unici. Abbiamo condiviso momenti di gioia, di risate, di avventure e anche i momenti di silenzio e di dolore, e sono grato per ogni singolo ricordo che abbiamo creato insieme.",
        "In conclusione, voglio dirti che sono grato per averti incontrata e per aver avuto l'opportunità di conoscerti meglio. Spero che la nostra amicizia continui a crescere e a rafforzarsi nel tempo anche se so che non ci vediamo praticamente mai non importa voglio che tu sappia che puoi sempre contare su di me come io conto su di te."
      ],
      chiusura: "Con devoto affetto,",
      firma: "Penny",
      poscritto: "P.S. — Di Renny non me ne ricordavo nemmeno io, è stato tipo un lampo di genio che mi è venuto in mente non so se tu te lo sei ricordata alla prima volta."
    },
    {
      titolo: "Delle tue qualità",
      sopratitolo: "Lettera seconda",
      luogo: "Il tuo animo",
      data: "da sempre",
      apertura: "Sara,",
      testo: [
        "esiste una categoria di persone che rende le stanze o gli scogli(forse dovrei smetterla di fare riferimenti agli scogli) più abitabili soltanto entrandoci. Tu appartieni a quella categoria, e questa lettera esiste per dirtelo per iscritto, così che tu non possa più smentirmi.",
        "Qui puoi raccontarle cosa ammiri di lei: lo studio, la testardaggine, il modo in cui tiene alle persone."
      ],
      chiusura: "Sempre tuo amico,",
      firma: "Penny"
    },
    {
      titolo: "Auguri, finalmente",
      sopratitolo: "Lettera terza",
      luogo: "Nereis",
      data: "Il giorno del tuo compleanno",
      apertura: "Alla festeggiata,",
      testo: [
        "e dunque siamo arrivati al punto. Che questo anno ti porti esami superati, mani ferme, pazienti fortunati ad averti e almeno un ballo di cui varrà la pena parlare.",
        "Buon compleanno."
      ],
      chiusura: "Con tutto il bene possibile,",
      firma: "Penny"
    }
  ],

  /* --- IL RITRATTO (foto) ----------------------------------------------- *
   * Metti le immagini in media/foto/ e richiamale qui.
   * `dedica` è il testo che compare quando si apre la foto a schermo intero.
   * ---------------------------------------------------------------------- */
  foto: [
    {
      src: "media/foto/Io-e-sara.jpeg",
      titolo: "Capitan Burger check",
      data: "25 Marzo 2023",
      dedica: "Qui eravamo a puzzeul se mi ricordo bene, forse ero ubriaco d'altronde in quel periodo lo ero sempre lol."
    },
    {
      src: "media/foto/Sara-comicon.jpeg",
      titolo: "Sara al Comicon",
      data: "29 Aprile 2023",
      dedica: "Questa foto me la sono ritrovata in galleria a caso, e mi ha fatto sorridere perchè un selfie che ti sei fatta con il mio telefono vecchio che ho visto dopo tanto tempo. Ero felice di vederti felice, e non fraintendere lo sono ancora oggi."
    },
    {
      src: "media/foto/comicum.jpeg",
      titolo: "Comi***",
      data: "29 Aprile 2023",
      dedica: "Ricordo di quando c'era ancora un gruppo quasi unito e le cose erano più semplici. Ah già era sempre il periodo dove ero spesso ubriaco ma non credo lo fossi quel giorno."
    },
    {
      src: "media/foto/Goku-napoletano.jpeg",
      titolo: "Goku napoletano",
      data: "29 Aprile 2023",
      dedica: "L'unico e inimitabile Goku napoletano."
    }
  ],

  /* --- IL TEATRO (video) ------------------------------------------------ *
   * Metti i video in media/video/ (consigliato .mp4, H.264).
   * `poster` è il fotogramma di copertina (facoltativo ma consigliato).
   * ---------------------------------------------------------------------- */
  video: [
    {
      src: "media/video/Sara-1.mp4",
      poster: "media/foto/Io-con-occhiali-di-sara.jpeg",
      titolo: "Qui non eravamo per nulla sobri",
      dedica: "Qui eri l'unica persona sobria probabilmente, deve essere stato un pò come stare al circo."
    }
  ],

  /* --- IL BLASONE ------------------------------------------------------- *
   * Lo stemma di "Casa Sara": araldica da Bridgerton, motto da Westeros.
   * Metti `mostra: false` se preferisci togliere del tutto la sezione.
   * ---------------------------------------------------------------------- */
  blasone: {
    mostra: true,
    casata: "Casa Sara",
    motto: "Fuoco e Sangue",
    lettura: [
      { simbolo: "Il caduceo", significato: "la medicina, e le notti passate sui libri." },
      { simbolo: "La viola",   significato: "il colore che rivendichi da sempre." },
      { simbolo: "Il compasso", significato: "la matematica, unica lingua che non mente." },
      { simbolo: "La penna",   significato: "l'arte, e le cose fatte a mano." }
    ],
    // Piccola curiosità matematica(Le proporzioni di questo stemma seguono la sezione aurea: φ = 1,6180339887…) mostrata in fondo allo stemma.
    curiosita: "Questo regalo l'ho fatto per il tuo compleanno in particolare, ma avrei intenzione di usarlo come base per tutti i nostri ricordi e lettere future se ti piace l'idea."
  },

  /* --- CONGEDO ---------------------------------------------------------- */
  congedo: {
    titolo: "Fine della stagione",
    testo: [
      "Qui finisce la cronaca, ma non il resto.",
      "Se sei arrivata fin qui, hai letto tutto o hai saltato tutto fino a questo punto: in ogni caso, spero di averti fatto sorridere."
    ],
    firma: "Penny"
  }
};
