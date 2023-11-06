"use strict";

const km = parseInt(prompt("Quanti Km devi percorrere?"));
console.log("Km: " + km);

const age = parseInt(prompt("Inesrisci qui la tua età"));
console.log("Età: " + age);

const price = parseFloat(0.21 * km).toFixed(2);
console.log("Prezzo base del biglietto: " + price);

let discount = 0;

const discountPrice = parseFloat(price - (price * discount) / 100).toFixed(2);

if (age < 18) {
  discount = 20;
  const discountPrice = parseFloat(price - (price * discount) / 100).toFixed(2);
  console.log(
    "Il prezzo del biglietto è: " +
      discountPrice +
      " - applicato lo sconto 20% per minorenni"
  );
} else if (age > 65) {
  discount = 40;
  const discountPrice = parseFloat(price - (price * discount) / 100).toFixed(2);
  console.log(
    "Il prezzo del biglietto è: " +
      discountPrice +
      " - applicato lo sconto 40% per anziani"
  );
} else {
  console.log(
    "Il prezzo del biglietto è: " +
      discountPrice +
      " - nessuna scontistica applicata"
  );
}
