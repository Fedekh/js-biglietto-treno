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

    
    let finalPrice = "";       
    let dist = parseInt ( prompt ("Inserisca gentilmente anche la distanza che vuole percorrere in km, grazie")) ;

// LOGICA
    
    if (isNaN(dist)) {
        alert ('Per favore inserisci valore distanza adeguato in km');
        let dist = parseInt (prompt ("Buongiorno, inserisca gentilmente la distanza che vuole percorrere in km, grazie"));        
        let ageUser = parseInt( prompt ("Buongiorno, inserisca gentilmente la sua età"));
        console.log(ageUser, dist, typeof ageUser, typeof dist); //voglio essere sicuro che sia un valore numerico e non stringa 
        
        if  (isNaN(ageUser)) {
            alert('Per favore inserisci un\'età valida, compresa tra 12 e 99 anni');
            let ageUser = parseInt(prompt("Buongiorno, inserisca gentilmente la sua età"));
            
        } else if (ageUser > 12 && ageUser < 18) {        
            finalPrice = dist * 0.21 * 0.8;       
            console.log(finalPrice.toFixed(2));
            document.getElementById('rac').innerHTML = `Sarebbe meglio che viaggiassi accompagnato da un genitore`; 
            
        } else if (ageUser >= 65 && ageUser <= 99) {
            finalPrice = dist * 0.21 * 0.6;
            console.log(finalPrice.toFixed(2));
            
        } else {
            finalPrice = dist * 0.21;
            console.log(finalPrice.toFixed(2));
        }
        document.getElementById('price').innerHTML = `Il prezzo riservato a Lei è di ${finalPrice.toFixed(2)} €`;

    } 
    

            
    

        
    // OUTPUT
    // Stampare sia su terminale che in html il prezzo finale
            





    