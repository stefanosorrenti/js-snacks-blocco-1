//Traccia
// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.



/* 

-CHIEDO LA PRIMA PAROLA (PROMPT)
-CHIEDO LA SECONDA PAROLA (PROMPT)
-SE LA PRIMA PAROLA è PIU' LUNGA DELLA PRIMA
    -stampo la prima parola
-ALTRIMENTI SE LA SECONDA PAROLA è PIU' LUNGA DELLA PRIMA
    -stampo la seconda parola

-ALTRIMENTI
    -stampo (La lunghrzza della parola è uguale)


*/

//CHIEDO LA PRIMA PAROLA (PROMPT)
const firstWord = prompt('Scrivi una parola');
//structure
console.log(`Questa è la prima parola: ${firstWord}`);


//CHIEDO LA SECONDA PAROLA (PROMPT)
const secondWord = prompt('Scrivi un altra parola');
//structure
console.log(`Questa è la seconda parola: ${secondWord}`);

//SE LA PRIMA PAROLA è PIU' LUNGA DELLA PRIMA
if (firstWord.length > secondWord.length) {
    console.log(`Questa è la parola più lunga:  ${firstWord}`); //stampo la prima parola
 //ALTRIMENTI SE LA SECONDA PAROLA è PIU' LUNGA DELLA PRIMA   
} else if (secondWord.length > firstWord.length) {
    console.log(`Questa è la parola più lunga:  ${secondWord}`); //stampo la seconda parola
//ALTRIMENTI
} else {
    console.log('La lunghezza dei caratteri è uguale'); //stampo (La lunghrzza della parola è uguale)
    
}