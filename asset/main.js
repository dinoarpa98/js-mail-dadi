// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let email = [ "pincopallo@outlook.com" , "giuseppeff@gmail.it" ];
let getemail = prompt("Inserisci la tua E-mail");


for( i=0; i < email.length; i++ ){

  if ( email[i] == getemail ){
      document.getElementById("container").innerHTML = `<div> Sei in lista ${email[i]} </div>`;
      console.log("il tuo nome è nella lista!");
  } else if( email[i] != getemail ){
      console.log("il tuo nome non è nella lista!");
      document.getElementById("container").innerHTML = `<div> Non sei in lista </div>`;
  }
}  
