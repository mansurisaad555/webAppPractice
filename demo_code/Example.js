var Animal = /** @class */ (function () {
    function Animal(animalName, animalAge) {
        this.animalName = animalName;
        this.animalAge = animalAge;
    }
    Animal.prototype.bio = function () {
        console.log("animal: ".concat(this.animalName, " age: ").concat(this.animalAge, " "));
    };
    return Animal;
}());
var animal = new Animal("Cow", 12);
animal.bio();
