class Animal{
    animalName: String;
    animalAge: number;

    constructor(animalName: String, animalAge: number){
        this.animalName = animalName;
        this.animalAge = animalAge;
    }

     bio(): void {
        console.log(`animal: ${this.animalName} age: ${this.animalAge} `);
    }
}

let animal = new Animal("Cow", 12);
animal.bio();