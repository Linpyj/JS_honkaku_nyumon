var Member = function() {}

Member.prototype.sex = ' 男 ';

var Mem1 = new Member();
var Mem2 = new Member();

console.log(mem1.sex + '|' + mem2.sex);
Mem2.sex = ' 女 ';
console.log(mem1.sex + '|' + mem2.sex);

delete mem1.sex
delete mem2.sex
console.log(mem1.sex + '|' + mem2.sex);