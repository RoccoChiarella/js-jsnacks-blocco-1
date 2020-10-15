var prima = prompt('Inserisci la prima parola');

console.log(prima.length);

var seconda = prompt('Inserisci la seconda parola');

console.log(seconda.length);

if (prima.length == seconda.length) {
    document.getElementById('corta').innerHTML = "hanno la stessa lunghezza";
    document.getElementById('lunga').innerHTML = "hanno la stessa lunghezza";
} else if (prima.length > seconda.length) {
    document.getElementById('lunga').innerHTML = prima;
    document.getElementById('corta').innerHTML = seconda;
} else {
    document.getElementById('corta').innerHTML = prima;
    document.getElementById('lunga').innerHTML = seconda;
}
