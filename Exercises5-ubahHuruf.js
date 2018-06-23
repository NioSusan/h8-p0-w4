//Solution 1 - using regex
function ubahHuruf(kata) {
    return kata.replace(/[a-zA-Z]/g, function(x){
      return String.fromCharCode(x.charCodeAt(0)+1);
    });
}

//Solution 2 - Using charCodeAt() and String.fromCharCode()
// function ubahHuruf(kata) {
//   var str="";
//   for(var letter of kata){
//     var num=letter.charCodeAt()+1;
//     str+=String.fromCharCode(num);
//   }
//   return str;
// }
  
// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu