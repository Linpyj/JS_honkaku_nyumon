var data = 'Global data';
var obj1 = { data: 'obj1 data' };
var obj2 = { data: 'obj2 data' };

function hoge() {
    console.log(this.data);
}

hoge.call(null);    // 結果: Global data 　
　　　　　　　　　　　　// 引数にnullが渡された時は、
                    // グローバルオブジェクトが渡されたものとみなす
hoge.call(obj1);    // 結果: obj1 data
hoge.call(obj2);    // 結果: obj2 data