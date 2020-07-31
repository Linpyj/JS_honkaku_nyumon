function getTriangle(base, height) {
    if (base === undefined) { base = 1; }
    if (height === undefined) { base = 1; }
    return base * height / 2;
}

// もしくは、ES2015以降はこの記述もアリ

function getTriangle(base = 1, height = 1) {
    return base * height / 2;
}

console.log(getTriangle(5));     //結果 : 2.5　　後者の引数が省略されているので、heightにはデフォルト値の1が入るから