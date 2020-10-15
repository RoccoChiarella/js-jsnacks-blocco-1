var numeri = [];

var somma = 0;

for (var i = 0; i < 5; i++) {
    numeri[i] = parseInt(prompt("Inserisci il " + (i + 1)  + "° numero"));
    somma = somma + numeri[i];
}

document.getElementById('somma').innerHTML = somma;
