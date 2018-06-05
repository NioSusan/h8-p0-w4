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
// 1. Jika panjang sentence kurang dari atau sama dengan 1, maka tampilkan [].
// 2. Jika tidak memenuhi kondisi sebelumnya, maka looping dari var i set 0, sampai panjang sentence
//   2.a. Jika sentence[i] tidak sama dengan " " atau sentence[i] sama dengan ' ' maka ambil huruf sentence[i] dari index 0 hingga akhir dan tambahkan ke tempWords.
//   2.b. jika tidak memenuhi kondisi sebelumnya, maka pindahkan isi tempWords ke words
//        kemudian kosongkan tempWords.
// 3. tampilkan words.


/* PSEUDOCODE*/
FUNCTION breakSentence with parameter sentence:string
// jika parameter ada lebih dari 1, misalnya ada 3 parameter, maka set seperti ini pseudocodenya:
// FUNCTION breakSentence with parameter sentence:string, angka:number, result:array 
STORE "tempWords" with empty string ""
STORE "words" with []

IF length of sentence <= 1 THEN
    return[];
ELSE
    STORE "i" with 0
    FOR i to length of sentence
        IF sentence[i] EQUALS " " OR i EQUALS length of sentence min 1
          IF "i" EQUALS length of sentence min 1
            SET "tempWords" with sentence[i]
          END IF 

          PUSH "tempWords" to "words"
          SET tempWords to empty string
        ELSE
          SET "tempWords" with "tempWords" + sentence[i]
        END IF
          
        SET ’i’ with ‘i’ + 1
    END FOR
END IF
RETURN "words"

END FUNCTION

/* SYNTAX*/
function breakSentence(sentence) {
  var tempWords = "";
  var words=[];
 
  if(sentence.length<=1){
     return[];
   } else{
     for(var i=0; i<sentence.length;i++){
       if (sentence[i]==" " ||  i===sentence.length-1){
         if (i === sentence.length-1) {
           tempWords += sentence[i];
         }
         words.push(tempWords);
         tempWords="";
       } else  {
         tempWords += sentence[i];
       } 
     }
   }
  return words;
 }
console.log(breakSentence('I am so amazed')); // ['I', 'am', 'so', 'amazed' ]
console.log(breakSentence('do something')); // ['do', 'something']
console.log(breakSentence('')); // []
console.log(breakSentence('week3 is so easy')); // ['week3', 'is', 'so', 'easy']
console.log(breakSentence('I can do this with my eyes closed')); // ['I', 'can', 'do', 'this', with', 'my', 'eyes', 'closed']