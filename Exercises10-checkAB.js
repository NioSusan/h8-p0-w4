/* After Refactoring */
function checkAB(str) {
  for(var i in str){
    if((str[i]==="a" && str[Number(i)+4]==="b") || (str[i]==="b" && str[Number(i)+4]==="a")){
     return true;
    }
  }
  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false


/* ======================================================================================================== */
//Before Refactoring
// function checkAB(str) {
//     if(str.includes("a") && str.includes("b")){ //check got "a" or "b"?
//       for(var i=0;i<str.length;i++){ //if YES, check the distance of 3 characters between them.
//         if(str[i]==="a" || str[i]==="b"){
//           if(str[i+4]==="b" || str[i+4]==="a"){
//             return true;
//           } else {
//             return false;
//           }
//         }
//       }
//     } else { //if NO, return false
//       return false;
//     }
// }
  