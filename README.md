# Chiang Mai Field Guide

A bilingual (English / Thai) travel guide to 14 places in Chiang Mai. It is written for visitors and for foreigners who live in the city.

**Created by:** Ms. Nichapa Rungsakulsongsang (นางสาวณิชาภา รุ้สกุลส่องแสง)
**Student ID:** 690110255 · Course 009212

## Running it

Open `index.html` in a browser. The site needs no build step and no server. For the most accurate preview (fonts, map embed), serve the folder locally:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Project structure

```
chiang-mai-guide/
├── index.html              Page markup: hero sphere, sections, lightbox, menu
├── css/
│   └── styles.css          All styling, animations and responsive breakpoints
├── js/
│   ├── data/
│   │   ├── photos.js        26 photos with author, licence and source links
│   │   ├── destinations.js  14 places: facts, reviews, tips, coordinates (EN/TH)
│   │   └── guide.js         Seasons, practical tips, itineraries, food, festivals
│   ├── i18n.js             Interface text in EN/TH and the language switcher
│   ├── sphere.js           3D photo sphere (drag to rotate, scroll to dolly)
│   └── app.js              Rendering, filters, map, lightbox, menu, cursor, reveals
└── assets/
    ├── favicon.svg
    └── img/                Photos at 1280 px (lightbox) and thumb/ at 640 px
```

The scripts load as plain `<script>` tags in the order shown in `index.html`. The data files must load first.

## Editing content

- **Places:** edit `js/data/destinations.js`. Every text field takes `{ en: "...", th: "..." }`. Wrap text in `**double asterisks**` to make it bold.
- **Interface text:** edit `js/i18n.js`.
- **Photos:** add an entry to `js/data/photos.js`, then put a 1280 px JPG in `assets/img/` and a 640 px JPG in `assets/img/thumb/`. Both files use the photo's `id` as the filename. Finally, list the id in the place's `photos` array.

### Replacing the photos with your own fieldwork

The 009212 brief asks for photos you took yourself. Every current image is a real photo of the place from Wikimedia Commons, credited to its author. To use your own:

1. Save your photo as `assets/img/<id>.jpg` (about 1280 px wide) and `assets/img/thumb/<id>.jpg` (about 640 px wide).
2. In `photos.js`, set `author` to your name. Set `license` to something like `"Photo by the author"`, and set `source`/`licenseUrl` to `"#"`.

## Sources

- Photos: Wikimedia Commons. Each photo's author, licence (CC BY / CC BY-SA / CC0 / public domain) and original file page are listed in the Photo Credits section and in `js/data/photos.js`. The images were only resized.
- Coordinates: Wikipedia/Wikidata and Commons geotags, as decimal degrees (WGS84).
- Prices and opening hours were checked in September 2026 against official pages and recent visitor guides. They change often, and the site tells readers to confirm on arrival.
