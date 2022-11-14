var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("commands", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommandSuprise = exports.CommandIzmır = void 0;
    class CommandIzmır {
        app;
        id;
        constructor(app) {
            this.app = app;
            this.id = "izmir";
        }
        run() {
            this.app.goTo(26, 39);
        }
    }
    exports.CommandIzmır = CommandIzmır;
    class CommandSuprise {
        app;
        id;
        constructor(app) {
            this.app = app;
            this.id = "suprise";
        }
        run() {
            this.app.goTo(11, 52);
        }
    }
    exports.CommandSuprise = CommandSuprise;
});
define("CommandManager", ["require", "exports", "commands"], function (require, exports, commands_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class CommandManager {
        app;
        m_cmdMap;
        constructor(app) {
            this.app = app;
        }
        init() {
            this.m_cmdMap = new Map();
            this.registerCmd(new commands_1.CommandIzmır(this.app));
            this.registerCmd(new commands_1.CommandSuprise(this.app));
            var buttons = document.querySelectorAll(".ToolBar button");
            for (let btn of buttons) {
                btn.addEventListener("click", (ev) => {
                    console.log("düştü");
                    var b = ev.currentTarget;
                    var id = b.getAttribute("data-cmdid");
                    var cmd = this.m_cmdMap.get(id);
                    if (cmd) {
                        cmd.run();
                    }
                });
            }
        }
        registerCmd(cmd) {
            this.m_cmdMap.set(cmd.id, cmd);
        }
    }
    exports.default = CommandManager;
});
define("app", ["require", "exports", "esri/Graphic", "esri/layers/GraphicsLayer", "esri/Map", "esri/views/MapView", "CommandManager"], function (require, exports, Graphic_1, GraphicsLayer_1, Map_1, MapView_1, CommandManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Graphic_1 = __importDefault(Graphic_1);
    GraphicsLayer_1 = __importDefault(GraphicsLayer_1);
    Map_1 = __importDefault(Map_1);
    MapView_1 = __importDefault(MapView_1);
    CommandManager_1 = __importDefault(CommandManager_1);
    class App {
        m_map;
        m_view;
        m_cmdManager;
        constructor() {
            this.m_cmdManager = new CommandManager_1.default(this);
        }
        run() {
            this.m_map = new Map_1.default({
                basemap: "streets-night-vector"
            });
            this.m_view = new MapView_1.default({
                map: this.m_map,
                container: "MapViewDiv",
                center: [30, 40],
                zoom: 10
            });
            this.m_cmdManager.init();
            var g = new Graphic_1.default();
            var gl = new GraphicsLayer_1.default();
        }
        goTo(x, y) {
            this.m_view.goTo([x, y]);
        }
    }
    exports.default = App;
});
define("startup", ["require", "exports", "app"], function (require, exports, app_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    app_1 = __importDefault(app_1);
    var app = new app_1.default();
    app.run();
    console.log("start up aktif\n");
});
