var Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

var mem = new Member('ゆうせい', 'T橋');
mem.getName = function() {
    return this.lastName + ' ' + this.firstName;
}

console.log(mem.getName);