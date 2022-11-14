export interface ICommand {
    id: string;
    run():void;
}

export interface IApp{
    goTo(x: number, y: number):void
}