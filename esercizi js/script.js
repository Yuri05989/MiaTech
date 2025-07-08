//variabili\\
let id = 0;
const name = {
    firstname: 'yuri'
};
console.log(id)
console.log(name)
//cambio valore\\
let number = 5;
console.log(number)
number = 6;
console.log(number)
//ridefinizione di variabile\\
let numero = 20;
{
    let numero = 12;
    console.log(numero)
}
console.log(numero)
//scoping di variabile\\
let fuori = 45;
{
    let dentro = 50;
    console.log(fuori)
    console.log(dentro)
}
console.log(fuori)

//genera numeri pari e dispari\\
// Numeri pari da 0 a 20
for (let numero = 0; numero <= 20; numero++) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
}
// Numeri dispari da 0 a 20
for (let numero = 0; numero <= 20; numero++) {
    if (numero % 2 !== 0) {
        console.log(numero);
    }
}
// il prompt \\
let word = prompt('Inserisci una parola');
consolwe.log(word.length);
// richiesta di input corretta\\
for (let i = 0; i < 5; i++) {
    let parola = prompt('Inserisci una parola');
    if (parola.length > 0) {
        console.log(parola.length);
    } else {
        console.log('Input non valido');
    }
} while (parola.length === 0);
// if e else\\
let num = 10;
if (num > 5) {
    console.log('la variabile e maggiore di 5');
}
// if e else e else-if\\
let score = prompt('Inserisci il tuo punteggio');
if (score >= 90) {
    console.log(' voto Ottimo!');
}
// switch case\\
else if (score >= 80) {
    console.log('voto Buono!');
} else if (score >= 70) {
    console.log('voto Sufficiente!');
} else {
    console.log('voto Insufficiente!');
}