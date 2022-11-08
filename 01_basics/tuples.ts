// JS den farklı olarak sadece burada olan bir yapı
// union özelliklerinde x ya da y ya da z tipi ifadesi yerine
// tuple için: SIRASI İLE x-y-z tipleri olacağını belirtir
// union = either way vs tuple = precise order

let rgb: [number, number, number] = [255,55,55];

type RGB = [number, number, number];

const white: RGB = [255,255,255];

// içerik kuralları ayrı tanımlansa da tuple yapısı standart js array
// fonksiyonları ile saçma saçma çalışabiliyor dikkat et
