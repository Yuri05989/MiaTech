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
} else if (score >= 70 && score < 89) {
    console.log('voto buono!');
} else if (score >= 60 && score < 69) {
    console.log('voto sufficiente!');
} else if (score >= 0 && score < 59) {
    console.log('voto insufficiente!');
}
// switch case\\
switch (true) {
    case (score >= 90 && score <= 100):
        console.log('voto corretto!');
        break;
    case (score >= 70 && score < 89):
        console.log('voto buono!');
        break;
    case (score >= 60 && score < 69):
        console.log('voto sufficiente!');
        break;
    case (score >= 0 && score < 59):
        console.log('voto insufficiente!');
        break;
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
    innerFunction(5); return {
        x: x,
        y: 5
    }
}

// persistenza delle variabili locali \\
function outerFunctionWithLocalVar() {
    let localVar = 'Variabile locale';
    function innerFunction() {
        console.log(localVar);
    }
    innerFunction();
}
outerFunctionWithLocalVar();
// counter \\
function createCounter() {
    let count = 0;
    return {
        increment: function (amount) {
            count += amount;
            console.log(count);
        },
        decrement: function (amount) {
            count -= amount;
            console.log(count);
        }
    };
}
const counter = createCounter();
counter.increment(1); // 1
counter.increment(1); // 2
counter.decrement(1); // 1
// object.keys\\
const student = {
    name: 'Alice',
    age: 25,
    grade: 'A',
    school: 'XYZ University',
};
const keys = Object.keys(student);
console.log(keys);
// Object.values\\
const values = Object.values(student);
console.log(values);
// Object.entries\\
const entries = Object.entries(student);
console.log(entries);
// forEach e map \\
const numbersArray = [1, 2, 3, 4, 5];
// forEach
numbersArray.forEach((number) => {
    console.log(number * 2);
});
// map
const squaredNumbers = numbersArray.map((number) => number * number);
console.log(squaredNumbers);
// filter e find \\
const person = [
    {
        name: 'Mario',
        grade: 60,
    },
    {
        name: 'Maria',
        grade: 56,
    },
    {
        name: 'Maurizio',
        grade: 100,
    },
    {
        name: 'Marco',
        grade: 110,
    },
    {
        name: 'Mimma',
        grade: 34,
    },
];
const goodStudents = person.filter(item => {
    return item.grade >= 60;
});
console.log(goodStudents);
const badStudents = person.find(item => {
    return item.grade < 60;
});
// reduce e sort \\
const expenses = [4, 6, 8, 10, 12];
const sum = expenses.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);
const frutta = ['mela', 'banana', 'kiwi', 'arancia'];
frutta.sort();
// automobile
class Automobile {
    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = 59000;
        this.saluti = '';
    }
    static verificaistanza(obj, classe) {
        return obj instanceof classe;
    }
    description() {
        return `Marca: ${this.marca}, Modello: ${this.modello}, Anno: ${this.anno}, Saluti: ${this.saluti}`;
    }
    aggiungiChilometri(km) {
        this.chilometraggio += km;
        console.log(`Chilometraggio attuale: ${this.chilometraggio} km`);
    }
    set aggiungichilometri(km) {
        this.chilometraggio += km;
        console.log(`Chilometraggio attuale: ${this.chilometraggio} km`);
    }

    get chilometraggioAttuale() {
        return `Chilometraggio attuale: ${this.chilometraggio} km`;
    }
    mostraChilometraggio() {
        return `Chilometraggio: ${this.chilometraggio} km`;
    }
    #calcolaEtà() {
        return new Date().getFullYear() - this.anno;
    }
    mostraEtà() {
        return `Età: ${this.#calcolaEtà()} anni`;
    }
    _controllokm() {
        if (this.chilometraggio > 100000) {
            return 'Attenzione: Chilometraggio elevato!';
        } else {
            return 'Chilometraggio nella norma.';
        }
    }
    confrontakilometri(automobile) {
        if (this.chilometraggio > automobile.chilometraggio) {
            return `${this.marca} ha più chilometri di ${automobile.marca}`;
        } else if (this.chilometraggio < automobile.chilometraggio) {
            return `${automobile.marca} ha più chilometri di ${this.marca}`;
        } else {
            return `${this.marca} e ${automobile.marca} hanno lo stesso chilometraggio`;
        }
    }
    #Contatore() {
        if (this.chilometraggio > 100000) {
            return 'Attenzione: Chilometraggio elevato!';
        } else {
            return 'Chilometraggio nella norma.';
        }
    }
    #incrementocontatore() {
        this.chilometraggio++;
        return `Chilometraggio incrementato: ${this.chilometraggio} km`;
    }
    aggiungiChilometri(km) {
        this.chilometraggio += km;
        console.log(`Chilometraggio attuale: ${this.chilometraggio} km`);
        return this.#incrementocontatore();
    }
    mostracontatorechiamata() {
        return this.aggiungiChilometri();
    }
}
const Auto1 = new Automobile('Fiat', 'Panda', 2015);
console.log(Auto1.description());
class camion extends Automobile {
    constructor(marca, modello, anno, carico, caricoMassimo) {
        super(marca, modello, anno);
        this.carico = carico;
        this.caricoMassimo = caricoMassimo;
    }
    caricoMassimo() {
        return `Carico massimo: ${this.caricoMassimo} kg`;
    }
    description() {
        return `Camion - ${super.description()}, Carico: ${this.carico} kg, ${this.caricoMassimo()}`;
    }
    carica(kg) {
        if (this.carico + kg <= this.caricoMassimo) {
            this.carico += kg;
            console.log(`Carico attuale: ${this.carico} kg`);
        } else {
            console.log(`Carico massimo superato! Non puoi caricare più di ${this.caricoMassimo} kg.`);
        }
    }
}
const camion1 = new camion('Mercedes', 'Actros', 2020, 5000, 10000);
console.log(camion1.description());
// sottoclasse elettrica\\
class AutomobileElettrica extends Automobile {
    constructor(marca, modello, anno, autonomia) {
        super(marca, modello, anno);
        this.autonomia = autonomia;
    }
    mostraAutonomia() {
        return `Autonomia: ${this.autonomia} km`;
    }
}

