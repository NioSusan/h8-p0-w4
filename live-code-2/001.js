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


/* Algoritma*/
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


/* Pseudocode*/
STORE "i" with 0
STORE "result" with empty string

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


function numberLetters (str) {
  var solved ="";
  for(var i=0; i<str.length; i++){
    if(str[i]==1){
      solved+=str[i] = "i";
    } else if (str[i]==4){
       solved+=str[i] = "a";
    } else if (str[i]==3){
       solved+=str[i] = "e";
    } else if (str[i]==7){
       solved+=str[i] = "u";
    } else if (str[i]==0){
       solved+=str[i] = "o";
    } else{
      solved+= str[i];
    }
  }
  return solved;
}


// Test cases
console.log(numberLetters('d1m1tr1w4hy7d1p7tr4')); // dimitriwahyudiputra
console.log(numberLetters('s3rg31dr4g7n0v')); // sergeidragunov
console.log(numberLetters('j1nk4z4m4')); // jinkazama
console.log(numberLetters('s7m3t4l')); // sumetal
console.log(numberLetters('m04m3t4l')); // moametal
console.log(numberLetters('')); //