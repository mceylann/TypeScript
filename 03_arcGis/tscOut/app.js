var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "esri/Map", "esri/views/MapView"], function (require, exports, Map_1, MapView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Map_1 = __importDefault(Map_1);
    MapView_1 = __importDefault(MapView_1);
    class App {
        run() {
            var map = new Map_1.default({
                basemap: "arcgis-streets-night"
            });
            var view = new MapView_1.default({
                map: map,
                container: "MapViewDiv",
                center: [30, 40]
            });
        }
    }
    exports.default = App;
});
