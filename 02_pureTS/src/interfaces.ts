interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
    generateShareLink(): string
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
    generateShareLink(): string {
        return "Placeholder";
    }
}

let test = new Instagram("alan1","alan2",11);