//Traccica

/*Il software deve chiedere per 10 volte all'utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/

//HUMAN CODE

/*
-chiedo il numero all'utente (prompt)
- lo chiedo per 10 volte (ciclo)
-sommo i numeri dell'utente per tutte tutte le voleteche gli ho chiesto di inserire i numeri(prompt)
-stampo il risultato

*/



let userNumber;
//chiedo il numero all'utente (prompt)
for( let i = 0; i < 10; i++) {
let userNumber = parseInt(prompt('Scrivi il numero'))

console.log(userNumber);

console.log(userNumber + i);

}


