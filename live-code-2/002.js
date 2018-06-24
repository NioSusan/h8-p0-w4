/*
==================================
Array Mastery: Pair Up
==================================
Nama:________
[INSTRUKSI]
Setiap student di HACKTIV8 ditugaskan untuk membuat tim project dengan komposisi tim dua orang.
Kita membutuhkan sebuah program untuk membuat tim-tim tersebut.
Function pairUp akan menerima satu parameter berupa array yang berisi string nama student.
Function ini akan mengelompokkan setiap dua nama menjadi satu kelompok, dan apabila tersisa satu student, student terakhir akan bersama instruktur.
Hasil pengelompokkan adalah sebuah array yang berisi string berupa nama dua orang student sebagai satu tim.
Formatnya adalah <Nama Student 1> dan <Nama Student 2>.

[CONTOH]
input: ['Budi', 'Badu', 'Indra', 'Indri']
output: ['Budi dan Badu', 'Indra dan Indri']

input: ['Budi', 'Badu', 'Indra', 'Indri', 'James']
output: ['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur']

input: []
output: []

[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .map, .filter, atau .reduce!

*/

//Solution 1 - if it's odd, add instruktur to make it even!
function pairUp(arr){
  var result =[];
  if(arr.length%2!==0){
    arr.push("Instruktur");
  }
  for(var i=0;i<arr.length;i+=2){
    result.push(`${arr[i]} dan ${arr[i+1]}`)
  }
  return result;
}

// TEST CASES
console.log(pairUp(['Budi', 'Badu'])); // ['Budi dan Badu']
console.log(pairUp(['Budi'])); // ['Budi dan Instruktur']
console.log(pairUp(['Budi', 'Badu', 'Indra', 'Indri'])); // ['Budi dan Badu', 'Indra dan Indri']
console.log(pairUp(['Budi', 'Badu', 'Indra', 'Indri', 'James'])); // ['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur']
console.log(pairUp([])); // []

/* ===================================================== */
//Solution 2 - if arr[i+1]===undefined, add instruktur
// function pairUp(arr){
//   var result =[];
//   for(var i=0;i<arr.length;i+=2){
//     if(arr[i+1]===undefined){
//       result.push(`${arr[i]} dan Instruktur`);
//     } else {
//       result.push(`${arr[i]} dan ${arr[i+1]}`)
//     }
//   }
//   return result;
// }


