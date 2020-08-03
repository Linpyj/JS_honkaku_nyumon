// ドット演算子バージョン

var Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Member.prototype.getName = function() {
    return this.lastName + ' ' + this.firstName;
};

Member.prototype.toString = function() {
    return this.lastName + this.firstName;
};


// リテラル表現バージョン

var Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Member.prototype = {
    getName : function() {
        return this.lastName + ' ' + this.firstName;
    },
    toString : function() {
        return this.lastName + this.firstName;
    }
};