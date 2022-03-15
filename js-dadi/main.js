


// DADI

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let dado1 = Math.floor((Math.random() * 6) +1);
let dado2 = Math.floor((Math.random() * 6) +1);

if ( dado1 > dado2 ){
 document.getElementById("container").innerHTML = `<div> <h1> Dado 1 Ha vinto! </h1></div>`;
} else if ( dado2 > dado1) {
  document.getElementById("container").innerHTML = `<div> <h1> Dado 2 Ha vinto! </h1></div>`;
} else{
  document.getElementById("container").innerHTML = `<div> <h1> Pareggio! </h1></div>`;
}
