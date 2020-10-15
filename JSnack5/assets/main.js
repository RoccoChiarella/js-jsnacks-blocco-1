var numeri = [];

var N = prompt("Di quanti numeri devo fare il cubo?");

var x = "";

for (var i = 0; i < N; i++) {
    numeri[i] = (i + 1) ** 3;
    x = x + '<span id="cubo'+ (i+1) +'">'+ numeri[i] +' </span>';
}

document.getElementById('cubi').innerHTML = x;
