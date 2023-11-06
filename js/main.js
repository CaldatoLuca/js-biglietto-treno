"use strict";

//* Inserimento dei dati da parte dell' utente
//* Trasformazione dei dati inseriti da stringhe a numeri con parseInt()
const km = parseInt(prompt("Quanti Km devi percorrere?"));
console.log("Km: " + km);

const age = parseInt(prompt("Inesrisci qui la tua età"));
console.log("Età: " + age);

const price = 0.21 * km;
console.log("Prezzo base del biglietto: " + price);

let discount = 0;

const discountPrice = price - (price * discount) / 100;

if (age < 18) {
  discount = 20;
  const discountPrice = price - (price * discount) / 100;
  console.log("Il prezzo del biglietto è: " + discountPrice);
} else if (age > 65) {
  discount = 40;
  const discountPrice = price - (price * discount) / 100;
  console.log("Il prezzo del biglietto è: " + discountPrice);
}
