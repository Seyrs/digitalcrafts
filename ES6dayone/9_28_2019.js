class Animal {
    constructor(name, species) {
        this.coat = 'furry';
        this.name = name;
        this.breed = breed;
    }
    eat() {
        this.hungry = false;
    }
    playWith(animal) {
        //console.log(typeof animal) would give object animal
        console.log(`${this.name} is playing with ${animal.name}`)
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name, 'Dog')
    }
    bark() {
        console.log('Woof!');
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name, 'Cat')
        
    }
    meow() {
        console.log('meow!');
    }
}

let pet = new Dog('Fido');
let pet2 = new Cat ('Baxter');


pet.playWith(pet2); //Fido is playing with Baxter


pet.eat();
pet.bark();

pet2.eat();
pet2.meow();

console.log(pet.name);
console.log(pet2.name);

 