/* =========================================================================
   CONTENUTI — l'unico file che devi modificare per personalizzare l'app.
   Tutto il resto (css/js) puoi lasciarlo com'è.
   ========================================================================= */

const CONTENUTI = {

  /* --- Dati generali ---------------------------------------------------- */
  destinataria: "Sara",
  iniziale: "S",
  occasione: "Buon compleanno",
  data: "20 agosto 2026",
  mittente: "Penny",

  epigrafe: "Cara lettrice, si dice che i doni più preziosi non si comprino: " +
            "si scrivano. Quel che segue è la cronaca fedele di una stagione " +
            "in cui la protagonista, indiscutibilmente, sei tu.",

  audio: "media/audio/245_nocturneop9no2-aa86d61b-ee90-4424-894d-adff33ce2a19.mp3",

  /* --- LE LETTERE ------------------------------------------------------- */
  lettere: [
    {
      titolo: "Il primo incontro",
      sopratitolo: "Lettera prima",
      luogo: "Pozzuoli",
      data: "Credo 2016",
      apertura: "Mia carissima Sara,",
      testo: [
        "scrivo queste righe con la mano che trema appena, come si conviene a chi si accinge a raccontare qualcosa di importante. Mi sono alzato dalla sedia più di trecento volte cercando le parole giuste e provando a rimettere in ordine i ricordi. La prima volta che ci siamo conosciuti è stata una di quelle occasioni che non si dimenticano: un'uscita a caso in Piazzetta della Pace, quando ancora esisteva il gruppo No Name (chissà che fine hanno fatto tutti quanti). Eppure, nonostante la casualità dell'incontro, ricordo distintamente il tuo sorriso, la tua risata contagiosa e le tue urla da ubriaca. All'inizio, a dire il vero, non mi eri simpatica: ero, e sono, timido, e non sapevo come comportarmi con te. Poi ho iniziato a notare le tue qualità e a capire che eri una persona speciale.",
        "Da allora, ogni volta che ci siamo visti, ho avuto la fortuna di conoscerti meglio e di apprezzare la tua intelligenza, la tua gentilezza e il tuo senso dell'umorismo. Sei una persona che sa ascoltare, che sa dare consigli saggi e che sa mettere gli altri a proprio agio. La tua presenza rende le giornate più luminose e le conversazioni più interessanti. Quindi sono felicissimo di essermi sbagliato sul tuo conto.",
        "È stato bello scoprire quante cose avevamo in comune: Game of Thrones, i Quattro Bianchi (ok, forse non più adesso, però comunque), Ladybug, Follettina Creation, Renny, Death Note, Lupus in Fabula. Le passioni e i sogni che ci raccontavamo sdraiati sugli scogli di Via Napoli, e anche le differenze che ci rendono unici. Abbiamo condiviso momenti di gioia, di risate, di avventure, e anche i silenzi e i momenti di dolore.",
        "In conclusione, voglio dirti che sono contento di averti incontrata e di aver avuto l'occasione di conoscerti davvero. Spero che la nostra amicizia continui a crescere e a rafforzarsi nel tempo: anche se non ci vediamo praticamente mai, voglio che tu sappia che puoi sempre contare su di me, come io conto su di te."
      ],
      chiusura: "Con devoto affetto,",
      firma: "Penny",
      poscritto: "P.S. — Di Renny non me ne ricordavo nemmeno io, è stato un lampo di genio improvviso. Chissà se te lo sei ricordata al primo colpo."
    },
    {
      titolo: "Delle tue qualità",
      sopratitolo: "Lettera seconda",
      luogo: "Il tuo animo",
      data: "Da sempre",
      apertura: "Sara,",
      testo: [
        "esiste una categoria di persone che rende le stanze (o gli scogli: forse dovrei smetterla con i riferimenti agli scogli) più abitabili soltanto entrandoci. Tu appartieni a quella categoria, e questa lettera esiste per dirtelo per iscritto, così che tu non possa più smentirmi.",
        "La tua gentilezza è un faro per chi ti sta intorno, la tua curiosità è contagiosa e la tua intelligenza mette voglia di tenere il passo. Sai ascoltare davvero, che è un dono molto più raro di quanto si creda. E poi mandi avanti studio e lavoro insieme, senza sosta, e non ho ancora capito come tu ci riesca.",
        "So che non deve essere facile tenere standard così alti senza perdere per strada l'umanità e l'empatia, eppure tu ci riesci con grazia e testardaggine. La tua forza interiore è ammirevole, e il modo in cui affronti le difficoltà della vita con coraggio è un esempio da seguire.",
        "In sintesi, Sara: sei una persona straordinaria e sono fortunato ad averti nella mia vita. Spero che tu possa continuare a coltivare le tue qualità e a condividere la tua luce con il mondo."
      ],
      chiusura: "Sempre tuo amico,",
      firma: "Penny",
      poscritto: "P.S. — Non so se ti ricordi, ma una volta mi hai detto che ti piacevano i regali fatti a mano. Spero che queste lettere ti abbiano fatto sorridere almeno un po': era il mio intento principale nello scriverle."
    },
    {
      titolo: "Auguri, finalmente",
      sopratitolo: "Lettera terza",
      luogo: "Nereis",
      data: "Il giorno del tuo compleanno",
      apertura: "Alla festeggiata,",
      testo: [
        "e dunque siamo arrivati al punto. Che questo anno ti porti esami superati, mani ferme e pazienti fortunati ad averti. Oppure studenti fortunati, se un giorno deciderai di prendere la strada dell'insegnamento.",
        "Buon compleanno."
      ],
      chiusura: "Con tutto il bene possibile,",
      firma: "Penny",
      poscritto: "P.S. — Spero che il regalo ti piaccia: l'ho fatto con affetto e con parecchia dedizione. Spero si veda."
    }
  ],

  /* --- IL RITRATTO (foto) ----------------------------------------------- */
  foto: [
    {
      src: "media/foto/Io-e-sara.jpeg",
      titolo: "Capitan Burger check",
      data: "25 marzo 2023",
      dedica: "Qui eravamo a Pozzuoli, se ricordo bene. Forse ero ubriaco: d'altronde in quel periodo lo ero sempre, lol."
    },
    {
      src: "media/foto/Sara-sfocata.jpeg",
      titolo: "Sara sfocata",
      data: "25 marzo 2023",
      dedica: "Sara sfocata. Non c'è altro da aggiungere, perché se dici Sara hai già detto tutto."
    },
    {
      src: "media/foto/Sara-sfocata-2.jpeg",
      titolo: "Sara sfocata, atto secondo",
      data: "25 marzo 2023",
      dedica: "Stessa identica cosa, però è un'altra foto."
    },
    {
      src: "media/foto/Sara-comicon.jpeg",
      titolo: "Sara al Comicon",
      data: "29 aprile 2023",
      dedica: "Questa me la sono ritrovata in galleria per caso e mi ha fatto sorridere: è un selfie che ti eri fatta con il mio vecchio telefono e che ho rivisto dopo tanto tempo. Ero felice di vederti felice. E, non fraintendere, lo sono ancora oggi."
    },
    {
      src: "media/foto/comicum.jpeg",
      titolo: "Comi***",
      data: "29 aprile 2023",
      dedica: "Ricordo di quando c'era ancora un gruppo quasi unito e le cose erano più semplici. Ah già, era sempre il periodo in cui ero spesso ubriaco. Ma quel giorno non credo."
    },
    {
      src: "media/foto/Io-e-sara-frocida.jpeg",
      titolo: "Frocida",
      data: "18 agosto 2022",
      dedica: "Qui, come puoi ben vedere, faceva caldo, sudavo, il sudore andava negli occhi e come puoi immaginare non vedevo un cazzo."
    },
    {
      src: "media/foto/Io-ubriaco-e-sara.jpeg",
      titolo: "Piazzetta della Pace gang",
      data: "23 aprile 2023",
      dedica: "I bei tempi in cui eravamo tutti altamente sobri e felici."
    },
    {
      src: "media/foto/Sara-e-io-ubriaco-puddys.jpeg",
      titolo: "Pub irlandese Puddys",
      data: "26 febbraio 2023",
      dedica: "Adoravo andare in quel pub, mi hanno pure regalato un cappello e un bicchiere di vetro. Però era bello soprattutto perché c'eri tu."
    },
    {
      src: "media/foto/Goku-napoletano.jpeg",
      titolo: "Goku napoletano",
      data: "29 aprile 2023",
      dedica: "L'unico e inimitabile Goku napoletano."
    }
  ],

  /* --- IL TEATRO (video) ------------------------------------------------ */
  video: [
    {
      src: "media/video/Sara-1.mp4",
      poster: "media/foto/Io-con-occhiali-di-sara.jpeg",
      titolo: "Qui non eravamo per nulla sobri",
      dedica: "Qui eri probabilmente l'unica persona sobria. Dev'essere stato un po' come stare al circo."
    }
  ],

  /* --- IL BLASONE ------------------------------------------------------- */
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
    // Riga breve sotto lo stemma: è scritta in caratteri piccoli e spaziati,
    // quindi funziona bene solo con frasi corte.
    curiosita: "Motto preso in prestito da una certa casata di draghi."
  },

  /* --- CONGEDO ---------------------------------------------------------- */
  congedo: {
    titolo: "Fine della stagione",
    testo: [
      "Qui finisce la cronaca, ma non il resto.",
      "Questo regalo nasce per il tuo compleanno, ma vorrei usarlo come base per tutti i ricordi e le lettere che verranno. Se l'idea ti piace, ovviamente.",
      "Se sei arrivata fin qui hai letto tutto, oppure hai saltato tutto fino a questo punto: in ogni caso, spero di averti fatto sorridere."
    ],
    firma: "Penny",
    poscritto: "P.S. — Auguriiii."
  }
};
