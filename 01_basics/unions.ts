// for cases with alternative variable types
// mümkün olduğunca minimal seçenek ile çöz tadı kaçmasın
let score: number | string = 33;

score = 44;
score = "44";

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let mehmet: User | Admin = {name: "mehmet", id: 11}; // username değil name verildi!

console.log(typeof mehmet);


// --- Functions ---

function getDbID(id: number | string) {
    // id.toLowerCase(); // zırlar.
    if (typeof id === "string") {
        id.toLowerCase(); // artık sıkıntı yok.       
    }
}

// --- Array ---

const data: ( number | string | boolean )[] = ["1",false,3];

// --- Value fixing ---
// type olarak değil "değişken" olarak değer sınırlandırma:

let seat: "aisle" | "middle" | "window";

seat = "middle";
// seat = "hata"; // zırlar!
