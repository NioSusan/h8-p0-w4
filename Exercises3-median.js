function cariMedian(arr) {
    // arr.sort((a, b) => a - b);
    
    var lowMiddle = Math.floor((arr.length - 1) / 2);
    var highMiddle = Math.ceil((arr.length - 1) / 2);
    var median = (arr[lowMiddle] + arr[highMiddle]) / 2;
  
    return median;
}
  
// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5