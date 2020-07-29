var i = 1;
try {
    i = i * j;
} catch(e) {
    console.log(e.message);
} finally {
    console.log('処理が完了しました');
}


/*
try {
    例外が発生するかもしれない処理
} catch(例外情報を受け取る変数) {
    例外が発生した時に実行される処理
} finally {
    例外の有無にかかわらず、最終的に実行される処理
}
*/