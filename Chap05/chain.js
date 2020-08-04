var Animal = function() {};

Animal.prototype = {
    walk : function() {
        console.log('トコトコ...');
    }
};

var Dog = function() {
    Animal.call(this);
};

Dog.prototype = new Animal();
Dog.prototype.bark = function() {
    console.log('ワンワン！');
}

var d = new Dog();
d.walk(); // トコトコ...
d.bark(); // ワンワン！



// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// var person1 = new Person('山井', 22)
// var person2 = new Person('川井', 54)


var User = function(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.getName = function() {
    return this.name;
}

User.prototype = {
    getName : function() {
        return this.name;
    },

    getAge : function() {
        return this.age;
    }
}

