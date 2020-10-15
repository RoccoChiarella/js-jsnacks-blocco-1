var numeri = [];

var N = prompt("Di quanti numeri devo fare il cubo?");

for (var i = 0; i < N; i++) {
    numeri[i] = (i + 1) ** 3;
    document.getElementById('cubi').innerHTML = '<span id="cubo'+ (i+1) +'">'+ numeri[i] +' </span>';
}
