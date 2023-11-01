// Class for Person Data
class Person {
    #name; // private name of a person
    #age; // private age of a person

    // constructor for person class
    constructor(name, age) {
      this.#name = name;
      this.#age = age;
    }

    // fuction for getting person name
    getName() {
        return this.#name
    }

    // fuction for getting person age
    getAge() {
        return this.#age
    }

    // fuction for setting person name
    setName(name) {
        this.#name = name
    }

    // fuction for setting person age
    setAge(age) {
        this.#age = age;
    }

}

export default Person