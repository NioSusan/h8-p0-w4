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

/* PSEUDOCODE
SET FUNCTION with sentence as the parameter THEN inside of it
STORE "tempWords" with []
STORE "words" with []

IF length of sentence <=1 THEN
    return[];
ELSE 
    STORE "i" with 0
    FOR "i" < length of sentence DO
        IF sentence[i] != " " OR sentence[i] !=' ' THEN
            STORE "tempWords" SET with sentence[i].substr(0)
            SET ’i’ = ‘i’ + 1
        ELSE
            PUSH "tempWords" to "words" 
            SET "tempWords"=[]
        END IF
     
        PUSH "tempWords" to "words" 
    END FOR
END IF
RETURN "words"
END FUNCTION
*/


function breakSentence(sentence) {
  var tempWords = [];
  var words=[];
 
  if(sentence.length<=1){
     return[];
   } else {
     for(var i=0; i<sentence.length;i++){
       if(sentence[i]!=" " || sentence[i]!=' ' ){
         tempWords +=sentence[i].substr(0);
       } else {
         words.push(tempWords);
         tempWords=[];
       }
     }
       words.push(tempWords);
   }
   return words;
 }
console.log(breakSentence('I am so amazed')); // ['I', 'am', 'so', 'amazed' ]
console.log(breakSentence('do something')); // ['do', 'something']
console.log(breakSentence('')); // []
console.log(breakSentence('week3 is so easy')); // ['week3', 'is', 'so', 'easy']
console.log(breakSentence('I can do this with my eyes closed')); // ['I', 'can', 'do', 'this', with', 'my', 'eyes', 'closed']

