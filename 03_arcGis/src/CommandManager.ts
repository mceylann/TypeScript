import { CommandIzmır, CommandSuprise, GetRoofPictures } from "./commands";
import { IApp, ICommand } from "./types";

export default class CommandManager {

    private m_cmdMap: Map<string, ICommand>

    constructor(
        private app: IApp
    ){}

    public init (){

        this.m_cmdMap = new Map();
        this.registerCmd(new CommandIzmır(this.app));
        this.registerCmd(new CommandSuprise(this.app));
        this.registerCmd(new GetRoofPictures(this.app));

        var buttons = document.querySelectorAll(".ToolBar button");
        for(let btn of buttons){
            btn.addEventListener("click",(ev)=>{
                var b = ev.currentTarget as HTMLButtonElement;
                var id = b.getAttribute("data-cmdid");
                var cmd = this.m_cmdMap.get(id);
                if (cmd) {
                    cmd.run();
                }
            });
        }
    }

    private registerCmd(cmd: ICommand){
        this.m_cmdMap.set(cmd.id,cmd);
    }
}