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


const firstWord = prompt('Scrivi una parola')
const secondWord = prompt('Scrivi un altra parola')


if (firstWord.length > secondWord.length) {
    console.log(firstWord);
    
} else if (secondWord.length > firstWord.length) {
    console.log(secondWord);
    
} else {
    console.log('La lunghezza dei caratteri è uguale');
    
}