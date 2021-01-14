/* Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che
sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

var randomArray = [];
var i = 0;

while (randomArray.length < 5) {
    /* numero generato */
    var n = randomN(1, 100);
    /* comparazione del numero generato con i numeri presenti */
    if (compare(randomArray, n) == false){
        randomArray.push(n);
    }
}

alert('I numeri da memorizzare sono:\n\n' + randomArray.join(' - '));

console.log(randomArray);

/* funzioni */
function randomN(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function compare(a, b) {
    if (a.includes(b)) {
        return true;
    } else {
        return false;
    }
}