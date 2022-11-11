/**
 * Interface -> "implements"
 * Class -> "extends"
 */


abstract class TakePhoto {
    // new'lenemz = constructor olamaz!
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSomething(): string;    
        
}

class Twitter extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number // new field for child class
    ){
        super(cameraMode,filter); // extend oluyor is super yazılmak zorunda.
    }
    getSomething(): string {
        return "Gets you something";
    }

}

//const tp= new TakePhoto("test","test"); //invalid can not create instance of an abstract class
const tw = new Twitter("test","test",11); //valid

