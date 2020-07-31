// 高階関数を定義
function arrayWalk(data, f) {
    for (var key in data) {
        f(data[key], key)
    }
}

var ary = [1,2,3,4,5];
arrayWalk(
    ary,
    function (value, key) {
        console.log(key + ':' + value);
    }
);