var numeri = [];

var somma = 0;

for (var i = 0; i < 5; i++) {
    var numeri[i] = prompt("Inserisci il " + i + "° numero");
    somma = somma + numeri[i];
}

document.getElementById('somma').innerHTML = somma;
