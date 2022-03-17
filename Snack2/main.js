//Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi,
 //e da queste vuole generare una falsa lista di invitati con nome e cognome.
 let listaNomi=["Maria", "Teresa", "Angelina", "Robert", "Jamie", "John"];
 let listaCognomi=["Jolie", "Pattinson", "Rosa", "Rossi", "Dornan", "Wick"];

 let listaFalsa=[];
for(let i=0; i<5; i++){
    const numeroNomerandom= Math.floor(Math.random()*(listaNomi.length));
    const numeroCognomirandom= Math.floor(Math.random()*(listaCognomi.length));
    const nomiCognomi=`${listaNomi(numeroNomerandom)}${listaCognomi(numeroCognomirandom)}`;
    console.log(nomiCognomi);
    listaFalsa.push(nomiCognomi);
}
 console.log(listaFalsa);