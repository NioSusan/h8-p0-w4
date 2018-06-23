//Solution 1
function angkaPrima(angka) {
    if(angka<=1){
      return false;
    }
    var result=[];
    for(var i=1;i<=angka;i++){
      if(angka%i===0){
        result.push(i);
      }
    }
    if(result.length>2){
      return false;
    }
    return true;
}
  
// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

// Solution 2
//An integer is prime if it is not divisible by any prime less than or equal to its square root.
// function angkaPrima(angka) {
//     if (angka < 2) return false;

//     var q = Math.floor(Math.sqrt(angka));

//     for (var i = 2; i <= q; i++){
//         if (angka % i === 0){
//             return false;
//         }
//     }

//     return true;
// }

//Solution 3 - for getting the primes 
// function angkaPrima(angka) {
//     var filtered = [];
//     var primes = [];
//     for (var i = 2; i <= angka; ++i) {
//         if (!filtered[i]) {
//             primes.push(i);
//          for (var j = i << 1; j <= angka; j += i) { //a << b = a * 2 pangkat b, so i << 1 means i*2 pangkat 1
//             filtered[j] = true;
//          }
//         }
//     }
//     return primes;
// }
/* Output
[ 2, 3 ]
[ 2, 3, 5, 7 ]
[ 2, 3, 5 ]
[ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
[ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ]
*/
