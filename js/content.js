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
  audio: null,

  /* --- LE LETTERE ------------------------------------------------------- *
   * Ogni lettera arriva sigillata: Sara deve rompere il sigillo per aprirla.
   * `testo`: array di paragrafi. Il primo capoverso avrà il capolettera.
   * `poscritto`: facoltativo.
   * ---------------------------------------------------------------------- */
  lettere: [
    {
      titolo: "Il primo incontro",
      sopratitolo: "Lettera prima",
      luogo: "Napoli",
      data: "Anno domini 2026",
      apertura: "Mia carissima Sara,",
      testo: [
        "scrivo queste righe con la mano che trema appena, come si conviene a chi si accinge a raccontare qualcosa di importante. Qui va il tuo ricordo: il giorno in cui vi siete conosciuti, la prima cosa che hai pensato di lei, la scena che ti è rimasta addosso.",
        "Sostituisci pure tutto questo testo con le tue parole. Puoi mettere quanti paragrafi vuoi: basta aggiungere una riga tra virgolette qui dentro, separata da una virgola."
      ],
      chiusura: "Con devoto affetto,",
      firma: "Vincenzo",
      poscritto: "P.S. — I poscritti sono la parte migliore di ogni lettera."
    },
    {
      titolo: "Delle tue qualità",
      sopratitolo: "Lettera seconda",
      luogo: "Napoli",
      data: "Anno domini 2026",
      apertura: "Sara,",
      testo: [
        "esiste una categoria di persone che rende le stanze più abitabili soltanto entrandoci. Tu appartieni a quella categoria, e questa lettera esiste per dirtelo per iscritto, così che tu non possa più smentirmi.",
        "Qui puoi raccontarle cosa ammiri di lei: lo studio, la testardaggine, il modo in cui tiene alle persone."
      ],
      chiusura: "Sempre tuo amico,",
      firma: "Vincenzo"
    },
    {
      titolo: "Auguri, finalmente",
      sopratitolo: "Lettera terza",
      luogo: "Napoli",
      data: "Il giorno del tuo compleanno",
      apertura: "Alla festeggiata,",
      testo: [
        "e dunque siamo arrivati al punto. Che questo anno ti porti esami superati, mani ferme, pazienti fortunati ad averti e almeno un ballo di cui varrà la pena parlare.",
        "Buon compleanno."
      ],
      chiusura: "Con tutto il bene possibile,",
      firma: "Vincenzo"
    }
  ],

  /* --- IL RITRATTO (foto) ----------------------------------------------- *
   * Metti le immagini in media/foto/ e richiamale qui.
   * `dedica` è il testo che compare quando si apre la foto a schermo intero.
   * ---------------------------------------------------------------------- */
  foto: [
    {
      src: "media/foto/esempio-1.jpg",
      titolo: "La sera in cui ridevamo troppo",
      data: "Estate 2024",
      dedica: "Due righe su cosa stava succedendo in questa foto. Le dediche brevi funzionano meglio delle lunghe."
    },
    {
      src: "media/foto/esempio-2.jpg",
      titolo: "Un pomeriggio qualunque",
      data: "Inverno 2025",
      dedica: "Un altro ricordo, un'altra dedica."
    },
    {
      src: "media/foto/esempio-3.jpg",
      titolo: "Il viaggio",
      data: "Primavera 2025",
      dedica: "Aggiungi tutte le foto che vuoi: la galleria si adatta da sola."
    }
  ],

  /* --- IL TEATRO (video) ------------------------------------------------ *
   * Metti i video in media/video/ (consigliato .mp4, H.264).
   * `poster` è il fotogramma di copertina (facoltativo ma consigliato).
   * ---------------------------------------------------------------------- */
  video: [
    {
      src: "media/video/esempio-1.mp4",
      poster: "media/foto/esempio-1.jpg",
      titolo: "Il video che non doveva esistere",
      dedica: "Una riga di commento sotto al video."
    }
  ],

  /* --- IL BLASONE ------------------------------------------------------- *
   * Lo stemma di "Casa Sara": araldica da Bridgerton, motto da Westeros.
   * Metti `mostra: false` se preferisci togliere del tutto la sezione.
   * ---------------------------------------------------------------------- */
  blasone: {
    mostra: true,
    casata: "Casa Sara",
    motto: "Con mano ferma e cuore chiaro",
    lettura: [
      { simbolo: "Il caduceo", significato: "la medicina, e le notti passate sui libri." },
      { simbolo: "La viola",   significato: "il colore che rivendichi da sempre." },
      { simbolo: "Il compasso", significato: "la matematica, unica lingua che non mente." },
      { simbolo: "La penna",   significato: "l'arte, e le cose fatte a mano." }
    ],
    // Piccola curiosità matematica mostrata in fondo allo stemma.
    curiosita: "Le proporzioni di questo stemma seguono la sezione aurea: φ = 1,6180339887…"
  },

  /* --- CONGEDO ---------------------------------------------------------- */
  congedo: {
    titolo: "Fine della stagione",
    testo: [
      "Qui finisce la cronaca, ma non il resto.",
      "Se sei arrivata fin qui, hai letto tutto: era esattamente quello che speravo."
    ],
    firma: "Vincenzo"
  }
};
