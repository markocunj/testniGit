# Vue Form Builder

## Opći podaci o projektu

```
Autor projekta: Marko Cunj

Mentor: doc. dr. sc. Nikola Tanković
Kolegij: Programsko inženjerstvo
```

## Sažetak

Primjena i izrada korisničkih obrazaca predstavlja prilično veliki izazov u nedostatku vremena, ali i novaca za izradu korisničkog obrasca. Ovaj projekt programera iz Vijetnama s nadogradnjama uvelike olakšava proces izrade tih korisničkih obrazaca, kao i raspolaganje podacima koje krajnji korisnik upisuje, a programer sprema u bazu podataka ili koristi na način koji mu je potreban. Uporaba ovog projekta je relativno jednostavna. Samo upoznavanje s funkcijama je maksimalno olakšano. Svatko tko se i malo razumije u Vue okruženje, s osnovnim znanjem, može se koristiti ovim projektom i svim njegovim funkcionalnostima.

## Kako instalirati?

```
npm install https://github.com/markocunj/vue-form-builder
```

### Referenca na glavni projekt

Link: [Vue Form Builder](https://github.com/sethsandaru/vue-form-builder).
Glavna dokumentacija o projektu: [Vue Form Builder - dokumentacija](https://phattranminh96.gitbook.io/vue-form-builder/).

### Demo link

Glavni demo link: [Demo](https://vigilant-bardeen-f562ee.netlify.app/).
Na demo stranici je napravljeno sučelje putem kojega se može testirati Vue Form Builder s dodanim nadogradnjama.

### Nadogradnje

Dvije glavne nadogradnje projekta su:

- Vue Multiselect (autocomplete)
- Vue Dropzone

### Vue Multiselect

Vue Multiselect služi kao mogućnost automatskog popunjavanja polja, metodu koja je uključena u ovaj projekt.
Neke od značajki „Vue-multiselecta“ su:

- jedan / višestruki odabir
- padajući izbornik (engl. dropdowns)
- mogućnost dohvaćanja podataka iz „pozadine“ (engl. back-end)

Unutar opcija odabira korisniku je omogućen izbor između umetanja dijelova za automatsko ručno popunjavanje polja ili upisivanje hiperveze koja vodi do polja koje se potom uključuje u kod. Također, postoji mogućnost kojom korisnik može odabrati višestruki unos.

![Opcenito multiselect](/images/Slika1.png)

### Vue Dropzone

Vue2-dropzone je komponenta koja je uključena u ovaj rad kao zamjena za „Vue-upload-component“. Vue2-dropzone je inačica „dropzone.js“ paketa koji je razvijen za „JavaScript“ programski jezik, ali za Vue okruženje.

![Vue-dropzone](/images/Slika2.png)

Uspješno učitana datoteka se nalazi na lijevoj strani te ona zadovoljava kriterije koji su napisani u opisu, za razliku od drugog dokumenta koji ima nedozvoljenu ekstenziju te samim time nije prihvaćen u učitavanje datoteke.

- Validacija na Vue Dropzoneu izgleda ovako:

![Validacija](/images/Slika3.png)

### Dependencies (ovisnosti)

- „Axios“ – služi za izradu HTTP zahtjeva iz „node.js“ i igra vitalnu ulogu u dohvaćanju podataka iz „pozadine“ (engl. back-end) kao i slanja tih podataka natrag na „pozadinu“
- „Core-js „– paket za „JavaScript“ koji uključuje „obećanja“ (engl. promise), simbole, kolekcije, iteratore (engl. iterators), polja (engl. arrays) i mnoge ostale funkcionalnosti
- „Dayjs“ – služi za prepoznavanje, validaciju, manipuliranje i prikaz datuma i vremena za moderne pretraživače poput „Google Chromea“ itd., radi u skladu s „Moment.js“
- „Litepicker“ – služi za prikazivanje datuma, odnosno raspona datuma (nekoliko mjeseci, jedan datum ili raspon datuma), moguć višestruk odabir itd.
- „Vue-axios“ – predstavlja „Axios“ dodatak, ali za Vue okruženje, pomaže pri integraciji „Axios“ u Vue
- „Vue-class-component“ – paket koji dopušta programeru raditi svoje Vue komponente u stil (engl. style) sintaksi
- „Vue-multiselect“ – služi kao mogućnost automatskog popunjavanja polja, metodu koja je uključena u ovaj projekt
- „Vue-property-decorator“ – paket koji ovisi o „Vue-class-component“ paketu te popunjava neke njegove nedostatke
- „Vue2-dropzone“ – komponenta koja omogućuje „primi i pusti“ opciju (eng. „drag & drop“) za odabir datoteka koje korisnik želi učitati na određenu stranicu.
- „Vuedraggable“ – omogućuje „primi i pusti“ opciju (eng. „drag & drop“) i sinkronizaciju s poljem u kojem su spremljene kontrole.