const Numeri = [1, 2, 3, 4, 5];
console.log(primo);
constsecondo = Numeri[1];
console.log(secondo);
const [primo, , terzo] = Numeri;
console.log(primo, terzo);
const [primo2, secondo, terzo2, quarto, quinto, sesto, settimo] = Numeri;
console.log(primo2, secondo, terzo2, quarto, quinto, sesto, settimo);
const user = {
    names: 'Yuri',
    age: 30,
    job: 'Developer',
}
const { names, age, job, city: roma } = user;
const musica = {
    titolo: 'Bohemian Rhapsody',
    artista: 'Queen',
    anno: 1975,
}
const titolo = musica.titolo;
const artista = musica.artista;
console.log(artista, titolo);
const Numbers2 = [1, 2, 3, 4, 5];
const numbers3 = [...Numbers2,];
// Esempio di spread operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);
const oggetto1 = {
    elettronica: 'Telefono',
    marca: 'Apple',
    modello: 'iPhone 13',
};
elettronica = {
    ...oggetto1,
    prezzo: 999,
    disponibilità: 'Disponibile',
};
console.log(elettronica);

const oggetto2 = {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 30,
    indirizzo: {
        via: 'Via Roma',
        città: 'Roma',
    },
};
const jobs = { jobs: developer, titolo: 'Sviluppatore', };
console.log(jobs);
function somma(...numeri) {
    return numeri.reduce((acc, curr) => acc + curr, 0);
}
console.log(somma(1, 2, 3));
console.log(somma(10, 20));
console.log(somma(5, 15, 25, 35));
//destructuring array con rest operator\\
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);

