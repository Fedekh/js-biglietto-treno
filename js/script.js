// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
//  Questo richiederà un minimo di ricerca
// Bonus:
// Aggiungete dei controlli sull'input del utente



//Spiegazione: il mio target è, non usando cicli while-do, che il primo input da inserire è la distanza espressa in km e che non sia quindi 
// ne negativa ne non numerica, e "ripetere 1 sola volta" l'inserimento se si sbaglia; e OK
// secondo input da inserire è l'età, espressa in numeri, ho dato un range valido, da 12 anni fino a 99, inoltre da 12(compreso) a 18(escluso)
// considerato minorenne, da 65(compreso) a 99(compreso) senior-over, e la fascia intermedia gli adulti full price.
//Ho voluto tassativamente, e ho perso troppo tempo, che finche non si mette un valore adeguato di distanza, non si chieda il secondo input. OK
//Se si sbaglia, si richiede di re inserirla per bene. Poi si passa all'età, anche qui, se non si mette un numero compreso tra 12 e 99 , lo
//script te lo richiede (solo una volta senza cicli).
//poi ho fatto le prove per attivare i bonus sul controllo degli input. CIOE: se inserivo male la prima volta i km e male la prima volta l'età
//anche re-inserendo i giusti valori subito dopo FINALPRICE NON compariva. Mentre se inserivo male la prima volta i km e bene la prima volta l'età, FINALPRICE
//compariva, SE inserivo bene la prima volta i km e male la prima volta l'età, FINALPRICE NON compariva, MENTRe inserendo bene al primo colpo
//gli input FINALPRICE compariva bene. Ho provato a creare un IF padre e un grande IF figlio, ma niente, mille prove. Poi ho solo aggiunto
// RIGA 53 la Re inizializzazione della variabile FINALPRICE dopo ogni controllo sull input dell'età, nonstante sia stata dichiarata a livello globale
//quindi settata a 0 di default in quel caso riga 30. Ancora non capisco perche funziona, mi piacerebbe ricevere feedback, grazie per l'attenzione
        

// INPUT
    
    let finalPrice = 0;       
    let dist = parseInt ( prompt ("Inserisca gentilmente anche la distanza che vuole percorrere in km, grazie")) ;
    


// LOGICA
    
    if (isNaN(dist) || dist < 0) {
        alert ('Per favore inserisci valore distanza adeguato in km');
        dist = parseInt (prompt ("Buongiorno, inserisca gentilmente la distanza che vuole percorrere in km, grazie")); 
        console.log(dist); 
             
           
    } 
        
        
    let ageUser = parseInt( prompt ("Buongiorno, inserisca gentilmente la sua età")); 
    if  (isNaN(ageUser)) {
        alert('Per favore inserisci un\'età valida, compresa tra 12 e 99 anni');
        ageUser = parseInt(prompt("Buongiorno, inserisca gentilmente la sua età"));
        console.log(ageUser); 
        
    } else
            finalPrice=0;
         if (ageUser >= 12 && ageUser < 18) {        
            finalPrice = dist * 0.21 * 0.8;       
            console.log(ageUser, dist, typeof ageUser, typeof dist); 
            console.log(`il prezzo riservato è ${finalPrice.toFixed(2)}`);
            document.getElementById('rac').innerHTML = `Sarebbe meglio che viaggiassi accompagnato da un genitore`;         
         } else if (ageUser >= 65 && ageUser <= 99) {
            finalPrice = dist * 0.21 * 0.6;
            console.log(ageUser, dist, typeof ageUser, typeof dist); 
            console.log(`il prezzo riservato è ${finalPrice.toFixed(2)}`);       
         } else {
            finalPrice = dist * 0.21;
            console.log(ageUser, dist, typeof ageUser, typeof dist); 
            console.log(`il prezzo riservato è ${finalPrice.toFixed(2)}`);
        
        }
    
        
        // OUTPUT
        // Stampare sia su terminale che in html il prezzo finale
        
        document.getElementById('price').innerHTML = `Il prezzo riservato a Lei è di ${finalPrice.toFixed(2)} €`;
        
        
    





    