var primo = prompt('Inserisci il primo numero');

var secondo = prompt('Inserisci il secondo numero');

if (primo == secondo) {
    document.getElementById('numeri').innerHTML = "nessuno, sono uguali";
} else if (primo > secondo) {
    document.getElementById('numeri').innerHTML = primo;
} else {
    document.getElementById('numeri').innerHTML = secondo;
}
