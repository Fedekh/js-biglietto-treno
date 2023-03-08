// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
//  Questo richiederà un minimo di ricerca
// Bonus:
// Aggiungete dei controlli sull'input del utente




// INPUT

    // Chiedere all'utente il n. di km da percorrere e l'età

    const ageUser = parseInt( prompt ("Buongiorno, inserisca gentilmente la sua età"));
    
    if (ageUser <= 12 && ageUser > 99) {
        console.log('Per favore inserisci un\'età valida, compresa tra 12 e 99 anni');
        alert('Per favore inserisci un\'età valida, compresa tra 12 e 99 anni');        
    }

    //Chiedere la distanza da percorrere in KM

    const dist = parseInt ( prompt ("Inserisca gentilmente anche la distanza che vuole percorrere, in km grazie")) ;

    console.log(ageUser, dist, typeof ageUser, typeof dist); //voglio essere sicuro che sia un valore numerico e non stringa



// LOGICA

    const message = "";
    let finalPrice = "";

    // Si deve calcolare il prezzo della tratta tenendo conto di un eventuale sconto da applicare sia ai minorenni (<18) che agli over >=65

    if (ageUser > 12 && ageUser < 18) {        
        finalPrice = dist * 0.21 * 0.8;       //Lo sconto riservato ai minorenni posso interpretarlo come l'80% del prezzo pieno
        console.log(finalPrice.toFixed(2)); 

    } else if (ageUser >= 65 && ageUser <= 99) {
        finalPrice = dist * 0.21 * 0.6;
        console.log(finalPrice.toFixed(2));

    } else (ageUser >= 18 && ageUser < 65) {
        finalPrice = dist * 0.21;
        console.log(finalPrice.toFixed(2));
    } 

// OUTPUT
    // Stampare sia su terminale che in html il prezzo finale

    document.getElementById('price').innerHTML = `Il prezzo riservato a Lei è di ${finalPrice}`

    