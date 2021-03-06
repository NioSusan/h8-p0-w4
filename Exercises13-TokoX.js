/* Solution 1 - refactored */
function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  var result = [];
  var obj={};
  if(shoppers.length===0){
    return result;
  }
  for(var i=0;i<listBarang.length;i++){
    var currentProduct=listBarang[i][0];
    var currentProductPrice=listBarang[i][1];
    var currentStock= listBarang[i][2];
    obj.product = currentProduct;
    var shopper=[];
    var profit=0;
    for(var j=0;j<shoppers.length;j++){
      if(shoppers[j].product===currentProduct && shoppers[j].amount<=currentStock){
        shopper.push(shoppers[j].name);
        currentStock= currentStock-shoppers[j].amount;
        profit += shoppers[j].amount * currentProductPrice;
      }
      obj.shoppers = shopper;
      obj.leftOver = currentStock;
      obj.totalProfit = profit
    }
    result.push(obj);
    obj={}; 
  }
  return result;
}
// TEST CASES
console.log(countProfit(
  [
    {name: 'Windi', product: 'Sepatu Stacattu', amount: 2},
    {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, 
    {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}
  ]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit(
  [
    {name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, 
    {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, 
    {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, 
    {name: 'Devi', product: 'Baju Zoro', amount: 1}, 
    {name: 'Lisa', product: 'Baju Zoro', amount: 1}
    ]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]
console.log(countProfit([])); //[]

/* ==================================================================================== */
/* Solution 2 -longer version */
/* function countProfit(shoppers) {
    let listBarang = [['Sepatu Stacattu', 1500000, 10],
                      ['Baju Zoro', 500000, 2],
                      ['Sweater Uniklooh', 175000, 1]
                     ];
  
    let result =[];
    let box={};
    let cart=0;
    let profit=0;
    let buyer=[]
    
    if(shoppers==0){
       return result;
    } else {
      for(var i=0;i<listBarang.length;i++){
        box.product = listBarang[i][0];
        var currentProduct=listBarang[i][0];
        var price = listBarang[i][1];//150000
        var currentQty = listBarang[i][2];//10
        for(var j=0;j<shoppers.length;j++){
          if(shoppers[j].product === currentProduct && currentQty>=shoppers[j].amount){
            buyer.push(shoppers[j].name);
            cart = cart+shoppers[j].amount;
            currentQty = currentQty-shoppers[j].amount;
            profit=price * cart;
          }
        }  
        box.shoppers = buyer;
        box.leftOver = currentQty;
        box.totalProfit = profit;
        result.push(box);
        box={};
        buyer=[];
        profit =0;
        cart=0;
      }
    return result;
    }
}
  
   */
  