Characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "u", "v", "w", "x", "y", "z"]
Spec = ["!", "£", "$", "%", "&", "/", "(", ")", "=", "?", "^", "|"]
CAPArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
Arrayy = [];
ArrayOrdinato = [];
let Char = document.querySelector("#Characters");
let Special = document.querySelector("#Specials");
let CAPS = document.querySelector("#CAPS");
let Generate = document.querySelector("#Generate");
let Copia = document.querySelector(".copy");
let Check = document.querySelector(".check");
function Clean() {
    Char.value = "";
    Special.value = "";
    CAPS.value = "";
    Generate.value = "";
    Char.disabled = false;
    Special.disabled = false;
    CAPS.disabled = false;
    Arrayy = [];
    ArrayOrdinato = [];
    Copia.style.display = "block";
    Check.style.display = "none";
}
function Gen() {
    Char.disabled = true;
    Special.disabled = true;
    CAPS.disabled = true;
    if (parseInt(Char.value) + parseInt(Special.value) + parseInt(CAPS.value) < 4) {
        alert("La lunghezza totale della password deve essere superiore a 4");
        Clean();
    }
    else if (parseInt(Char.value) + parseInt(Special.value) + parseInt(CAPS.value) > 20) {
        alert("La lunghezza totale della password deve essere inferiore a 20");
        Clean();
    }
    else {
        for (let c = 0; c < Char.value; c += 1) {
            Carattere = Characters[Math.floor(Math.random() * (Characters.length))];
            Arrayy.push(Carattere);
        }
        for (let s = 0; s < Special.value; s += 1) {
            Speciale = Spec[Math.floor(Math.random() * (Spec.length))];
            Arrayy.push(Speciale);
        }
        for (let a = 0; a < CAPS.value; a += 1) {
            Maiuscola = CAPArray[Math.floor(Math.random() * (CAPArray.length))];
            Arrayy.push(Maiuscola);
        }
        let ciao = [...Arrayy];
        for (let g = 0; g < ciao.length; g += 1) {
            random = Math.floor(Math.random() * Arrayy.length);
            ArrayOrdinato.push(Arrayy[random]);
            Arrayy.splice(random, 1);
        }
        for (let h = 0; h < ArrayOrdinato.length; h += 1) {
            Generate.value = Generate.value + ArrayOrdinato[h];
        }
    }
}
function Copy()
{
    navigator.clipboard.writeText(Generate.value);
    Copia.style.display = "none";
    Check.style.display = "block";
}