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

// ("use strict");
// // ! number, ci da un numero (anche decimale) invece di una stringa ma da NaN se utente usa lettere nel prompt
// const kmRichiesti = Number(prompt("Quanti Km devi percorrere?"));
// const etaPasseggiero = Number(prompt("Inesrisci qui la tua età"));
// const prezzoKm = 0.21;
// const percentualeScontoMinorenni = 20;
// const percentualeScontoOver65 = 40;
// // ! mettere tra graffe la variablile migliora il console.log
// console.log({ kmRichiesti });
// console.log({ etaPasseggiero });

// // ! not isNas (quando è un numero faccio if, altrimenti else)
// // ! uso negazione cosi programma principale sta su if
// // ! isNan = è un Nan?
// // ! !isNan = non è un Nan? quindi è un numero
// if (!isNaN(kmRichiesti) && !isNaN(etaPasseggiero)) {
//   let prezzoBiglietto = kmRichiesti * prezzoKm;
//   let scontoBiglietto = 0;

//   if (etaPasseggiero < 18) {
//     scontoBiglietto = (prezzoBiglietto / 100) * percentualeScontoMinorenni;
//   } else if (etaPasseggiero >= 65) {
//     scontoBiglietto = (prezzoBiglietto / 100) * percentualeScontoOver65;
//   }

//   prezzoBiglietto -= scontoBiglietto;
//   console.log("Il prezzo del biglietto è: " + prezzoBiglietto.toFixed(2));
// } else {
//   console.log("Errore");
// }
