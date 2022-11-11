"use strict";
/**
 * Interface -> "implements"
 * Class -> "extends"
 */
class TakePhoto {
    // new'lenemz = constructor olamaz!
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
class Twitter extends TakePhoto {
    constructor(cameraMode, filter, burst // new field for child class
    ) {
        super(cameraMode, filter); // extend oluyor is super yazılmak zorunda.
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSomething() {
        return "Gets you something";
    }
}
//const tp= new TakePhoto("test","test"); //invalid can not create instance of an abstract class
const tw = new Twitter("test", "test", 11); //valid
