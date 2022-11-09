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
