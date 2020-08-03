var Member = function(firstName, lastName) {
    // 初期化処理
    this.firstName = firstName;
    this.lastName = lastName
    this.getName = function() {
        return this.lastName + ' ' + this.firstName;
    }
};

var mem = new Member('ゆうせい', 'T橋');
console.log(mem.getName);       // T橋 ゆうせい