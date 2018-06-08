function changeVocals (str) {
    result="";
    for(var i=0; i<str.length; i++){
      if("aiueo".indexOf(str[i]) !== -1){ 
          result+=String.fromCharCode(str[i].charCodeAt()+1);  
      } else if("AIUEO".indexOf(str[i]) !== -1){
          result+=String.fromCharCode(str[i].charCodeAt()+1).toUpperCase();  
      } else {
        result+=str[i];
      }
    }
    return result;
}
  
function reverseWord (str) {
    var reversed = str.split("").reverse().join("");
    return reversed;
}
  
function setLowerUpperCase (str) {
    var result="";
    var lowerCased= str.toLowerCase();
    var upperCased=str.toUpperCase();
    for(var i=0;i<str.length;i++){
      if(str[i]===lowerCased[i]){
        result+= str[i].toUpperCase();
      } else if(str[i]===upperCased[i]){
         result+= str[i].toLowerCase();
      } else {
        result+= str[i];
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
    var changed = changeVocals(name);
    var rev = reverseWord(changed);
    var lowUp = setLowerUpperCase(rev);
    var password = removeSpaces(lowUp);
    return password;
}
  
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'