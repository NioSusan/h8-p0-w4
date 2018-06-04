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
}else if(size>=3 & size%2!==0){
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