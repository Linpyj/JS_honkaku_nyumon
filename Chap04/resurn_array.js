function getMaxMin(...nums) {
    return [Math.max(...nums), Math.min(...nums)];
}

let result = getMaxMin(10, 35, -5, 78, 0);
console.log(result)    //　結果：[78,-5]


//　分割代入のパターン  
let [max, min] = getMaxMin(10, 35, -5, 78, 0);
console.log(max);
console.log(min);