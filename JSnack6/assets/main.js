var numeri = [];

var x = "";

for (var i = 0; (2 ** (i + 1)) < 1000 ; i++) {
    numeri[i] = 2 ** (i + 1);
    x = x + '<span id="potenza'+ (i+1) +'">'+ numeri[i] +' </span>';
}

document.getElementById('potenze').innerHTML = x;
