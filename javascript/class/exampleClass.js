export const exampleData = [2, 8, 11, 15]
export const exampleNames = [
    'John Doe',
    'Helena Gilbert',
    'Ernest Khalimov',
    'Gigachad',
    'Mister Mohsi'
]

export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }
    makeNoise(sound = '(breathing noise)') {
        console.log(sound)
    }
    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`
    }
}

export class SomeClass {
    static pi() {
        return 3.14159265359;
    }
}

export class Canine extends Animal {
    makeNoise(sound = "Woof!") {
        console.log(sound)
    }
}