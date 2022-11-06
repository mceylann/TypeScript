let test: string = "Test String";

let num: number = 6;
test = test.toUpperCase();
console.log(test + num);

// Primitive Types

// number

let distance: number = 65535;

// boolean

let isLoggedIn: boolean = false;

// Type Inference: tip belirtmeleri abartma!
// ex:
let a: number = 11
let b = 3.14
// Eğer değişken tanımlandığı gibi initialize edilecek ise TS tipini kendi fixler.
// Bu durumda b için yazılan ifade yeterli.

// any : aslında tipten ziyade bir işaret -> "bunun tipini kontrol etme!"
// not: tsconfig içerisinde noImplicitAny flag ini aç. demiş döküman...

let hero;

function getHero(){
    return 3; // istediğini döndür, hero alır.
}

hero = getHero(); 
export{}