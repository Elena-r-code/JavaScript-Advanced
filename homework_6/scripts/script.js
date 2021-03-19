let arrayOfPeople = [new Person("Elena", "Betinska", 22, 1),new Person("Ana", "Stojkova", 25, 2),new Person("Martin", "Stojanov", 24, 3),new Person("Ivan", "Ivanov", 30, 4),new Person("Sara", "Jovanoca", 23, 5)];

let arrayOfColors = ["white", "black", "brown", "orange", "brown"];

function Person(fName, lName, age, id){
    this.id = id;
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.getFullName = function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

function Animal(name, age){
    this.name =name;
    this.age = age;
    this.eat = function(){
        console.log("Eating");
    }
    this.sleep = function(){
        console.log("Sleeping");
    }
}

function Cat(color, name, age, ownerId){
    Object.setPrototypeOf(this, new Animal(name, age));
    this.color = color;
    this.ownerId = ownerId;
    this.meow = function(){
        console.log(`The cat ${this.name} says MEOW!`);
    }
    this.printOwnerDetails = function(owner){
        if (this.ownerId == owner.id){
            console.log(`Owner: ${this.name}`);
            owner.getFullName();
        }
        if(this.ownerId != owner.id){
            console.log(`No owners.`);
            return;
        }
    }
}

let firstCat = new Cat(arrayOfColors[0], "Jimmy",3, 2);
let secondCat = new Cat(arrayOfColors[2], "Channel", 5, 4);
firstCat.eat();
secondCat.sleep();
console.log(firstCat);
console.log(secondCat);

function PersianCat(eyeColor, color, name, age, ownerId){
    Object.setPrototypeOf(this, new Cat(color, name, age, ownerId));
    this.eyeColor =eyeColor;
    this.furDescription = function(){
        console.log(`The cat ${this.name} has full fur!`);
    }
}

let persianCat = new PersianCat("blue", arrayOfColors[3], "Emma", 5, 2);
persianCat.meow();
persianCat.furDescription();
console.log(persianCat);



function RagDollCat(weight, isFriendly, color, name, age, ownerId){
    Object.setPrototypeOf(this, new Cat(color, name, age, ownerId));
    this.weight = weight;
    this.isFriendly = isFriendly;
    this.printPersonality = function(type){
        if(type === true){
            this.isFriendly = true;
            console.log(`This cat ${this.name} is friendly!`);

        }
        else {
            this.isFriendly = false;
            console.log(`This cat ${this.name} is not friendly`);

        }
    }
}

let firstRagDollCat = new RagDollCat(30, false, arrayOfColors[4], "Leo", 3,4);
let secondRagDollCat = new RagDollCat(20, true, arrayOfColors[1], "Amelia", 5, 1);

firstRagDollCat.printOwnerDetails(arrayOfPeople[1]);

firstRagDollCat.printPersonality(firstRagDollCat.isFriendly);
console.log(firstRagDollCat);
secondRagDollCat.printPersonality(secondRagDollCat.isFriendly);
console.log(secondRagDollCat);





