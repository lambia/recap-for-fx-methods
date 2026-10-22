const numeri = [18, 2, 78, 19, 55];

const ultimoIndice = numeri.length - 1; // 4

let risultati = [];

// Filtro manualmente con ciclo for
// for (let indice = 0; indice <= ultimoIndice; indice++) {

//     const questoNumero = numeri[indice];

//     if (isBiggerThan50(questoNumero)) {
//         risultati.push(questoNumero);
//     }

// }

// Filter con sintassi vecchia scuola
// risultati = numeri.filter( function(questoNumero) {
//     if (questoNumero > 50) {
//         return true;
//     } else {
//         return false;
//     }
// } );

// Filter con arrow function
// risultati = numeri.filter(questoNumero => {
//     if (questoNumero > 50) {
//         return true;
//     } else {
//         return false;
//     }
// });

// Filter con arrow function e return implicito
// risultati = numeri.filter(questoNumero => questoNumero > 50);

// Filter con funzione nominata (esterna)
risultati = numeri.filter(isBiggerThan50);

console.log("Numeri trovati: ", risultati);





function isBiggerThan50(numeroPassato) {

    // console.log(`Controllo: ${numeroPassato}`);

    if (numeroPassato > 50) {
        // console.log(`${numeroPassato} è maggiore di 50!`);
        return true;
    } else {
        // console.log(`${numeroPassato} NON è maggiore di 50!`);
        return false;
    }
}