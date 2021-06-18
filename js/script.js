// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

const numeriCompresi = (array,min,max) => {
    const newArrey = array.filter((element,index) => {
        if (index >= min && index <= max) {           
            return element ;
        }
    });
    return newArrey;
}
console.log(numeriCompresi([1,2,3,4,5,6,7,8,9],3,5));

