"use strict";
class User {
    constructor(name, email) {
        this.city = "random value"; // ya initialize et ya da constructor a dahil et!
        this.name = name;
        this.email = email;
    }
}
const mhmt = new User("mehmet", "m@c.com");
mhmt.city = "Ankara";
// public/private access control
class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
const person = new Person("Pino", "C12/12");
// person.name -> error
let pname = person.getName();
let addr = person.address; // OK - public att.
