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
// Numeri dispari da 10 a 1
for (let numero = 10; numero >= 1; numero--) {
    if (numero % 2 !== 0) {
        console.log(numero);
    }
}
// il prompt \\
let word = prompt('Inserisci una parola');
console.log(word.length);
// richiesta di input corretta\\
for (let i = 0; i < 5; i++) {
    let parola = prompt('Inserisci una parola');
    if (parola.length > 0) {
        console.log(parola.length);
    } else {
        console.log('Input non valido');
    }
} while (parola.length === 0);
do {

} while (parola.length === 0);
// if e else\\
let num = 10;
if (num > 5) {
    console.log('la variabile e maggiore di 5');
}
// if e else e else-if\\
let score = 85;
if (score >= 90 && score <= 100) {
    console.log('voto corretto!');
} else {
    console.log('voto errato!');
}
// switch case\\

//array di numeri\\
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0, 1, 2, 3, 4]); // 1
// somma di numeri in un array\\
let somma = 0;
for (let i = 0; i < numbers.length; i++) {
    somma += numbers[i];
}
console.log(somma);
//reverse di un array\\
let array = [1, 2, 3, 4, 5];
let reversedArray = [];
for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
}
console.log(reversedArray); 
