// sınırlı seçenekleri tanımlı değerlerle eşleştirme

// default
enum Directions {
    NORTH,
    EAST,
    SOUTH,
    WEST
}

let velocity: [number, Directions] = [11, Directions.EAST];

// değer:
console.log(Directions.NORTH); // 0
console.log(Directions.SOUTH); // 2 

/**
 * enum değerleri defalt olarak 0 dan başlar artarak devam eder
 * eğer bir değere string girişmiş ise ardışık düzen bozulur
 * sonrasında gelen her değer için karşılık girilmelidir
 * 
 * -- zaten eşleme olmayacaksa enum yazma.
 */