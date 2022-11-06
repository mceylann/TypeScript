// Functions
// js hali normalde her şey any olarak geziyordu, artık kontrol imkanı var

function addTwo(num: number) {
    return num+2;
}

// addTwo("asda"); // olmaz.

addTwo(2)

function signUpUser(name: string,email: string,passwd: string, suspended: boolean) {
    
}

// arrow function with default value

let loginUser = (email: string, passwd: string, paid: boolean = false) => {}

// parametreleri fixledik. Return type nerede hani ? 

function printOp(num1: number, num2: number): string {
    return ("" + num1 + " + " + num2);
}

// bir şey dönmeyecekse de yine void olarak belirtmeye devam
function consoleError(err: string): void {
    console.log(err);
}

function handleErrpr(err: string): never{
    throw new Error(err);
}

export {}