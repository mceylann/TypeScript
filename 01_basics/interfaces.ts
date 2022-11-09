interface User {
    readonly id: number,
    name: string,
    email: string,
    googleID?: string,
    startTrial(): boolean
}

const customer: User = {
    id: 11, 
    name: "mehmet", 
    email:"m@c.com",
    startTrial() {
        return true;
    },
};

// runtime da değişebilir
customer.email = "newmail@c.com";

// readonly her türlü sabit değeri inherite eder
// customer.id = 10; // read-only property error