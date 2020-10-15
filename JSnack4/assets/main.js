var numeri = [];

var numeroDaInserire = 0;

var k = 0;

for (var i = 0; i < 6; i++) {
    numeroDaInserire = parseInt(prompt("Inserisci il " + (i + 1)  + "° numero"));
    if (numeroDaInserire % 2) {
        numeri[k] = numeroDaInserire;
        console.log(numeri[k]);
        k++;
    }
}
