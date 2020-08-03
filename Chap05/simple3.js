var Member = function(firstName, lastName) {
    // コンストラクターが関数として呼び出されたなら、
    // thisはMemberオブジェクトのメンバーではない
    if(!(this instanceof Member)) {
        return new Member(firstName, lastName)
    }
    this.firstName = firstName;
    this.lastName = lastName;
}