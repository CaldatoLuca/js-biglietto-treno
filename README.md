# Biglietto del Treno

_HTML+js_

## Indice

- [Scomposizone del problema](#scomposizione-del-problema)
- [Soluzione](#soluzione)

### Scomposizione del problema

1. Chiedere all' utente il numero di Km da percorrere
2. Chiedere all' utente la sua età
3. Calcolare il prezzo del biglietto (0.21 \* Km)
4. Applicare lo sconto in base alle statistiche
   - se età < 18 applicare 20% di sconto
   - se età > 65 applicare 40% di sconto
   - altrimenti stampare il prezzo base

5) Stampare il prezzo, con massimo due cifre decimali

NB

Trasformare le informazioni date dall' utente in numeri (quello che viene scritto nel prompt è una stringa)

Usare console.log a ogni passaggio per tenere traccia del valore delle variabili

### Soluzione

1.  Chiedere all' utente il numero di Km da percorrere

    ```js
    const km = parseInt(prompt("Quanti Km devi percorrere?"));
    console.log("Km: " + km);
    ```

2.  Chiedere all' utente la sua età

    ```js
    const age = parseInt(prompt("Inesrisci qui la tua età"));
    console.log("Età: " + age);
    ```

3.  Calcolare il prezzo del biglietto (0.21 \* Km)

    ```js
    const price = parseFloat(0.21 * km).toFixed(2);
    console.log("Prezzo base del biglietto: " + price);
    ```

4.  Applicare lo sconto in base alle statistiche

    - se età < 18 applicare 20% di sconto

    ```js
    if (age < 18) {
    discount = 20;
    const discountPrice = parseFloat(price - (price \* discount) / 100).toFixed(2);
    console.log(
    "Il prezzo del biglietto è: " +
    discountPrice +
    " - applicato lo sconto 20% per minorenni"
    );
    }

    ```

    - se età > 65 applicare 40% di sconto

    ```js
    else if (age > 65) {
      discount = 40;
      const discountPrice = parseFloat(
        price - (price * discount) / 100
      ).toFixed(2);
      console.log(
        "Il prezzo del biglietto è: " +
          discountPrice +
          " - applicato lo sconto 40% per anziani"
      );
    }
    ```

    - altrimenti stampare il prezzo base

    ```js
    else {
      console.log(
        "Il prezzo del biglietto è: " +
          discountPrice +
          " - nessuna scontistica applicata"
      );
    }
    ```

5.  Stampare il prezzo, con massimo due cifre decimali

```js
parseFloat(number).toFixed(2);
```

NB

Trasformare le informazioni date dall' utente in numeri (quello che viene scritto nel prompt è una stringa)

```js
parseInt(valore);
```
