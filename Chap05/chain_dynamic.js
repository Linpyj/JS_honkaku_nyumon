var Animal = function() {};
Animal.prototype = {
    walk : function() {
        console.log('トコトコ...');
    }
};

var SuperAnimal = function() {};
SuperAnimal.prototype = {
    walk : function() {
        console.log('ダダダダダ！');
    }
};

var Dog = function() {};
Dog.prototype = new Animal();  // Animalオブジェクトを継承
var d1 = new Dog();
d1.walk();

Dog.prototype = new SuperAnimal(); // SuperAnimalオブジェクトを継承
var d2 = new Dog();
d2.walk();
d1.walk();