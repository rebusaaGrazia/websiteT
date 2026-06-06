# Graziella Trullo — Sito Web

Sito web per **Graziella Trullo**, un bed & breakfast a conduzione familiare situato a Locorotondo (BA), nel cuore della Valle d'Itria in Puglia.

---

## Struttura del sito

| Pagina | File | URL pulito |
|---|---|---|
| Home | `main.html` | `/home` |
| Chi Siamo | `chiSiamo.html` | `/chi-siamo` |
| Galleria | `galleria.html` | `/galleria` |
| Mappa | `map.html` | `/mappa` |
| Contatti | `contatti.html` | `/contatti` |
| Prenota | `prenota.html` | `/prenota` |

---

## Tecnologie utilizzate

- **HTML5** — struttura semantica delle pagine
- **CSS3** — layout responsivo con media query (mobile-first)
- **JavaScript vanilla** — routing SPA per URL puliti senza estensione `.html`
- **Font Awesome** — icone (telefono, stagioni, ecc.)
- **Google Maps API** — mappa interattiva nella pagina Mappa
- **Google Forms** — modulo di contatto e prenotazione

---

## Hosting su GitHub Pages

Il sito è hostato tramite **GitHub Pages** con routing gestito lato client.

### Setup

1. Fai il fork o clona questo repository
2. Vai su **Settings → Pages**
3. Seleziona il branch `main` (o `master`) come sorgente
4. Il sito sarà raggiungibile all'indirizzo:
   ```
   https://<tuo-username>.github.io/<nome-repo>/
   ```

### URL puliti

Il file `404.html` gestisce il redirect degli URL senza estensione `.html` su GitHub Pages. Il file `router.js` riscrive i link a runtime e gestisce la navigazione senza ricaricare la pagina.

> **Nota:** Se il repository non è alla radice del dominio (es. `username.github.io/trullo`), aggiorna la variabile `repoName` nel file `404.html` con il nome del repository:
> ```js
> var repoName = '/trullo';
> ```

---

## Struttura dei file

```
/
├── main.html
├── chiSiamo.html
├── galleria.html
├── map.html
├── contatti.html
├── prenota.html
├── style.css
├── router.js
├── 404.html
├── README.md
└── photos/
    ├── logo.png
    ├── first.png
    ├── chiS1.png
    ├── chiS2.png
    ├── chiS3.png
    ├── chiS4.png
    ├── pE1.png
    ├── pE2.png
    ├── pE3.png
    ├── pI1.png
    ├── pI2.png
    ├── pI3.png
    ├── pC1.png
    ├── pC2.png
    └── pB1.png
    └── pB2.png
```

---

## Contatti

- **Telefono:** (+39) 334 744 1041 / (+39) 375 670 5091
- **Email:** lisim.lisi@gmail.com / grazia0.0lisi@gmail.com
- **Indirizzo:** Contrada Cappagliaro n°28, Locorotondo (BA)

---

## Licenza

Tutti i diritti riservati © Graziella Trullo. Contenuti e immagini non riproducibili senza consenso esplicito.