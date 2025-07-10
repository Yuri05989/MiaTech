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
for (let numero = 0; numero <= 20; numero++) 
    if (numero % 2 === 0) {
        console.log(numero);
        }
// Numeri dispari da 10 a 1
while (numero >= 10) {
    if (numero % 2 !== 0) {
        console.log(numero);
    }
}

// il prompt \\
let word = prompt('Inserisci una parola');
console.log(word.length);
// richiesta di input corretta\\
let max;
do {
    max = prompt('Inserisci una parola di almeno 5 caratteri');
} while (max.length < 5);
console.log(max);
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
switch (score) {
    case 100:
        console.log('voto perfetto!');
        break;
    case 90:
        console.log('voto ottimo!');
        break;
    case 80:
        console.log('voto buono!');
        break;
    default:
        console.log('voto insufficiente');
}
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
// popolazione di un array\\
let arrayPopolato = ['parola'];
// crea un oggetto \\
const persona = {
    nome: 'Mario',
    cognome: 'Rossi',
    age: 30,
    city: 'Roma',
};
console.log(persona.nome);
console.log(persona.age);
// modifica la proprietà di un oggetto \\
persona.age = 31;
console.log(persona.age);
// aggiungi una proprietà a un oggetto \\
persona.job = 'Meccanico';
console.log(persona.job);
// iterazione delle proprietà \\
for (let key in persona) {
    console.log(`${key}: ${persona[key]}`);
}
// funzioni annidate \\
function outerFunction(x) {
    function innerFunction(y) {
        console.log('Funzione interna');
        console.log(`x: ${x}, y: ${y}`);
    }
    innerFunction(5);
}
outerFunction(10);
