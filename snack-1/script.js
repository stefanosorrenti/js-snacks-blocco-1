//Traccia 
/*L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/


//HUMAN CODE


/*

-chiedo il primo numero (prompt)
-chiedo il secondo numero (prompt)
-SE IL primo numero è più grande del secondo
    -stampo il numero più grande

ALTRIMENTI SE il primo numero è più piccolo del secondo
    -stampo il numero più grande

ALTRIMENTI
    -stampa 'sono uguali'
*/

//chiedo il primo numero
const firstNumber = prompt('Digita un numero')
//(structure)
console.log(`Questo è il primo numero ${firstNumber}`);


//chiedo il secondo numero
const secondNumber = prompt('Digita un altro numero')
//(structure)
console.log(`Questo è il secondo numero ${secondNumber}`);

//SE IL primo numero è più grande del secondo
if (firstNumber > secondNumber) {
    console.log(`Questo è il numero più grande ${firstNumber}`); //stampo il numero più grande

//ALTRIMENTI SE il primo numero è più piccolo del secondo
} else if(firstNumber < secondNumber) {
    console.log(`Questo è il numero più grande ${secondNumber}`); //stampo il numero più grande 
    
//ALTRIMENTI   
} else {
    console.log('Sono uguali');  //stampa 'sono uguali'
    
}

