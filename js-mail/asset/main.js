// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// MAIL


 let mail = [ "pincopallo@outlook.com" , "giuseppeff@gmail.it", "giuseppegg@gmail.it" , "pincopallo@outlook.com"];

 let getemail = prompt("Inserisci la tua E-mail");

 let trovata = false;


  for( i=0; i < mail.length; i++ ){

    if (mail[i] == getemail) {
      trovata = true;
    }
  }
   if ( trovata == true ){
       document.getElementById("container").innerHTML = `<div> <h1> Sei in lista </h1></div>`;
  
     } else if ( mail[i] != getemail ){
       document.getElementById("container").innerHTML = `<div> <h1> Non sei in lista </h1> </div>`;
   }
 



