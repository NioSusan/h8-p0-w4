/* After Refactoring */
function totalDigitRekursif(angka) {
  var stringNum = String(angka);
  if(stringNum.length===1){
    return Number(stringNum);
  } else {
    return Number(stringNum[0]) + totalDigitRekursif((stringNum.slice(1)));
  }
}

/* ========================================================================== */
/* Before Refactoring */
// function ubahAngkaToStr(num){
//     return String(num).split("");
// }
  
// function totalDigitRekursif(angka) {
//     var arrAngka= ubahAngkaToStr(angka);
//     if(arrAngka.length===1){
//       return Number(arrAngka);
//     } else {
//       var angka1 = Number(arrAngka.splice(0,1));
//       var sisanya= arrAngka.join("");
//       return (angka1) + totalDigitRekursif(sisanya);
//     }
// }
  
// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
  
  