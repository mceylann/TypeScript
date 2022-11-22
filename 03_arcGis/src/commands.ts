import { IApp, ICommand } from "./types";

export class CommandIzmır implements ICommand {
  id: string;
  constructor(private app: IApp) {
    this.id = "izmir";
  }

  public run(): void {
    this.app.goTo(26, 39);
  }
}

export class CommandSuprise implements ICommand {
  id: string;

  constructor(private app: IApp) {
    this.id = "suprise";
  }

  public run(): void {
    let x = Math.floor(Math.random() * 45) + 1;
    let y = Math.floor(Math.random() * 45) + 1;
    this.app.goTo(x, y);
  }
}

export class GetRoofPictures implements ICommand {
  id: string;

constructor(
  private app: IApp
){
  this.id = "Get-Pictures";
}

  public run(): void {
    this.app.getPictures();
  }

}
