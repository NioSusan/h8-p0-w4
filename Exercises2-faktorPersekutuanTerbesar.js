function fpb(angka1, angka2) {
    if ((typeof angka1 !== 'number') || (typeof angka2 !== 'number')){
      return false;
    }

    angka1 = Math.abs(angka1);
    angka2 = Math.abs(angka2);
    
    while(angka2) {
      var t = angka2;
      angka2 = angka1 % angka2;
      angka1 = t;
    }
    return angka1;
}
  
// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1