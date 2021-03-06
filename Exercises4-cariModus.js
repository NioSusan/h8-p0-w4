
//Solution 1 - Using object
function cariModus(arr) {
  var obj={};
  for(var num of arr){
    if(!obj[num]){
      obj[num] = 0;
    }
    obj[num]++;
  }
  // console.log(obj);
  var winnerNum=1;
  var winnerName;
  for(var key in obj){
    if(obj[key]>winnerNum){
      winnerNum=obj[key];
      winnerName=key;
    }
  }
  if(winnerName===undefined || (Object.keys(obj).length===1)){
    return -1;
  }
  return winnerName;
}

//Solution 2
// function cariModus(arr) {
//     var copyArr = JSON.parse(JSON.stringify(arr));
//     var modes=[];
  
//     for(var i=0; i<arr.length;i++){
//       var currentNum=arr[0];
//          for(var j=0;j<arr.length;j++){
//            if(j!==0 && arr[j]===currentNum){
//               modes.push(currentNum);
//            }
//          }   
//          arr.splice(0,1); 
//          currentNum="";
//     } 
    
//     if(modes.length>=copyArr.length){
//       return -1;
//     } else if (modes.length >=1){
//       return modes[0];
//     } else {
//       return -1;
//     } 
// }
  
// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1