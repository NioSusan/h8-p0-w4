//solution 1 - After Refactoring
function changeVocals (str) {
    var result="";
    for(var letter of str){
      if("aiueo".includes(letter) || "AIUEO".includes(letter)){
        var num = letter.charCodeAt() + 1;
        result+=String.fromCharCode(num);
      } else {
        result+=letter;
      }
    }
    return result;
}
  
function reverseWord (str) {
    return str.split("").reverse().join("");
}
  
function setLowerUpperCase (str) {
    var result="";
    for(var letter of str){
      if(letter===letter.toUpperCase()){
        result+=letter.toLowerCase();
      } else {
        result+=letter.toUpperCase();
      }
    }
    return result;
}
  
function removeSpaces (str) {
    return str.trim().replace(/\s/g,''); 
}
  
function passwordGenerator (name) {
    if(name.length<5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    var changedVocal=changeVocals(name);
    var reversed = reverseWord(changedVocal);
    var setStr= setLowerUpperCase(reversed);
    var result = removeSpaces(setStr);
    return result;
} 
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

/* Solution 2 -Before Refactoring */
// function changeVocals (str) {
//     result="";
//     for(var i=0; i<str.length; i++){
//       if("aiueo".indexOf(str[i]) !== -1){ 
//           result+=String.fromCharCode(str[i].charCodeAt()+1);  
//       } else if("AIUEO".indexOf(str[i]) !== -1){
//           result+=String.fromCharCode(str[i].charCodeAt()+1).toUpperCase();  
//       } else {
//         result+=str[i];
//       }
//     }
//     return result;
// }
  
// function reverseWord (str) {
//     var result="";
//     for(var i=str.length-1;i>=0;i--){
//       result+=str[i];
//     }
//     return result;
// }
  
// function setLowerUpperCase (str) {
//     var result="";
//     var lowerCased= str.toLowerCase();
//     var upperCased=str.toUpperCase();
//     for(var i=0;i<str.length;i++){
//       if(str[i]===lowerCased[i]){
//         result+= str[i].toUpperCase();
//       } else if(str[i]===upperCased[i]){
//          result+= str[i].toLowerCase();
//       } else {
//         result+= str[i];
//       }
//     }
//     return result;
// }
  
// function removeSpaces (str) {
//     var result="";
//     for(var letter of str){
//       if(letter!== " "){
//         result+=letter;
//       }
//     }
//     return result;
// }
  
// function passwordGenerator (name) {
//     if(name.length<5){
//       return 'Minimal karakter yang diinputkan adalah 5 karakter';
//     }
//     var changed = changeVocals(name);
//     var rev = reverseWord(changed);
//     var lowUp = setLowerUpperCase(rev);
//     var password = removeSpaces(lowUp);
//     return password;
// }
  
// console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
// console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
// console.log(passwordGenerator('Alexei')); // 'JFXFLb'
// console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'