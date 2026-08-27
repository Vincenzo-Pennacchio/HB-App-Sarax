/* =========================================================================
   Per Sara — logica dell'applicazione.
   Non serve modificare questo file: i contenuti stanno in js/content.js
   ========================================================================= */
(function () {
  "use strict";

  const C = window.CONTENUTI || CONTENUTI;
  const $ = (sel) => document.querySelector(sel);
  const el = (tag, cls, testo) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (testo !== undefined) n.textContent = testo;
    return n;
  };

  /* ---------------------------------------------------------------- Sigillo */
  function preparaIngresso() {
    $("#ingressoNome").textContent = C.destinataria;
    $("#ingressoData").textContent = C.data || "";
    $("#sigilloIniziale").textContent = C.iniziale || C.destinataria.charAt(0);

    $("#sigilloApri").addEventListener("click", function apri() {
      this.classList.add("sigillo--rotto");
      setTimeout(() => {
        $("#ingresso").classList.add("ingresso--aperto");
        $("#app").hidden = false;
        setTimeout(() => { $("#ingresso").remove(); }, 900);
      }, 520);
    }, { once: true });
  }

  /* ----------------------------------------------------------- Frontespizio */
  function costruisciFrontespizio() {
    $("#occhiello").textContent = C.occasione;
    $("#frontNome").textContent = C.destinataria;
    $("#epigrafe").textContent = C.epigrafe;
    $("#frontData").textContent = C.data;
  }

  /* ---------------------------------------------------------------- Lettere */
  function costruisciLettere() {
    const pila = $("#pilaLettere");
    C.lettere.forEach((lettera, i) => {
      const b = el("button", "lettera-chiusa");
      b.type = "button";

      const sigillo = el("span", "lettera-chiusa__sigillo", C.iniziale || "S");
      sigillo.setAttribute("aria-hidden", "true");

      b.append(
        sigillo,
        el("span", "lettera-chiusa__soprattitolo", lettera.sopratitolo || "Lettera"),
        el("span", "lettera-chiusa__titolo", lettera.titolo),
        el("span", "lettera-chiusa__azione", "Rompi il sigillo")
      );

      b.addEventListener("click", () => {
        b.classList.add("lettera-chiusa--letta");
        b.querySelector(".lettera-chiusa__azione").textContent = "Già letta — rileggi";
        apriVisore(disegnaLettera(lettera));
      });

      pila.appendChild(b);
      void i;
    });
  }

  function disegnaLettera(lettera) {
    const foglio = el("article", "pergamena");

    const testa = el("header", "pergamena__intestazione");
    testa.append(el("span", null, lettera.luogo || ""), el("span", null, lettera.data || ""));
    foglio.appendChild(testa);

    foglio.appendChild(el("h3", "pergamena__titolo", lettera.titolo));
    if (lettera.apertura) foglio.appendChild(el("p", "pergamena__apertura", lettera.apertura));

    lettera.testo.forEach((par, i) => {
      foglio.appendChild(
        el("p", "pergamena__testo" + (i === 0 ? " pergamena__testo--primo" : ""), par)
      );
    });

    if (lettera.chiusura) foglio.appendChild(el("p", "pergamena__chiusura", lettera.chiusura));
    if (lettera.firma) foglio.appendChild(el("p", "pergamena__firma", lettera.firma));
    if (lettera.poscritto) foglio.appendChild(el("p", "pergamena__poscritto", lettera.poscritto));

    return foglio;
  }

  /* --------------------------------------------------------------- Galleria */
  function costruisciGalleria() {
    const g = $("#galleria");
    C.foto.forEach((foto) => {
      const b = el("button", "telaio");
      b.type = "button";

      const img = new Image();
      img.src = foto.src;
      img.alt = foto.titolo || "Fotografia";
      img.loading = "lazy";
      img.decoding = "async";
      img.addEventListener("error", () => {
        img.remove();
        b.appendChild(el("span", "telaio__mancante", "Foto non ancora caricata — " + foto.src));
      });
      b.appendChild(img);

      const did = el("span", "telaio__didascalia");
      did.append(
        el("span", "telaio__titolo", foto.titolo || ""),
        el("span", "telaio__data", foto.data || "")
      );
      b.appendChild(did);

      b.addEventListener("click", () => apriVisore(disegnaFoto(foto)));
      g.appendChild(b);
    });
    osservaTelai();
  }

  function disegnaFoto(foto) {
    const wrap = document.createDocumentFragment();
    const fig = el("figure", "visore__figura");
    const img = new Image();
    img.src = foto.src;
    img.alt = foto.titolo || "Fotografia";
    fig.appendChild(img);
    wrap.appendChild(fig);

    wrap.appendChild(el("h3", "visore__titolo", foto.titolo || ""));
    if (foto.data) wrap.appendChild(el("p", "visore__data", foto.data));
    if (foto.dedica) wrap.appendChild(el("p", "visore__dedica", foto.dedica));
    return wrap;
  }

  function osservaTelai() {
    const telai = document.querySelectorAll(".telaio");
    if (!("IntersectionObserver" in window)) {
      telai.forEach((t) => t.classList.add("telaio--visibile"));
      return;
    }
    const io = new IntersectionObserver((voci) => {
      voci.forEach((v, i) => {
        if (v.isIntersecting) {
          setTimeout(() => v.target.classList.add("telaio--visibile"), i * 70);
          io.unobserve(v.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    telai.forEach((t) => io.observe(t));
  }

  /* ----------------------------------------------------------------- Teatro */
  function costruisciTeatro() {
    const p = $("#palchi");
    if (!C.video || !C.video.length) {
      p.appendChild(el("p", "sottotitolo-veduta", "Nessun video, per ora."));
      return;
    }
    C.video.forEach((v) => {
      const box = el("div", "palco");
      const video = document.createElement("video");
      video.src = v.src;
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      if (v.poster) video.poster = v.poster;
      box.appendChild(video);

      const cap = el("div", "palco__didascalia");
      cap.appendChild(el("h3", "palco__titolo", v.titolo || ""));
      if (v.dedica) cap.appendChild(el("p", "palco__dedica", v.dedica));
      box.appendChild(cap);

      p.appendChild(box);
    });
  }

  /* ---------------------------------------------------------------- Blasone */
  const STEMMA_SVG = `
<svg class="stemma__svg" viewBox="0 0 200 236" role="img" aria-label="Stemma di casa">
  <defs>
    <linearGradient id="campo" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#7B37B4"/><stop offset="100%" stop-color="#3D1755"/>
    </linearGradient>
  </defs>
  <path d="M14 12h172v112c0 56-44 84-86 100C58 208 14 180 14 124z" fill="url(#campo)" stroke="#C9A227" stroke-width="3"/>
  <path d="M24 22h152v100c0 49-38 74-76 88-38-14-76-39-76-88z" fill="none" stroke="#E8D49A" stroke-width="1" opacity=".55"/>
  <line x1="100" y1="22" x2="100" y2="210" stroke="#E8D49A" stroke-width="1" opacity=".35"/>
  <line x1="24" y1="112" x2="176" y2="112" stroke="#E8D49A" stroke-width="1" opacity=".35"/>

  <!-- I quarto: caduceo -->
  <g stroke="#E8D49A" stroke-width="2.4" fill="none" stroke-linecap="round">
    <line x1="62" y1="48" x2="62" y2="96"/>
    <path d="M52 58c10-8 10 8 20 0M52 74c10-8 10 8 20 0"/>
    <path d="M55 46c4-6 10-6 14 0"/>
  </g>
  <!-- II quarto: viola -->
  <g fill="#E8D49A" opacity=".92">
    <ellipse cx="138" cy="60" rx="7" ry="10"/><ellipse cx="127" cy="72" rx="10" ry="7"/>
    <ellipse cx="149" cy="72" rx="10" ry="7"/><ellipse cx="132" cy="86" rx="8" ry="9"/>
    <ellipse cx="144" cy="86" rx="8" ry="9"/><circle cx="138" cy="74" r="4" fill="#7B37B4"/>
  </g>
  <!-- III quarto: compasso -->
  <g stroke="#E8D49A" stroke-width="2.4" fill="none" stroke-linecap="round">
    <path d="M62 128l-14 44M62 128l14 44"/><circle cx="62" cy="126" r="4"/>
    <path d="M54 156h16"/>
  </g>
  <!-- IV quarto: penna d'oca -->
  <g stroke="#E8D49A" stroke-width="2.4" fill="none" stroke-linecap="round">
    <path d="M154 128c-16 4-30 18-36 34-2 6-2 10 0 14 4 2 8 2 14 0 16-6 26-22 22-48z"/>
    <line x1="128" y1="178" x2="150" y2="140"/>
    <line x1="122" y1="184" x2="130" y2="176"/>
  </g>
  <path d="M70 214h60" stroke="#C9A227" stroke-width="2"/>
</svg>`;

  function costruisciBlasone() {
    const b = C.blasone;
    const veduta = $("#v-blasone");
    if (!b || b.mostra === false) {
      veduta.querySelectorAll(".titolo-veduta, .sottotitolo-veduta").forEach((n) => n.remove());
      $("#blasone").remove();
      return;
    }
    const box = el("div", "stemma");
    box.innerHTML = STEMMA_SVG;
    box.appendChild(el("h3", "stemma__casata", b.casata));
    box.appendChild(el("p", "stemma__motto", "« " + b.motto + " »"));

    const ul = el("ul", "stemma__lettura");
    (b.lettura || []).forEach((v) => {
      const li = el("li", "stemma__voce");
      li.append(el("span", "stemma__simbolo", v.simbolo), el("p", "stemma__significato", v.significato));
      ul.appendChild(li);
    });
    box.appendChild(ul);
    if (b.curiosita) box.appendChild(el("p", "stemma__curiosita", b.curiosita));

    $("#blasone").appendChild(box);
  }

  function costruisciCongedo() {
    const c = C.congedo;
    if (!c) return;
    const box = $("#congedo");
    box.appendChild(el("h3", "congedo__titolo", c.titolo));
    (c.testo || []).forEach((t) => box.appendChild(el("p", "congedo__testo", t)));
    if (c.firma) box.appendChild(el("p", "congedo__firma", c.firma));
    if (c.poscritto) box.appendChild(el("p", "congedo__poscritto", c.poscritto));
  }

  /* ----------------------------------------------------------------- Visore */
  function apriVisore(contenuto) {
    const corpo = $("#visoreCorpo");
    corpo.innerHTML = "";
    corpo.appendChild(contenuto);
    $("#visore").hidden = false;
    $("#visore").scrollTop = 0;
    document.body.style.overflow = "hidden";
    $("#visoreChiudi").focus();
  }

  function chiudiVisore() {
    $("#visore").hidden = true;
    $("#visoreCorpo").innerHTML = "";
    document.body.style.overflow = "";
  }

  /* ----------------------------------------------------------- Navigazione */
  function vaiA(nome) {
    document.querySelectorAll(".veduta").forEach((v) => {
      const attiva = v.dataset.veduta === nome;
      v.hidden = !attiva;
      v.classList.toggle("veduta--attiva", attiva);
    });
    document.querySelectorAll(".navigazione__voce").forEach((b) => {
      b.classList.toggle("navigazione__voce--attiva", b.dataset.vai === nome);
    });
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  function collegaNavigazione() {
    document.querySelectorAll("[data-vai]").forEach((b) => {
      b.addEventListener("click", () => vaiA(b.dataset.vai));
    });
    $("#visoreChiudi").addEventListener("click", chiudiVisore);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !$("#visore").hidden) chiudiVisore();
    });
  }

  /* ----------------------------------------------------------------- Musica */
  function collegaMusica() {
    if (!C.audio) return;
    const bottone = $("#musica");
    const suono = new Audio(C.audio);
    suono.loop = true;
    suono.volume = 0.35;
    bottone.hidden = false;
    bottone.addEventListener("click", () => {
      const acceso = bottone.getAttribute("aria-pressed") === "true";
      if (acceso) { suono.pause(); } else { suono.play().catch(() => {}); }
      bottone.setAttribute("aria-pressed", String(!acceso));
      bottone.querySelector(".musica__testo").textContent = acceso ? "Musica" : "Silenzio";
    });
  }

  /* ------------------------------------------------------------------ Avvio */
  document.title = (C.occasione || "Per") + ", " + C.destinataria;
  preparaIngresso();
  costruisciFrontespizio();
  costruisciLettere();
  costruisciGalleria();
  costruisciTeatro();
  costruisciBlasone();
  costruisciCongedo();
  collegaNavigazione();
  collegaMusica();
})();
