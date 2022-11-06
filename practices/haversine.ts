type Location = {
    readonly lat: number,
    readonly lon: number
}

function toRad(Value: number): number {
    return Value * Math.PI / 180;
}

function getDistance(p1:Location, p2:Location): number { // Haversine
    var R = 6371; // km
    var dLat = toRad(p2.lat-p1.lat);
    var dLon = toRad(p2.lon-p1.lon);
    var lat1 = toRad(p1.lat);
    var lat2 = toRad(p2.lat);

    // hav(x) = sin(x/2)*sin(x/2)
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d;
}

// test inputs:
const Manhattan: Location = {lat: 40.7772, lon: -73.9661};
const London: Location = {lat: 51.4847, lon: -0.1279};

let distance = getDistance(Manhattan,London);

console.log(distance); // ~5564


export {}