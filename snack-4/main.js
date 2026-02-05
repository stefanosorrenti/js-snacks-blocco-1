//TRACCIA

/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/


/*Cosa devo fare?


-creo un array vuoto (ARRAY)
-chiedo per 6 volte un numero di inserire un numero

    -SE IL NUEMERO è  CHIESTO  è DISPARI (%)
        -PUSHO NELL'ARRAY (PUSH)
    -ALTRIMENTI
        -RIMUOVO IL NUMERO DIGITATO DALL'UTENTE



*/

 let oddNumbers = [] //creo un array vuoto (ARRAY)

 for (i = 0; i < 6; i++) {
    const usersNumbers = parseInt(prompt('Scrivi il tuo numero.')) //chiedo per 6 volte un numero di inserire un numero

    if (usersNumbers % 2 === 1) { //SE IL NUEMERO è  CHIESTO  è DISPARI 
        oddNumbers.push(usersNumbers) //PUSHO NELL'ARRAY 
        
    
 }else { //ALTRIMENTI
    oddNumbers.splice(usersNumbers, 1) //RIMUOVO IL NUMERO DIGITATO DALL'UTENTE
 }

}

console.log(oddNumbers);
 

/*
for (let index = 0; index < usersNumbers.length; index++) {
    const oddNumbers = usersNumbers[index];
    if (oddNumbers % 2 === 1) {
        usersNumbers.push(index)
        break
    }
}
*/