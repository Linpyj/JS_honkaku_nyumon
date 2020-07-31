// 高階関数を定義
function arrayWalk(data, f) {
    for (var key in data) {
        f(data[key], key);　　　//  ここで、showElement(value, key)
    }
}

// コールバック関数を定義
function showElement(value, key) {
    console.log(key + ':' + value);
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(ary, showElement);   // ここで引数にターゲットの配列とコールバック関数を指定