console.log('Elaborazione......')

// traccia

// Calcolo del prezzo del biglietto del treno (js-biglietto-treno-form)


// > Descrizione:
// >  Scrivere un programma che chieda all’utente:

//     Il numero di chilometri da percorrere
//     Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//     il prezzo del biglietto è definito in base ai km (0.267113 € al km)
//     va applicato uno sconto del 24.552% per gli under 21
//     va applicato uno sconto del 37.893% per gli over 63.
// > MILESTONE 1:
// > Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
// > La risposta finale (o output) sarà anch’essa da scrivere in console.
// > MILESTONE 2:
// > Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// > Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).


// Start - test calcolo prezzo biglietto con e senza sconto

    // Richiesta del numero di chilometri da percorrere

    // let userKm = parseInt(prompt('Distanza da percorrere(km)'))

    // if (isNaN(userKm)){
    //     console.log('Errore: Per favore inserisci dati numerici')
    // } else {
    //     console.log('Distanza da percorrere: ' + userKm.toFixed(1) + 'km')
    // }

    // // prezzo del biglietto in base ai km

    // const priceForKm = 0.267113;

    // // Richiesta Età del passeggero

    // // let userAge = parseInt(prompt('Età del passeggero'))

    // if (isNaN(userAge)){
    //     console.log('Errore: Per favore inserisci dati numerici')
    // } else {
    //     console.log('Eta utente: ' + userAge)
    // }

    // // Elaborazione prezzo totale del biglietto (senza sconto)

    // let price = (priceForKm * userKm)

    // console.log('Prezzo: ' + price.toFixed(2))

    // // Calcolo lo sconto in base all età

    // let discount = 0;

    // if(userAge <= 21){
    //     discount = 24.552;
    // } else if(userAge >= 63){
    //     discount = 37.893
    // }

    // console.log('Sconto: ' + discount.toFixed(0) + '%')

    // // Elaborazione prezzo totale del biglietto (con lo sconto)

    // const discountedPrice = (price - ((discount / 100) * price))
    // console.log('Prezzo scontato: ' + ' ' + discountedPrice.toFixed(2) + '€')

// end - test calcolo prezzo biglietto con e senza sconto

// funzione per prendere i dati con imput

button = document.getElementById('calculate')

button.addEventListener('click', function(){
    userKm = parseInt(document.getElementById('distance-km').value)

    if (isNaN(userKm)){
        console.log('Errore: Per favore inserisci dati numerici')
        document.getElementById('user-km').innerText = 'Errore: valore errato';
    } else {
        console.log('Distanza da percorrere: ' + userKm.toFixed(1) + 'km')
        document.getElementById('user-km').innerText = 'Distanza da percorrere: ' + userKm.toFixed(1) + 'km';
    }

    userAge = document.getElementById('age').value;

    if (isNaN(userAge)){
        console.log('Errore: Per favore inserisci dati numerici')
        document.getElementById('user-age').innerText = 'Errore: valore errato';
    } else {
        console.log('Eta utente: ' + userAge)
        document.getElementById('user-age').innerText = 'Eta utente: ' + userAge;
    }

    let discount = 0;

    if(userAge <= 21){
        discount = 24.552;
        console.log('Sconto under 21: ' + discount + '%')
        document.getElementById('discount').innerText = 'Under 21: ' + discount + '%';
    } else if(userAge >= 63){
        discount = 37.893
        console.log('Sconto Over 63: ' + discount + '%')
        document.getElementById('discount').innerText = 'Over 63: ' + discount + '%';
    } else {
        console.log('Prezzo Intero')
        document.getElementById('discount').innerText = 'Prezzo Intero';
    }

    const priceForKm = 0.267113;
    let price = (priceForKm * userKm)
    const finalPrice = (price - ((discount / 100) * price))
    console.log('Prezzo Finale: ' + ' ' + finalPrice.toFixed(2) + '€')
    document.getElementById('final-price').innerText = 'Prezzo Finale: ' + ' ' + finalPrice.toFixed(2) + '€';
    
})

// botton reset

resetButton = document.getElementById('reset')

resetButton.addEventListener('click', function(){
    document.getElementById('distance-km').value = '';
    document.getElementById('user-km').innerText = '';
    document.getElementById('age').value = '';
    document.getElementById('user-age').innerText = '';
    document.getElementById('discount').innerText = '';
    document.getElementById('final-price').innerText = '';
});