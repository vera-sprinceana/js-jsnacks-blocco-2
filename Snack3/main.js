//Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari
let array=[1, 14, 17, 12, 9, 6, 11, 30, 26, 43];
console.log(array);
somma=0;
for(let i=0; i<array.length; i++){
    if( i %2==0){
    somma+=array[i];
}    
}
console.log(somma)