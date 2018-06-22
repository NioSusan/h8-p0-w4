//After Refactoring
function kaliTerusRekursif(angka) {
  var stringNum = String(angka);
  if(stringNum.length===1){
    return Number(stringNum);
  } else {
    var result= Number(stringNum[0]) * kaliTerusRekursif((stringNum.slice(1)));
  }
  if(String(result).length>1){
    var result = kaliTerusRekursif(result);
  }
  return result;
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6

/* ================================================================================= */
//Before Refactoring
/* Solution 1 */
// function multiply(n) { //n is an array of string, e.g.['6','6']
//   if(n.length===1){
//     return Number(n);
//   } else {
//     return Number(n.splice(0,1)) * multiply(n.slice(0));
//   }
// }

// function kaliTerusRekursif(angka) { //e.g. 66   
//   var count =0;     
//   while (angka.toString().length > 1) {//'66', length= 2
//     angka = angka.toString().split("");//['6','6']
//     angka = multiply(angka); //multiply(['6','6'])
//     count++;
//   }
//   return angka; // return the value of count
// }

/* Solution 2 - using .reduce() */
// function multiply(n) {
//     // Multiply the first number by next number in the array
//     // until the entire array has been iterated over
//     return n.reduce(function(a,b){return a*b;});
// }
  
// function kaliTerusRekursif(angka) {    
//     // Set the count to 0
//     var count =0;     
//     /*  Use a while loop to iterate the same number of times as there are digits in angka */
//     while (angka.toString().length > 1) {
//       // Splits the angka into an array, e.g. ['6','6']
//       angka= angka.toString().split("");
//       /* Runs multiply() on our angka array and sets  to the returned value in preparation of the next loop.
//       The multiply(66) will run 6 * 6 = 36,
//       next iteration we've set angka to 36 so multiply will be
//       3 * 6 = 18, then 1 * 8 = 8, and since angka 8 now
//       has a length = 1 the loop stops. */
//       angka = multiply(angka);
//        /* Increase count by 1 each iteration, then run the next 
//       iteration in the loop with the new value for angka being
//       set to the result of the first multiplication. */
//       count++;
//     }
//     return angka; // return the value of count
// }
  
