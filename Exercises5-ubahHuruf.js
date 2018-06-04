function ubahHuruf(kata) {
    return kata.replace(/[a-zA-Z]/g, function(x){
      return String.fromCharCode(x.charCodeAt(0)+1);
    });
}
  
// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu