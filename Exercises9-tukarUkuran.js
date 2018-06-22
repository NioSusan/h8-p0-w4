//After Refactoring
function tukarBesarKecil(kalimat) {
  var result="";
  for(var letter of kalimat){
    if(letter===letter.toUpperCase()){
      result+=letter.toLowerCase();
    } else {
      result+=letter.toUpperCase();
    }
  }
  return result;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

// Before Refactoring
// function tukarBesarKecil(kalimat) {
//     var upperCased= kalimat.toUpperCase();
//     var lowerCased=kalimat.toLowerCase();
//     var result="";
//     for(var i=0;i<kalimat.length;i++){
//         if(kalimat[i]===upperCased[i]){
//           result+= kalimat[i].toLowerCase();
//         } else if(kalimat[i]===lowerCased[i]){
//           result+= kalimat[i].toUpperCase();
//         }
//     }
//     return result;
// }
