//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
let numero;
let numeroPari=0, numeroDispari=0;
for(i=0; i<1; i++){
    numero=parseInt(prompt("inserisci un numero"));
    if(numero % 2 == 0){
        console.log(numero)
        document.getElementById("numero").innerHTML=`<div>il numero è pari: ${numero} </div>`
    }else{
        numeroDispari+1;
        console.log(numero+1)
        document.getElementById("numero").innerHTML=`<div>il numero è dispari quindi stampa il numero successivo: ${numero+1} </div>`
    }
}
