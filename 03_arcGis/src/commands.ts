import { IApp, ICommand } from "./types";

export class CommandIzmır implements ICommand{

    id: string;
    constructor(private app: IApp) {
        this.id = "izmir";
    }

    public run(): void {
        this.app.goTo(26,39);
    }
}

export class CommandSuprise implements ICommand{

    id: string;

    constructor(
        private app:IApp
    ){
        this.id = "suprise";
    }

    public run(): void {
        this.app.goTo(11,52);
    }
}