/*
================
Break Sentence
================
Name :_____________

[INSTRUCTIONS]
breakSentence adalah sebuah function yang menerima satu parameter berupa string kalimat.
function akan mereturn sebuah array yang berisikan setiap kata di kalimat tesebut.

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan sintaks .split()! Jangan lupa, split bukanlah operasi array.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
breakSentence('I am so amazed')
output: ['i', 'am', 'so', 'amazed']
*/

/* Algoritma */
// 1. Jika panjang sentence sama dengan 0, maka tampilkan [].
// 2. Jika tidak memenuhi kondisi sebelumnya, maka looping dari var i set 0, sampai panjang sentence
//   2.a. Jika sentence[i] tidak sama dengan " "  maka ambil huruf sentence[i] dari index 0 hingga akhir dan tambahkan ke tempWords.
//   2.b. jika tidak memenuhi kondisi sebelumnya, maka pindahkan isi tempWords ke words
//        kemudian kosongkan tempWords.
// 3. tampilkan words.


//Solution 1 - Using for of
function breakSentence(sentence) {
    var result=[];
    var str="";
    if(sentence.length===0 || sentence===" "){
      return result;
    }
    for(var letter of sentence){
      if(letter!==" "){
        str+=letter;
      }else{
        result.push(str);
        str="";
      }
    }
    result.push(str);
    return result;
}

/* PSEUDOCODE 
FUNCTION breakSentence with parameter sentence:string
//// jika parameter ada lebih dari 1, misalnya ada 3 parameter, maka set seperti ini pseudocodenya:
// FUNCTION breakSentence with parameter sentence:string, angka:number, result:array 
STORE 'result' with an empty array
STORE 'str' with an empty string
IF length of sentence EQUALS 0 OR sentence EQUALS " " (space)
  RETURN 'result'
END IF
FOR EACH 'letter' of sentence
  IF 'letter' NOT EQUALS " " (space) THEN
    APPEND 'str' with 'letter'
  ELSE 
    PUSH 'str' to 'result'
    SET 'str' to empty string
  END IF
END FOR
PUSH 'str' to 'result'
RETURN 'result'
END FUNCTION
*/

/* =================================================================== */
//Solution 2 - using for loops
function breakSentence(sentence) {
    var result=[];
    var str="";
    if(sentence.length===0 || sentence === " "){
      return result;
    }
    for(var i=0;i<sentence.length;i++){
      if(sentence[i]!==" "){
        str+=sentence[i];
      }else{
        result.push(str);
        str="";
      }
    }
    result.push(str);
    return result;
}
/* PSEUDOCODE 
FUNCTION breakSentence with parameter sentence: string
STORE 'result' with an empty array
STORE 'str' with an empty string
IF length of sentence EQUALS 0 OR sentence EQUALS " " (space)
  RETURN 'result'
END IF
STORE "i" with 0
FOR i to length of 'sentence'
  IF sentence[i] NOT EQUALS " " (space) THEN
    SET 'str' with sentence[i]
  ELSE 
    PUSH 'str' to 'result'
    SET 'str' to empty string
  END IF
  SET "i" with "i" + 1
END FOR
PUSH 'str' to 'result'
RETURN 'result'
END FUNCTION
*/

/* =================================================================== */
//Solution 3 - Using for loops
function breakSentence(sentence) {
  var str = "";
  var result=[];
 
  if(sentence.length===0 || sentence===" "){
     return result;
   } else{
     for(var i=0; i<sentence.length;i++){
       if (sentence[i]==" " ||  i===sentence.length-1){ //detecting whether sentence[i] is " " or last letter, so no need to push again later
         if (i === sentence.length-1) {
           str += sentence[i];
         }
         result.push(str);
         str="";
       } else  {
         str += sentence[i];
       } 
     }
   }
  return result;
 }

 /* PSEUDOCODE
FUNCTION breakSentence with parameter sentence:string
STORE "str" with empty string
STORE "result" with empty result

IF length of sentence EQUALS 0 OR sentence EQUALS " " THEN
  RETURN result
  ELSE
    STORE "i" with 0
    FOR i to length of sentence
      IF sentence[i] EQUALS " " OR "i" EQUALS length of sentence min 1 THEN
        IF  "i" EQUALS length of sentence min 1 THEN
            SET "str" with "str" + sentence[i]
        END IF
        PUSH "str" to "result"
        SET "str" to empty string
      ELSE
        SET "str" with "str" + sentence[i]
      END IF
      SET "i" with "i" + 1
    END FOR
END IF
RETURN "result"
END FUNCTION
 */

console.log(breakSentence('I am so amazed')); // ['I', 'am', 'so', 'amazed' ]
console.log(breakSentence('do something')); // ['do', 'something']
console.log(breakSentence('')); // []
console.log(breakSentence('week3 is so easy')); // ['week3', 'is', 'so', 'easy']
console.log(breakSentence('I can do this with my eyes closed')); // ['I', 'can', 'do', 'this', with', 'my', 'eyes', 'closed']
