# Movie Project - Anankaaa

Az oldal filmeket jelenít meg kártyás formában. 

Alkalmazás elindítása:
- a repo klónozása után (git clone - repo neve) 'npm i' parancs kiadásával a függőségek letöltése
- 'npm start' parancs kiadásával lehet elindítani az oldalt a repoba belépés után
- az alkalmazás szerverről tölti be az adatokat, nem kell hozzá semmilyen parancsot kiadni 

Kiegészítők:
- Bootstrap v. 5-t és Font-awesome-t használtam a weboldal megjelenítéséhez 


Home oldal:
- Bemutatkozó oldal


Movie List:
- Az oldal a filmeket kártyás formátumban listázza, egy oldalon 20 darabot, a lapozó segítségével lehet a következő 20 kártyára navigálni.

- Searching menüből kiválasztható, hogy a kártya mely tulajdonságában szeretnénk keresni. A kereső mezőbe beírva listázza azon kártyákat, melyeken megtalálható a keresett szöveg.

- 'Sorting by...' menüből kiválasztva a kártya tulajdonsága szerint lehet növekvő sorrendbe szervezni a kártyákat.

- A kártyákon található két gomb. A piros - kuka gombbal az adott kártyát tudjuk törölni. A kék - ceruza gombbal pedig a kártya adatait tudjuk módosítani egy szerkesztő oldalra átnavigálva. 

- Add New Card gombra kattintva átvisz egy üres űrlapra, ahol a kötelező mezők kitöltésével és a SAVE gomb megnyomásával létrehoz egy új kártyát, melyet a Movie List oldal legutolsó elemeként helyez el a listában. 


Szerkesztő odal: 
- Az URL-ben (http://localhost:4200/movie/id) szerint megnyitható, űrlap formában jelenik meg a szerkesztés lehetősége.

- Minden mező kitöltése kötelező, amennyiben nem felel meg az elvárásoknak azt a mező alatti figyelmeztető üzenet jelzi.

- minden mező kitöltése mellett lehetséges a mentés a 'SAVE' gomb megnyomásával, mely visszanavigál a Movie List oldalra, ahol a kártya a módosított adatokkal fog szerepelni.


