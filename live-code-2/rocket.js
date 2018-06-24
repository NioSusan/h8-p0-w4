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

//Solution 1 - Using nested loops (count%2!==0 OR not)
function multiDimensionalXO(num){
  if(num<1){
    return "Invalid input"
  }
  var result=[];
  var box=[]
  var count=1;
  for(var i=0;i<num;i++){
    for(var j=0;j<num;j++){
      if(count%2!==0){
        box.push("x");
      } else {
        box.push("o");
      }
      count++;
    }
    result.push(box);
    box=[];
  }
  return result;
}
/* ================================================== */
//Solution 2 - Using nested loops (count===1 OR not)
function multiDimensionalXO (num) {
  if(num<1){
    return  "Invalid input";
  }

  var result=[];
  var box=[];
  var count=1;
  for(var i=0;i<num;i++){
    for(var j=0;j<num;j++){
      if(count===1){
        box.push("x");
        count++;
      } else {
        box.push("o");
        count--;
      }
    }
    result.push(box);
    box=[];
  }
  return result;
}

/* ====================================================================================*/
//Solution 3 - SINGLE for loop (by using num*num AND counting the length of box )
function multiDimensionalXO (num) {
  if(num<1){
    return  "Invalid input";
  }
  var result=[];
  var box=[];
  for(var i=1;i<=num*num;i++){
    if(i%2!==0){
      box.push("x");
    }else{
      box.push("o");
    }

    if(box.length===num){
      result.push(box);
      box=[];
    }
  }
  return result;
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


