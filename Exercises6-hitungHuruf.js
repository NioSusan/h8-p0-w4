
//Solution 1 
function hitungHuruf(str){
  var words=[]
  var obj={};
  var word="";
  var wordArr=[];
  for(var i=0; i<str.length;i++){
    if(str[i]!==" " && str[i]!== ","){//removing spaces & comma
      var letter = str[i];
      if(!obj[letter]){
        obj[letter]=0;
      }
      obj[letter]++;
      word+=letter;
    } else if(str[i]===" "){
      words.push(obj);
      obj={};
      wordArr.push(word);
      word="";
    }
  }
  words.push(obj);
  wordArr.push(word);//the array will help find the index of obj
  // console.log(wordArr);//[ 'Today', 'is', 'the', 'greatest', 'day', 'ever' ]
  var count=0;
  for(var objek of words){
    for(var [key, val] of Object.entries(objek)){
      if(val>1){
        count+=val;
      }
    }
    objek["win"] = count;
    count=0;
  }
  // console.log(words);
  /* 
  [ { T: 1, o: 1, d: 1, a: 1, y: 1, win: 0 },
  { i: 1, s: 1, win: 0 },
  { t: 1, h: 1, e: 1, win: 0 },
  { g: 1, r: 1, e: 2, a: 1, t: 2, s: 1, win: 4 },
  { d: 1, a: 1, y: 1, win: 0 },
  { e: 2, v: 1, r: 1, win: 2 } ]
   */
  var currentWinNum=0;
  var theWinner;
  for(var oby of words){
    if(oby.win!==0 & oby.win > currentWinNum){
       currentWinNum=oby.win;
       theWinner = oby;
    }
  }
  // console.log(theWinner);//{ g: 1, r: 1, e: 2, a: 1, t: 2, s: 1, win: 4 }
  if(theWinner===undefined){
    return -1;
  }
  var winnerIndex=words.indexOf(theWinner);//3
  return wordArr[winnerIndex];
} 

// TEST CASES
console.log(hitungHuruf('Today'));//-1
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau

/* =================================================================================================== */
//Solution 2
// function hitungHuruf(kata) {
//   var words=[];
//   var str="";
//   var specialChar=";"
//   for(var letter of kata){
//     if(letter !== " "){
//       if(letter===","){
//         specialChar+=letter;
//       }else{
//         str+=letter;
//       }
//     } else {
//         words.push(str);
//         str="";
//     }
//   }
//   words.push(str);
//   // console.log(words);//[ 'Today', 'is', 'the', 'greatest', 'day', 'ever' ]
//   var obj={};
//   var result={};
//   for(var word of words){
//     for(var letter of word){
//       if(!obj[letter]){
//         obj[letter]=1;
//       }else{
//         obj[letter]++;
//       }
//     }
//     var count=0;
//     for(var key in obj){
//       if(obj[key]>1){
//         count+=obj[key];
//       }
//     }
//     obj.win=count;
//     result[word]=obj;
//     obj={};
//     count=0;
//   }
//   // console.log(result);
//   var currentWinner;
//   var howMany;
//   for(var [key,value] of Object.entries(result)){  
//     if(value["win"]!==0){
//       if(currentWinner===undefined && howMany===undefined){
//           currentWinner=key;
//           howMany=value["win"];
//       }else{
//         if(value["win"]>howMany){
//           currentWinner=key;
//           howMany=value["win"];
//         }
//       }
//     } 
//   }
//   if(currentWinner===undefined){
//     return -1;
//   }
//   return currentWinner; 
// }

/* ===================================================================================================== */
//Solution 3
// function hitungHuruf(kata){
//   var str = kata.split(" ");
//   console.log(str);
//    var histo={};
//    var result=[];

//   for(var i=0;i<str.length;i++){
//     for(var j=0;j<str[i].length;j++){
//       var char= str[i][j];
//       if(!histo[char]){
//         histo[char]=0;
//       }
//       histo[char]++; 
//       if(histo[char]>=2){
//         result.push([str[i], char, histo[char]]);
//       } 
//     }
//     histo={};
//   }

//   var currentResult;
//   for(var i=0;i<result.length;i++){
//     currentResult=result[i];
//     for(var j=0;j<result.length;j++){
//       if(j!==i&&result[j][0]===currentResult[0] && result[j][1]===currentResult[1] && result[j][2]>currentResult[2]){
//         result.splice(i,1);
//       } 
//     }
//   }
//   if(result.length===1){
//     return result[0][0];
//   } else if (result.length>1) {
//     for(var i=0;i<result.length;i++){
//       currentResult=result[i];
//       for(var j=0;j<result.length;j++){
//        if(j!==i&&result[j][0]===currentResult[0]){
//           return currentResult[0];
//         } else if(result[j][0]!==currentResult[0] && result[j][2] === currentResult[2]){
//           return currentResult[0]
//         }
//       }
//     }
//   }
//   if(result.length===0){
//         return -1;
//      }
//      return result;
// } 

