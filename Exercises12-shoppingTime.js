function shoppingTime(memberId, money) {
    let listBarang =[
                     ['Sepatu Stacattu', 1500000],
                     ['Baju Zoro', 500000],
                     ['Baju H&N', 250000],
                     ['Sweater Uniklooh', 175000],
                     ['Casing Handphone',50000]
                    ];
    let info = {};
    let currentMoney=money;
    if(memberId === undefined && money === undefined || memberId === "" && money !== undefined){
     return "Mohon maaf, toko X hanya berlaku untuk member saja";
    }else if(memberId!==undefined && money<50000){
      return "Mohon maaf, uang tidak cukup";
    }else if(money>=50000){
      info["memberId"] = memberId;
      info["money"] = money;
      info["listPurchased"] = [];
      if(money>=2475000){//bisa beli smua
        for(var i=0; i<listBarang.length;i++){
          info["listPurchased"].push(listBarang[i][0]);
          currentMoney -= listBarang[i][1];
        }
      } else if(money>=1500000 && money<2475000){
        for(var i=0; i<listBarang.length;i++){
          if(currentMoney >= listBarang[i][1]){
              info["listPurchased"].push(listBarang[i][0]);
              currentMoney -= listBarang[i][1];
          }
        }
      } else if (money>=500000 && money<1500000){
        for(var i=1; i<listBarang.length;i++){
          if(currentMoney >= listBarang[i][1]){
              info["listPurchased"].push(listBarang[i][0]);
              currentMoney -= listBarang[i][1];
          }
        }
      } else if(money>=250000 && money<50000){
        for(var i=2; i<listBarang.length;i++){
          if(currentMoney >= listBarang[i][1]){
              info["listPurchased"].push(listBarang[i][0]);
              currentMoney -= listBarang[i][1];
          }
        }
      } else if (money>=175000 && money<250000){
        for(var i=3; i<listBarang.length;i++){
          if(currentMoney >= listBarang[i][1]){
              info["listPurchased"].push(listBarang[i][0]);
              currentMoney -= listBarang[i][1];
          }
        }
      } else {
        info["listPurchased"].push(listBarang[4][0]);
        currentMoney -= listBarang[4][1];
      } 
      info["changeMoney"]=currentMoney;
    }
    return info;
}
  
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
  