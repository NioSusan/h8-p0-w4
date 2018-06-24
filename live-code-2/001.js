/**
Number Letters
--------------
Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
Contoh ada di test cases

RULES:
  - Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match
    dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.


/* ALGORITMA
1. Siapkan variable result dengan ""
2.looping dari var i set 0, sampai panjang kata ()
  2.a jika kata[i] sama dengan 1 maka result diisi dengan result sebelumnya ditambah karakter "i"
  2.b jika kata[i] sama dengan 4 maka result diisi dengan result sebelumnya ditambah karakter "a"
  2.c jika kata[i] sama dengan 3 maka result diisi dengan result sebelumnya ditambah karakter "e"
  2.d jika kata[i] sama dengan 7 maka result diisi dengan result sebelumnya ditambah karakter "u"
  2.e jika kata[i] sama dengan 0 maka result diisi dengan result sebelumnya ditambah karakter "o"
  2.f jika semua di atas tidak ada yang memenuhi kondisi maka result sebelumnya ditambah kata[i]
  Tambahkan nilai i sebelumnya dengan 1.
3. looping selesai
4. Kembalikan nilai result
*/

/* PSEUDOCODE*/
STORE "result" with empty string
STORE "i" with 0

FOR i to length of str
  IF str[i] EQUALS "1" THEN
    SET "result" with "result" + "i"
  ELSE IF str[i] EQUALS "4" THEN
    SET "result" with "result" + "a"
  ELSE IF str[i] EQUALS "3" THEN
    SET "result" with "result" + "e"
  ELSE IF str[i] EQUALS "7" THEN
    SET "result" with "result" + "u"
  ELSE IF str[i] EQUALS "0" THEN
    SET "result" with "result" + "o"
  ELSE
    SET "result" with "result"+str[i]
  END IF
  
  SET "i" with ‘i’ + 1
END FOR

RETURN "result"

//Solution 1 - Using for loops
function numberLetters(str){
  var result="";
  
  for(var i=0;i<str.length;i++){
    if(str[i]==="1"){
      result+="i";
    } else if(str[i]==="4"){
      result+="a";
    } else if(str[i]==="3"){
      result+="e";
    } else if(str[i]==="7"){
      result+="u";
    } else if(str[i]==="0"){
      result+="o";
    } else {
      result+=str[i];
    }
  }
  return result;
}
// Test cases
console.log(numberLetters('d1m1tr1w4hy7d1p7tr4')); // dimitriwahyudiputra
console.log(numberLetters('s3rg31dr4g7n0v')); // sergeidragunov
console.log(numberLetters('j1nk4z4m4')); // jinkazama
console.log(numberLetters('s7m3t4l')); // sumetal
console.log(numberLetters('m04m3t4l')); // moametal
console.log(numberLetters('')); //

/* =============================================================================== */
//Solution 2 - Using for of
// function numberLetters(str){
//   var result="";
//   for(var letter of str){
//     if(letter==="1"){
//       result+="i";
//     } else if(letter==="4"){
//       result+="a";
//     } else if(letter==="3"){
//       result+="e";
//     } else if(letter==="7"){
//       result+="u";
//     } else if(letter==="0"){
//       result+="o";
//     } else {
//       result+=letter;
//     }
//   }
//   return result;
// }

/* PSEUDOCODE for 'for of'
STORE 'str' with any string value
STORE result with empty string
FOR EACH letter of str
	IF letter EQUALS “1”
		APPEND "result" with "i"
	ELSE IF letter  EQUALS “4”
		APPEND "result" with "a"
	ELSE IF letter EQUALS “3”
		APPEND "result" with "e"
	ELSE IF letter EQUALS “7”
		APPEND "result" with "u"
	ELSE IF letter EQUALS “0”
		APPEND "result" with "o"
	ELSE 
		APPEND "result" with letter
END FOR
RETURN "result"
*/

/* ============================================================================== */
/* DIMAS' VERSION (for a reference)
STORE str WITH any STRING value
STORE newStr with any STRING value 
FOR EACH character of str
	IF character EQUALS “1”
		APPEND newStr with i
	ELSE IF character EQUALS “4”
		APPEND newStr with a
	ELSE IF character EQUALS “3”
		APPEND newStr with e
	ELSE IF character EQUALS “7”
		APPEND newStr with u
	ELSE IF character EQUALS “0”
		APPEND newStr with o
	ELSE 
		APPEND newStr with character
END FOR

DISPLAY newStr
*/

function numberLetters (str){
	var newStr="";

	for(var i=0; i<str.length;i++){
		if(str[i] === "1"){
        newStr+= "i";
    } else if (str[i] === "4"){
        newStr+= "a";
    } else if (str[i] === "3"){
      newStr+= "e";
    } else if (str[i] === "7"){
      newStr+= "u";
    } else if (str[i] === "0"){
      newStr+= "o";
    } else {
      newStr+= str[i];
    }
  }
}