// Destructuring oggetto con rest operator\\
const { nome, citta, eta, ...resto } = oggetto2;
console.log(nome);
console.log(resto);
//conversione di un oggetto in json \\
const obj = { name: 'Yuri', age: 30, city: 'Roma' };
const jsonString = JSON.stringify(obj);
console.log(jsonString);
// conversione di un json in oggetto \\
const json = '{"name": "Yuri", "age": 30, "city": "Roma"}';
const parsedObj = JSON.parse(json);
console.log(parsedObj);
//manipolazione di dati json \\
const jsonData = '{"name": "Yuri", "age": 30, "city": "Roma"}';
const data = JSON.parse(jsonData);
data.age = 31;
const updatedJsonData = JSON.stringify(data);
// stringa semplice con template literals \\
const nomeUtente = 'Yuri Pirrone';
let nomeee = 'mario rossi';
const combinazione = `${nomeUtente} ${nomeee}`;
console.log(combinazione);
// stringa multilinea con template literals \\
const nomes = 'Mario';
const cognome = 'Rossi';
const infoPersona = `
Informazioni sulla persona:
Nome: ${nome}
Cognome: ${cognome}
Età: 30
Città: Milano
Professione: Sviluppatore
`;
console.log(infoPersona);
//funxioni e template literals \\
function formattaPersona(persona) {
    return `Nome: ${persona.nome}, Cognome: ${persona.cognome}, Età: ${persona.age}, Città: ${persona.city}`;
}
const personaEsempio = {
    nome: 'Mario',
    cognome: 'Rossi',
    age: 30,
    city: 'Roma'
};
console.log(formattaPersona(personaEsempio));
//utilizzare console.log\\
// Esempio di stampa di diversi tipi di dati con console.log
let numeros = 42;
let testo = "Ciao mondo";
let booleano = true;
let arrays = [1, 2, 3];
let oggetto = { nome: "Mario", eta: 30 };
let nullo = null;
let indefinito;
console.log(numero);
console.log(testo);
console.log(booleano);
console.log(array);
//utilizzare console.error e console.warn\\
console.error("Si è verificato un errore!");
console.warn("Attenzione: questo è un avviso!");
// Utilizzo di console.table e console.group\\
const persone = [
    { nome: "Mario", eta: 30 },
    { nome: "Luigi", eta: 25 }, 
    { nome: "Peach", eta: 28 }
];
console.table(persone);
console.group("Dettagli Persona");
//utilizza setTimeout \\
setTimeout(() => {
    console.log("Questo messaggio appare dopo 3 secondi");
}, 2000);
//utilizza setInterval \\
setInterval(() => {
    console.log("Questo messaggio appare ogni 2 secondi");
}, 2000);
// interrompere setInterval con clearInterval \\
let intervalId = setInterval(() => {
    console.log("Questo messaggio appare ogni 2 secondi");
}, 2000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Intervallo fermato dopo 10 secondi");
}, 10000);
// gestione di un errore semplice\\
try {
    let result = 10 / 0;
    if (!isFinite(result)) {
        throw new Error("Divisione per zero non consentita");
    }
} catch (error) {
    console.error("Si è verificato un errore:", error.message);
}     
// gestione di piu tipi di errori\\
const myString = 12345;  

try {
  
  if (typeof myString !== 'string') {
    throw new TypeError('La variabile non è una stringa!');
  }
  const upper = myString.toUpperCase();
  console.log('Stringa trasformata:', upper);
} catch (error) {
  if (error instanceof TypeError) {
    console.error('Errore di tipo:', error.message);
  } else {
    console.error('Errore generico:', error.message);
  }
}

