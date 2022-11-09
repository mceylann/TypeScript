class User {
    name: string;
    email: string;
    city: string = "random value"; // ya initialize et ya da constructor a dahil et!
    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }
    
}

const mhmt = new User("mehmet","m@c.com");
mhmt.city = "Ankara";

// public/private access control

class Person {
    private name: string;
    public address: string;
    public constructor(name: string, address: string) {
      this.name = name;
      this.address = address;
    }
  
    public getName(): string {
      return this.name;
    }

    public setName(name: string){
        this.name = name;
    }
}

const person = new Person("Pino","C12/12");

// person.name -> error
let pname = person.getName();
let addr = person.address; // OK - public att.