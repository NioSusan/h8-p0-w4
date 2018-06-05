/* 
An integer is prime if it is not divisible by any prime less than or equal to its square root.
*/
function angkaPrima(angka) {
    if (angka < 2) return false;

    var q = Math.floor(Math.sqrt(angka));

    for (var i = 2; i <= q; i++){
        if (angka % i === 0){
            return false;
        }
    }

    return true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false


/* Solution for getting the primes :
function angkaPrima(angka) {
    var filtered = [];
    var primes = [];
    for (var i = 2; i <= angka; ++i) {
        if (!filtered[i]) {
            primes.push(i);
         for (var j = i << 1; j <= angka; j += i) {
            filtered[j] = true;
         }
        }
    }
    return primes;
}

// TEST CASES
console.log(angkaPrima(3)); // [ 2, 3 ]
console.log(angkaPrima(7)); // [ 2, 3, 5, 7 ]
console.log(angkaPrima(6)); // [ 2, 3, 5 ]
console.log(angkaPrima(23)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
console.log(angkaPrima(33)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ]

*/




