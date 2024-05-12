Calcolo del prezzo del biglietto del treno (js-biglietto-treno-form)


> Descrizione:
>  Scrivere un programma che chieda all’utente:

    Il numero di chilometri da percorrere
    Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
    il prezzo del biglietto è definito in base ai km (0.267113 € al km)
    va applicato uno sconto del 24.552% per gli under 21
    va applicato uno sconto del 37.893% per gli over 63.
> MILESTONE 1:
> Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
> La risposta finale (o output) sarà anch’essa da scrivere in console.
> MILESTONE 2:
> Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
> Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

> Svolgimento:

 - calcolo prezzo biglietto con e senza sconto (stampando valori e risultati in console e in pagina)
 1) Realizzo righe per chiedere all'utente i km da percorrere e stampare in console i dati
 2) -------- ----- --- -------- -- ------- la sua età e stampare in console i dati
 3) -------- ----- --- calcolare il prezzo totale del biglietto senza alcuno sconto e stampare in console i risultati 
 4) -------- ----- --- --------- lo sconto in base all età e stampare in console i risultati
 5) -------- ----- --- --------- il prezzo totale del biglietto (con lo sconto) e stampare in console i risultati
 6) -------- ----- --- creare la funzione per prendere i dati con imput
 7) -------- ----- --- ------ -- -------- --- elaborare i dati con il click del button
 8) -------- ----- --- ------ -- -------- --- per stampare i risultati nell'html
 9) -------- ----- --- ------ -- -------- --- il funzionamento del bottone per il reset dei dati
