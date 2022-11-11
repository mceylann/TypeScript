"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scores = [];
const names = [];
function identityOne(val) {
    return val;
} // garip
function identityTwo(val) {
    return val;
} // kötü
// asıl konu:
function identityThree(val) {
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
function logging(arg) {
    // islemler vs..
    console.log(typeof arg);
    console.log(arg.length);
    return arg;
}
const testNumbers = [1, 1, 2, 3, 5, 8];
const testStrings = ["11", "clear", "archer"];
logging(testNumbers);
logging(testStrings);
