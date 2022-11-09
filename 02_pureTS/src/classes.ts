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
