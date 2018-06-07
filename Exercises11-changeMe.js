/* 
Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age. Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'
*/

function changeMe(arr) {
    var result=[];
    var obj = {};
    var currentYear = new Date().getFullYear();
    if(arr==0){ 
        console.log(" ' ' ");
        // return " ";
    } else{
        for(var i=0;i<arr.length;i++){
            for(var j=0;j<arr[i].length;j++){
                if(j===0){
                  obj.firstname= arr[i][j];
                } else if (j===1){
                  obj.lastname= arr[i][j];
                } else if(j===2){
                  if(arr[i].length===3){
                    obj.gender= arr[i][j];
                    obj.age= "Invalid Birth Year";
                  } else {
                    obj.gender= arr[i][j];
                  }
                } else if (j===3){
                  if(arr[i][j]>currentYear){
                    obj.age= "Invalid Birth Year";
                  }else{
                    obj.age= (currentYear-arr[i][j]);
                  }
                  
                }  
            }
                result.push(obj);
                obj={};
        }
        console.log("1. Christ Evans :" , result[0]);
        console.log("2. Robert Downey :" , result[1]);
        // return result;
    }
}
    
// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
/* OUTPUT
1. Christ Evans: { firstName: 'Christ', lastName: 'Evans', gender: 'Male',age: 36 }
2. Robert Downey:{ firstName: 'Robert',lastName: 'Downey',gender: 'Male',age: 'Invalid Birth Year' } 
*/    
changeMe([]); // ""