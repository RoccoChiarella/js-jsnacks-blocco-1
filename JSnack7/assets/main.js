var numeri = [];

var somma = 0;

for (var i = 0; i < 10; i++) {
    numeri[i] = i + 1;
    console.log(numeri[i]);
    somma = somma + numeri [i];
}

console.log(somma);

var media = 0;

media = somma / numeri.length;

console.log(media);
