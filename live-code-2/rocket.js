/**
Multi Dimensional XO
====================
Implementasikan function `multiDimensionalXO` untuk membuat
array `size` x `size`. Array akan diisi dengan huruf 'x' atau huruf 'o'.
# Contoh I/O
- Input: 3
  Output: [ [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ] ]
Pastikan kamu mengisi selang-seling, lihatlah pattern dari output di test case!
# Kondisi khusus
- Jika `size` lebih kecil dari 1, tampilkan 'Invalid input'
*/
function multiDimensionalXO (size) {
  var bigBox=[];
  if(size===0){
    return "Invalid input";
  }else if(size%2===0){
    for(var i=0;i<size;i++){
      bigBox.push([]);
      var currentLetter="x";
      for(var j=0;j<size;j++){
        if(currentLetter==="x"){
          bigBox[i].push(currentLetter);
          currentLetter ="o"
        } else if(currentLetter==="o"){
          bigBox[i].push(currentLetter);
          currentLetter ="x";
        }
      }
    }
}else if(size>=3 && size%2!==0){
    for(var i=0;i<size;i++){
      bigBox.push([]);
      var currentLetter;
      if(currentLetter === undefined){
        currentLetter = "x";
      } else if(bigBox[bigBox.length-1]=== "x") {
        currentLetter = "o";
      } else if(bigBox[bigBox.length-1]=== "o"){
        currentLetter = "x";
      }
      for(var j=0;j<size;j++){
        if(currentLetter==="x"){
          bigBox[i].push(currentLetter);
          currentLetter ="o"
        } else if(currentLetter==="o"){
          bigBox[i].push(currentLetter);
          currentLetter ="x";
        }
      }
    }
}
 
  return bigBox;
}

console.log(multiDimensionalXO(3));
// [ [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ] ]

console.log(multiDimensionalXO(5));
/*
[ [ 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x' ] ]
*/

console.log(multiDimensionalXO(6));
/*
[ [ 'x', 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x', 'o' ] ]
*/

console.log(multiDimensionalXO(0));
// Invalid input


/*  SHORTER SOLUTION 1 - Gusti
var kecil = "input invalid";
if(size < 1){return kecil}

var store = [];
var final = [];
var swiitch = 1;

for (var init1 = 0; init < size; init1++){
  for(var init2 = 0; init2 < size; init2++){
    if(swiitch === 1){
      store.push("x");
      swiitch ++;
    } else {
      store.push("o");
      swiitch--;
    }
  }
  final.push(store);
  store = [];
}
return final;
}

*/

/* SHORTER SOLUTION 2 - Dimas
function multiDimensionalXO (size) {
  
  var tampung = [];  
  
  for(var j = 0; j < size; j++) {
    //data awal
    var data = [];
    if(j % 2 === 0) {
      data.push('x');
    } else {
      data.push('o');
    }
    for(var i = 0; i < size; i++) {
     // cek data selanjutnya berdasarkan data awalnya
      if(data[i] === 'x') {
        data.push('o');
      } else {
       data.push('x');
      }
    }
    tampung.push(data);
  }
  return tampung;
}
*/

/* SHORTER SOLUTION 3 - Eri
function multiDimensionalXO (size) {
  var output = [];
  var buffer = [];
  if(size<1){
    return "Invalid input";
  }
  else{
    for(var i = 0 ; i<size*size; i++){

      buffer.push((i%2 ===0 ? 'x' : 'o'));

      if (buffer.length % size === 0){
        output.push(buffer);
        buffer= [];
      }

    }

  }
  return output;
}
 */


/* BONUS: SOLUTION untuk ubah xo menjadi angka
function multiDimensionalXO (size) {
  var bigBox =[];
  var currentLetter;

  for(var i=0; i<bigBox; i++){
    for(var j=0; j<bigBox[i];j++)
    if(bigBox[i][j] % 2 === 0){
        bigBox[i][j] = "o";
    } else {
        bigBox[i][j] = "x";
    }
  }
  
  if(size===0){
    return "Invalid input";
  }else {
    for(var i=0;i<size;i++){
      bigBox.push([]);
      if(currentLetter === undefined){
        currentLetter = 1;
      } 
      for(var j=0;j<size;j++){
        if(currentLetter===1){
          bigBox[i].push(currentLetter);
          currentLetter ++;
        } else{
          bigBox[i].push(currentLetter);
          currentLetter ++
        }
      }
    }
  }
  
  return bigBox;

}
*/