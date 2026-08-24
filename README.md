# HB-App-Sarax

Un regalo di compleanno in forma di web app mobile-first: lettere in stile Regency
(Bridgerton), galleria di fotografie con dediche, video e stemma di casata.

Sito statico puro: **nessun build step, nessuna dipendenza**. Si pubblica la cartella
così com'è.

---

## Struttura

```
index.html              impianto delle sezioni
css/style.css           tema (viola prugna, oro, pergamena)
js/content.js           ← L'UNICO FILE CHE DEVI MODIFICARE
js/app.js               logica: sigilli, navigazione, visore
media/foto/             le tue immagini
media/video/            i tuoi video
media/audio/            musica di sottofondo (facoltativa)
manifest.webmanifest    installabile dalla home del telefono
netlify.toml            configurazione di pubblicazione
```

## Come si personalizza

Tutto sta in `js/content.js`.

**Aggiungere una lettera** — copia un blocco dentro `lettere: [ ... ]`:

```js
{
  titolo: "Titolo della lettera",
  sopratitolo: "Lettera quarta",
  luogo: "Napoli",
  data: "Anno domini 2026",
  apertura: "Mia cara Sara,",
  testo: [
    "Primo paragrafo — riceve il capolettera decorato.",
    "Secondo paragrafo."
  ],
  chiusura: "Con affetto,",
  firma: "Vincenzo",
  poscritto: "P.S. — facoltativo."
}
```

**Aggiungere una foto** — metti il file in `media/foto/` e aggiungi a `foto: [ ... ]`:

```js
{ src: "media/foto/mare.jpg", titolo: "Al mare", data: "Agosto 2025",
  dedica: "La dedica che compare aprendo la foto." }
```

**Aggiungere un video** — file in `media/video/`, poi in `video: [ ... ]`:

```js
{ src: "media/video/torta.mp4", poster: "media/foto/torta.jpg",
  titolo: "La torta", dedica: "Commento sotto al video." }
```

**Musica** — metti un mp3 in `media/audio/` e imposta
`audio: "media/audio/nomefile.mp3"`. Se resta `null`, il pulsante non compare.
Usa musica di cui hai i diritti o brani di pubblico dominio (le esecuzioni
di classica sono comunque protette dal diritto sulla registrazione).

**Stemma** — modifica `blasone`, oppure metti `mostra: false` per togliere la sezione.

## Media: accorgimenti pratici

- Ridimensiona le foto a **max 1600px** sul lato lungo prima di caricarle: Netlify
  ha un limite complessivo e un telefono in 4G ringrazia.
- Video: `.mp4` H.264 + AAC, sotto i ~20 MB l'uno. Per comprimere:
  `ffmpeg -i in.mov -vcodec libx264 -crf 26 -vf scale=-2:720 -acodec aac out.mp4`
- Metti sempre un `poster`: il video non carica il primo fotogramma da solo su iOS.

## Pubblicazione su Netlify

1. Commit e push su `HB-App-Sarax`.
2. Netlify → *Add new site* → *Import from GitHub* → scegli la repo.
3. Build command: **vuoto**. Publish directory: **`.`** (già scritto in `netlify.toml`).
4. Deploy. Poi *Domain settings* per un indirizzo tipo `per-sara.netlify.app`.

Se la repo resta pubblica, ricordati che foto e lettere saranno pubbliche anche loro:
per un regalo personale valuta di renderla **privata** (Netlify si collega lo stesso)
oppure di proteggere il sito con password (piano a pagamento).

## Da telefono

Aprendo il link, Safari/Chrome propongono "Aggiungi alla schermata Home": l'app si
installa con l'icona a sigillo e parte a schermo intero, senza barra del browser.

## Prova in locale

```bash
python3 -m http.server 8000
# poi apri http://localhost:8000
```
