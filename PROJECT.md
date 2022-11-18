# Egyéni Angular-projekt

Készíts egy szabadon választott témájú oldalt listázó és szerkesztő aloldalakkal.   
Az alkalmazás egy teljes CRUD-ot valósít meg.

---
## Az oldal témája, adatok
Elegendő egy entitással dolgozni, amelynek legalább öt tulajdonsága van, ezen belül legyen olyan, amely:
- string típusú
- number típusú
- boolean típusú
- string típusú és képre mutat    
  
Az adatázis legyen legalább 50 elemű.   

_FIGYELEM_: Ha nincs ötleted, használd ezt az adatbázist, az URL a következő: 
https://nettuts.hu/jms/aTeGitHubNeved/cinema   
(Az aTeGitHubNeved helyére a GitHub-fiókod elnevezését írd be.)   

Az oldalak legyenek teljesen reszponzívak.   
A dizájnhoz használhatsz Boostrapet, vagy egyéb, különféle UI-komponenskönyvtárakat (pl. Material) vagy bármely más frameworköt (pl. Tailwind), template-et.   
A használt megoldást tüntesd fel a "mini" dokumentációban.

Az adatokat online URL-ről is lekérheted, de JSON-szervert is használhatsz,   
a lényeg, hogy ezt a "mini dokumentációban" is tüntesd fel.

_FONTOS_: Kérünk Titeket, hogy a repository gyökerében hozzátok létre a projektet,    
ne pedig egy almappában.    
Ezt a következőképpen tudjátok megtenni új Angular-projekt létrehozásakor:   
`ng new --name="projekt-neve" --directory . --style scss --routing true`   

---
## "Mini" dokumentáció
A README.md fájlban röviden írd le egy-egy mondatban, hogy:
- mi az oldal témája (esetleg rövid indoklással)
- hogyan kell elindítani az alkalmazást (milyen parancsot kell kiadni)
- miként kell elindítani a backendet (amennyiben erre külön szükség van)
- milyen sablont, frameworköt, UI library-t használtál 
  
A téma megválasztásában és az adatok összetételében a fentiek kivételével semmilyen megkötés nincsen.

---
## Főoldal és navigációs sáv

Tetszőlegesen kialakított komponensek tetszőlegesen kialakított tartalommal.   
A következők a kötelezően megvalósítandók:
- A navigációs sávon lehessen kattintani a listázó aloldalra
- A navigációs sáv minden aloldalon tartalmazzon linket/menüpontot a főoldalra és a listázóra (a szerkesztő aloldalra külön nem kell)
- A főoldalon legyen egy rövid leírás az oldalról
- A főoldalon legyen egy gomb, amelyre kattintva közvetlenül a kártyás nézethez jutunk
  
---
## Listázó komponens

- Kártyás formában jeleníti meg az adatokat
- A képek megjelennek a kártyákon
- A kártyák elrendezése szabadon választható
- Egy sorban 
  - laptop méretben négy kártya jelenjen meg
  - tablet méretnél két kártya jelenjen meg
  - mobilnézetben egy kártya legyen
- A kártyák azonos magasak legyenek
- A képek azonos magasak legyenek
- A kártyákon van egy törlés műveletet végző és egy szerkesztés művelethez irányító gomb
- A kártyák fölött/mellett lapozó található, amely segítségével egyszerre csak 20 kártya jelenik meg egy oldalon
- Legyen legalább kettő szűrő, amelyekkel rendezni lehet a kártyákat, illetve keresni lehet bennük
- A kártyás háló fölött van egy új entitás létrehozására szolgáló gomb

_EXTRA_: A lapozó oldalszáma az egyes kártyák számának növekedésével/csökkenésével dinamikusan nő/csökken

---
## Szerkesztő komponens

- Az oldal egy reszponzív űrlapot tartalmaz
- Használhatsz template-driven vagy reactive form-ot is
- Az űrlapra az adatbázis (listázó komponens) egyes elemeinek adatai mellett elhelyezett `edit` gombra való kattintással lehet eljutni   
A gomb formáját, megjelenését Rátok bízzuk, legyen intuitív a felhasználói felület
- A szerkesztő komponens nulladik indexű elemére navigálva egy üres űrlap jöjjön be,   
ahol egy kártya új adatai vehetők fel  
- Az új elem felvétele után az alkalmazás navigáljon a kártyás listázó aloldalra,   
és jelenjen meg benne az új kártya
- Legyen alapvető validáció: 
  - hiányos adatok esetén ne lehessen elküldeni az űrlapot
  - minden mező legyen kötelező

---
## Extrák
A fentieken kívül minden extrának számít.   

Ezek lehetnek:
- felugró üzenetek bizonyos műveletek sikeressége/sikertelensége esetén (pl. Toastr)
- részletes validálás az űrlapon hibaüzenetekkel
- dinamikusan változ(tathat)ó oszlopok, fejlécek
- további szűrők
- statisztikák
- grafikonok, térképek
  
