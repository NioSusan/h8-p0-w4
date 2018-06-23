//solution 1
function digitPerkalianMinimum(angka) {
  var arr=[];
  var result=[];
  for(var i=1;i<=angka;i++){
    if(angka%i === 0){
      arr.push(i);
    }
  }
  var count=1;
  for(var j=0;j<arr.length/2;j++){
   result.push(String(arr[j])+String(arr[arr.length-count]))
   count++;
  }
  var min=result[0].length;
  for(var str of result){
    if(str.length<=min){
     min=str.length;
    }
  }
  return min;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2


/* Solution 2 */
// function digitPerkalianMinimum(angka) {
//     var result=[];
//     var hasil=[];
//     var currentMin=0;
//     for(var i=angka;i>=1;i--){
//       if(angka%i===0){
//         result.push(i);
//       }
//     }
//     // console.log(result);//[ 24, 12, 8, 6, 4, 3, 2, 1 ]
//     for(var j=0;j<result.length/2;j++){
//       hasil.push(result[j], result[result.length-(j+1)]);
//     }
//     // console.log(hasil);//[ 24, 1, 12, 2, 8, 3, 6, 4 ]
//     for(var k=0;k<=hasil.length-2;k+=2){
//       currentMin=(hasil[k].toString().length)+(hasil[k+1].toString().length);
//     }
//     return Math.min(currentMin);
// }
  