// uso di finally per eseguire codice indipendente dal risulatato\\
try {
    let result = 10 / 0;
    if (!isFinite(result)) {
        throw new Error("Divisione per zero non consentita");
    }
} catch (error) {
    console.error("Si è verificato un errore:", error.message);
}
finally {
    console.log("Questo codice viene eseguito sempre, indipendentemente dagli errori");
}
//funzione di base callback\\
function sommaConCallback(a, b, callback) {
  const risultato = a + b;
  console.log("Risultato della somma:", risultato);
  if (typeof callback === "function") {
    callback(risultato); 
  } else {
    console.error("Il callback fornito non è una funzione.");
  }
}
function stampaMessaggio(risultato) {
  console.log("Callback eseguito. Il risultato ricevuto è:", risultato);
}
sommaConCallback(5, 3, stampaMessaggio);
//funzione con callback e passaggio di parametri\\
function eseguiOperazione(a, b, callback) {
  const risultato = a * b;
  console.log("Operazione completata. Risultato:", risultato);
  if (typeof callback === 'function') {
    callback(risultato);
  } else {
    console.error("Errore: il callback non è una funzione.");
  }
}
function mostraRisultato(valore) {
  console.log("Callback ricevuto. Il risultato è:", valore);
}
eseguiOperazione(6, 7, mostraRisultato);
//callback annidati\\
// Prima funzione: esegue un'operazione e poi chiama la callback
function primaOperazione(numero, callback) {
  console.log("Prima operazione: moltiplico per 2");
  let risultato = numero * 2;

  // richiamo la callback passando il risultato
  callback(risultato);
}

// Seconda funzione: esegue un'operazione e poi chiama la callback
function secondaOperazione(numero, callback) {
  console.log("Seconda operazione: sommo 5");
  let risultato = numero + 5;
  callback(risultato);
}
primaOperazione(10, function(risultato1) {
  secondaOperazione(risultato1, function(risultato2) {
    console.log("Risultato finale:", risultato2);
  });
});
// creara una promessa semplice\\
function delayedMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("La promessa è stata risolta dopo 2 secondi!");
    }, 2000);
  });
}
delayedMessage().then(message => {
  console.log(message);
});
//gestone di una promesssa con catch\\
function delayedMessageWithError(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject("Si è verificato un errore nella promessa!");
      } else {
        resolve("La promessa è stata risolta dopo 2 secondi!");
      }
    }, 2000);
  });
}
delayedMessageWithError(false)
  .then(message => console.log(message))
  .catch(error => console.error("Errore:", error));
delayedMessageWithError(true)
  .then(message => console.log(message))
  .catch(error => console.error("Errore:", error));
// promessa finally\\
function processTask(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject("La promessa è stata rifiutata!");
      } else {
        resolve("La promessa è stata risolta!");
      }
    }, 2000);
  });
}
processTask(false)
  .then(result => console.log("Successo:", result))
  .catch(error => console.error("Errore:", error))
  .finally(() => console.log("Operazione completata, indipendentemente dal risultato."));
processTask(true)
  .then(result => console.log("Successo:", result))
  .catch(error => console.error("Errore:", error))
  .finally(() => console.log("Operazione completata, indipendentemente dal risultato."));
// catena di promesse semplici\\
function nuumeroDopo1Secondi(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(5);
            
        },1000);
    })
}
nuumeroDopo1Secondi()
.then((numero)=>{
    return nuum* 2;
})
,then((num)=>{
    return nuum + 3;
})
,then((risultato)=>{
    console.log("Risultato finale:", risultato);
}
)   
//catena di promesse con condizioni\\
function numeroDopo1Secondo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const numero = Math.floor(Math.random() * 100); // numero casuale tra 0 e 99
      resolve(numero);
    }, 1000);
  });
}

numeroDopo1Secondo()
  .then((num) => {
    console.log("Numero generato:", num);
    if (num % 2 === 0) {
      return num * 2; // se è pari lo moltiplichiamo per 2
    } else {
      return num + 5; // se è dispari aggiungiamo 5
    }
  })
  .then((risultato) => {
    console.log("Risultato finale:", risultato);
  });
// catena di promesse con gestione degli errori\\
function promessaCasuale() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numero = Math.floor(Math.random() * 10); // numero da 0 a 9
      if (numero > 4) {
        resolve(numero); // successo se numero > 4
      } else {
        reject("Errore: numero troppo basso (" + numero + ")");
      }
    }, 1000);
  });
}

promessaCasuale()
  .then((num) => {
    console.log("Promessa risolta con:", num);
    return num * 2; // manipolazione del risultato
  })
  .then((numDoppio) => {
    console.log("Dopo la manipolazione:", numDoppio);
  })
  .catch((errore) => {
    console.error("Promessa rifiutata:", errore);
  });
