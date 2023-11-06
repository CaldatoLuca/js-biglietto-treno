"use strict";

//* Inserimento dei dati da parte dell' utente
//* Trasformazione dei dati inseriti da stringhe a numeri con parseInt()
const km = parseInt(prompt("Quanti Km devi percorrere?"));
console.log("Km: " + km);

const age = parseInt(prompt("Inesrisci qui la tua età"));
console.log("Età: " + age);

const prova = km + age;
console.log(prova);
