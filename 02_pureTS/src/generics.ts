const scores: number [] = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number{
    return val;
} // garip

function identityTwo(val: any): any {
    return val;
} // kötü

// asıl konu:
function identityThree<T>(val: T): T {
    return val;
}

/**
 * T ne olursa, işleme alınan da dönülen de o olur
 * ne fark etti any'den ? 
 * generic halde iken daha sonrasında fonksiyonda ne değişirse
 * değişsin giriş/çıkış type aynı kalması zorunlu kılınır
 * hala esnek, ama daha mantıklı kontrollerle.
 */

// örnek kullanım: 
// arg array ine bir şeyler yap, ama her seferinde logla

function logging<T>(arg: Array<T>): Array<T> {

    // islemler vs..
    console.log(typeof arg);
    console.log(arg.length);
    return arg;
}

const testNumbers = [1,1,2,3,5,8];
const testStrings = ["11","clear","archer"]
logging(testNumbers);

logging(testStrings);

/**
 *   Generics & Arrow Functions
 */

const getProductByID = <T,>(products: T[]): T => { // <T,> gösterimi özellikle generic oldugunu belirtmek icin
    // işlemler vs
    let index = 11;
    return products[index];
}


/**
 *   Generic Classes
 * 
 * Neden ? 
 * 
 */

interface Database{
    connection: string,
    username: string,
    passwd: string,
}

// 2. parametre olarak, "herhangi bir şey gelebilir ama Database olmak zorunda"
function randomFunction<T, U extends Database>(valOne: T, valTwo: U ): object{
    return {
        valOne,
        valTwo    
    }
}

randomFunction(11, {connection:"1123", username:"mceylan", passwd:"12346"}); // ok!

export {}