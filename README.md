# Lični sajt — Ivan Martinović

Hugo (static site generator) projekat, spreman za hosting na GitHub Pages
(`IvanMct.github.io`).

Sajt ima 5 sekcija: **About me, Publications, Honors & Awards, CV, Contact** —
sve na jednoj stranici, navigacija na vrhu skroluje do odgovarajućeg dela.

---

## Korak po korak — kako da postaviš sajt na GitHub Pages

### 1. Napravi GitHub nalog (ako ga nemaš)
Idi na [github.com](https://github.com) i registruj se.

### 2. Napravi novi repozitorijum
- Klikni **New repository** (zeleno dugme, gornji desni ugao)
- Ime repozitorijuma mora biti **tačno**:
  ```
  IvanMct.github.io
  ```
- Izaberi **Public**
- **Ne** štikliraj "Add a README file" (već imamo svoj)
- Klikni **Create repository**

### 3. Otpakuj ovaj zip i push-uj ga na GitHub

Otvori terminal (Mac/Linux) ili Git Bash/PowerShell (Windows) u folderu gde si
otpakovao projekat, pa pokreni:

```bash
git init
git remote add origin https://github.com/IvanMct/IvanMct.github.io.git
git add .
git commit -m "Inicijalna verzija sajta"
git branch -M main
git push -u origin main
```

(Ako nemaš git instaliran: [git-scm.com/downloads](https://git-scm.com/downloads).
Ako te pita za login, koristi GitHub korisničko ime i **Personal Access Token**
umesto lozinke — GitHub će te uputiti na to ako pokušaš sa običnom lozinkom.)

### 4. Uključi GitHub Pages preko GitHub Actions
- Idi na svoj repozitorijum na GitHub-u
- **Settings** (tab na vrhu) → **Pages** (levi meni)
- Pod "Build and deployment" → **Source** izaberi **GitHub Actions**
- Ništa drugo ne treba da podešavaš — workflow fajl
  (`.github/workflows/hugo.yaml`) je već u projektu i radiće automatski

### 5. Sačekaj da se sajt build-uje
- Idi na tab **Actions** u repozitorijumu — videćeš da je workflow pokrenut
  (žuti krug = u toku, zeleno kvačica = uspešno)
- Traje obično 1-2 minuta
- Kad završi, sajt je live na:
  ```
  https://IvanMct.github.io
  ```

### 6. Svaka sledeća promena
Kad god želiš da ažuriraš sadržaj (vidi ispod kako), samo ponovi:
```bash
git add .
git commit -m "Opis izmene"
git push
```
GitHub Actions će automatski ponovo build-ovati i objaviti sajt za par minuta.

---

## Kako da update-uješ sadržaj

Liste (publikacije, nagrade, obrazovanje) su u `data/*.yaml` fajlovima.
Dodaš novi blok istog formata kao postojeći — ne moraš dirati HTML ni CSS.

Primer — nova publikacija u `data/publications.yaml`:

```yaml
- authors: "Martinović I., et al."
  title: "Naslov novog rada"
  venue: "Ime časopisa ili konferencije"
  year: "2026"
  type: "journal"   # journal | conference | monograph | lexicon | handbook
  link: "https://doi.org/..."
```

Nova nagrada u `data/awards.yaml`:

```yaml
- title: "Naziv nagrade"
  org: "Ko je dodelio nagradu"
  date: "2026"
  note: "Opciono — kratko objašnjenje"
```

> Napomena: `data/career.yaml`, `data/news.yaml` i `data/media.yaml` postoje
> u projektu (ostavljeni iz ranije verzije sajta) ali se trenutno **ne
> prikazuju** na stranici. Ako kasnije poželiš da vratiš Career Timeline,
> News ili Media sekcije, javi i lako se vraćaju.

## Kako da promeniš sliku profila

Trenutno je postavljen placeholder (plavi krug sa ikonicom). Da dodaš svoju
fotografiju:

1. Sačuvaj sliku kao `static/images/profile.jpg`
2. Otvori `layouts/index.html`, pronađi blok koji počinje sa
   `<div class="photo-frame">` (blizu vrha fajla) i zameni ga sa:
   ```html
   <div class="photo-frame">
     <img src="{{ "images/profile.jpg" | relURL }}" alt="Ivan Martinović">
   </div>
   ```

## Kako da pokreneš sajt lokalno (pre objavljivanja, opciono)

1. Instaliraj Hugo (extended verziju): https://gohugo.io/installation/
   - Windows: `winget install Hugo.Hugo.Extended`
   - macOS: `brew install hugo`
   - Linux: preuzmi `.deb`/`.tar.gz` sa GitHub releases stranice Hugo-a
2. U folderu projekta pokreni:
   ```
   hugo server
   ```
3. Otvori `http://localhost:1313` u browseru.

## Pre nego što objaviš — provericu

- [ ] U `hugo.toml` je `baseURL` već postavljen na
      `https://IvanMct.github.io/` — ovo odgovara tvom GitHub username-u,
      samo provericu da je tačno napisano
- [ ] Email adrese, telefon i LinkedIn link u `layouts/index.html`
      (sekcija `#contact`) su tvoji stvarni podaci — provericu da su točni
- [ ] CV fajl je već uključen: `static/files/CV_Ivan_Martinovic.pdf`
      (ako ažuriraš CV, samo zameni ovaj fajl istim imenom)

## Šta je unutra (struktura projekta)

```
content/_index.md            → marker fajl za Hugo (ne sadrži tekst)
data/publications.yaml        → lista publikacija
data/awards.yaml               → lista nagrada
data/education.yaml            → obrazovanje
layouts/index.html              → glavni template (sve sekcije sajta)
layouts/_default/baseof.html    → osnovni HTML skeleton (head, fontovi)
static/css/style.css            → svi stilovi (boje, raspored, responsive)
static/js/main.js               → highlight aktivne nav stavke pri skrolovanju
static/files/CV_Ivan_Martinovic.pdf → CV za download
.github/workflows/hugo.yaml     → automatski build + deploy na GitHub Pages
hugo.toml                       → konfiguracija sajta (baseURL, naslov)
```

## Boje i fontovi (za referencu)

- Duboko mornarsko plava (hero/nav pozadina): `#0F2840`
- Krem (pozadina sadržaja): `#F7F4ED`
- Plavi akcent (linkovi, ikonice): `#4A90C4`
- Display font: **Fraunces** (serif)
- Body font: **Inter**
- Mono/detalji: **JetBrains Mono**
