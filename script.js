"use strict"

// Konstruktoriaus funkcija
function Zmogus (vardas, pavarde) {
    // vidiniai objekto kintamieji
    this.vardas = vardas;
    this.pavarde = pavarde;
    
    // metodai
    this.prisistatyk = function() {
        return this.vardas + " " + this.pavarde;
    }
}

let zmogus1 = new Zmogus ("Vardenis", "Pavardenis");
 console.log(zmogus1.prisistatyk())
console.log(zmogus1);


// Klases
// Tai irgi taip pat yra sablonas kurti objektams
// Klase objektu sablonas, o ne objektas
// Pagal klase kuriami objektai


class ZmogausKlase {
    constructor (vardas, pavarde) { // klaseje butinai turi buti konstruktorius
        this.vardas = vardas;
        this.pavarde = pavarde;
    }
    prisistatyk() { // metodas klaseje apsiraso siek tiek kitaip nei konstruktoriaus funkcijoje
        return this.vardas + " " + this.pavarde;
    }
}

let zmogus2 = new ZmogausKlase("Vardenis1", "Pavardenis2");
console.log(zmogus2);
console.log(zmogus2.prisistatyk());


// Paveldimumas

// Tevine klase
class Automobilis {
    constructor (marke) {
        this.marke = marke;
    }
    isveskMarke() {
        return "Automobilio marke" + this.marke;
    }
    tevinisMetodas() {
        return "tevinisMetodas is Automobilis"
    }
}


// Klases papildymas
// Sukuriama nauja klase, kuri papildo Automobilis klase

// Vaikine klase, kuri paveldi is tevines
class Modelis extends Automobilis { // prie automobilio klases prikabinom modeli 
    constructor(marke, modelis, metai) {
        super(marke); // marke pasiims is tevines klases, ivyksta paveldimumas
        this.modelis = modelis; 
        this.metai = metai;
    }
    static automobilioAmzius(metai1) { // static - statinis metodas
        let sidiena = new Date(); // isveda sios dienos data
        return sidiena.getFullYear() - metai1; // getFullYear paima tik metus
    }


    parodykMarkeModeli() { // metodo tikslas parodyti marke ir modeli
        // return this.isveskMarke() + " " + this.modelis + this.automobilioAmzius(this.metai); // tokiu atveju mes klaida, nes statinis metodas nenaudoja this
        return this.isveskMarke() + " " + this.modelis + Modelis.automobilioAmzius(this.modelis); // isveskMarke yra is tevines klases

    }
    tevinisMetodas() {
        return "Galbut veikiantis  metodas" // perasytas metodas, kuris buvo aprasytas tevineje klaseje
    }
}

let automobilis = new Automobilis("VW"); // new - pagal klase sukuria objekta
console.log(automobilis);

let auto1 = new Modelis("VW", "Passat", 1994);
console.log(auto1);

console.log(auto1.parodykMarkeModeli());
console.log(auto1.isveskMarke());

// metodas per objekta kvieciamas - neveiks
// console.log(auto1.automobilioAmzius(1994));

// metodas kvieciamas per klase - veiks
console.log(Modelis.automobilioAmzius(1994));

// Kad nebutu per objekta pasiekiamas sis metodas, del saugumo, kad butu naudojamas tik klaseje
// console.log(auto1.automobilioAmzius());

console.log(auto1.tevinisMetodas()); // isveda antra varianta, nes buvo metodo perasimas
console.log(automobilis.tevinisMetodas()); // isveda pirma varianta, kuris yra tevineje klaseje





/////// Grupe su 5 mokiniais. Pritaikymas klasiu 

class Grupe { // tevine klase
    constructor (pavadinimas, trukme) {
        this.pavadinimas = pavadinimas;
        this.trukme = trukme;

    }
}

class Mokinys extends Grupe { // vaikine klase // paveldimumas is tevines klases // Grupe klases papildymas
    constructor(pavadinimas, trukme, vardas, pavarde, pazymiai, lankomumas) {
        super(pavadinimas, trukme); // paveldima is tevines klases
        this.vardas = vardas;
        this.pavarde = pavarde;
        this.pazymiai = pazymiai;
        this.lankomumas = lankomumas;

    }
    informacija() { // metodas
        // return "As esu" + this.vardas + "," + "is" + this.pavadinimas + "," + "mokausi" + this.trukme;
        return `As esu ${this.vardas}, is ${this.pavadinimas}, mokausi ${this.trukme}`; // kitas uzrasymas $ vietoje +
    }

}

class Mokytojas extends Grupe {
    constructor(pavadinimas, trukme, vardas, pavarde) {
        super(pavadinimas, trukme)
        this.vardas = vardas;
        this.pavarde = pavarde;
    }
}



// i masyva talpinami visi mokiniai
let grupe = [];
let pazymiuMasyvas = [5, 4, 3, 1, 1, 1];
let lankomumas = ["n", "x","n", "x","n", "x","n", "x"]


grupe.push(new Mokinys("1 grupe", "1 metai", "Vardenis", "Pavardenis", pazymiuMasyvas, lankomumas)); // push - talpinimas i masyva
grupe.push(new Mokinys("1 grupe", "1 metai", "Vardenis1", "Pavardenis1", pazymiuMasyvas, lankomumas));
grupe.push(new Mokinys("1 grupe", "1 metai", "Vardenis2", "Pavardenis2", pazymiuMasyvas, lankomumas));
grupe.push(new Mokinys("1 grupe", "1 metai", "Vardenis3", "Pavardenis3", pazymiuMasyvas, lankomumas));
grupe.push(new Mokinys("1 grupe", "1 metai", "Vardenis4", "Pavardenis4", pazymiuMasyvas, lankomumas));
grupe.push(new Mokytojas("1 grupe", "1 metai","Mokytojas", "Mokytojauskas"));

console.log(grupe);


