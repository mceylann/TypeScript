// Objects

const User = {
    name: "mehmet",
    email: "mc@m.com",
    active: true
};

function createUser({name: string, paid:boolean}) {
}

createUser({name:"dan", paid:false});

// fonksiyon obje dönecekse nasıl olacak ? 
// function returnObject():{} { return {} };

function createTask():{name: string, date: string}{
    // random işler...
    return {name: "ts", date: "14.11"}; 
}

// Type Aliases
// kendi type yapını ekleme

type Location = {
    readonly lat: number,
    readonly lon: number
}

export {}