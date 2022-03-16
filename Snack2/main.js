//Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi,
 //e da queste vuole generare una falsa lista di invitati con nome e cognome.
 let listaNomi=["Maria", "Teresa", "Angelina", "Robert", "Jamie", "John"];
 let listaCognomi=["Jolie", "Pattinson", "Rosa", "Rossi", "Dornan", "Wick"];
 let listaFalsa=Math.floor(Math.random()*listaNomi.length)* Math.floor(Math.random()*listaCognomi.length);

 document.write(listaNomi+listaCognomi[listaFalsa]);