import Graphic from "esri/Graphic";
import GraphicsLayer from "esri/layers/GraphicsLayer";
import esriMap from "esri/Map";
import MapView from "esri/views/MapView";
import CommandManager from "./CommandManager";
import { IApp } from "./types";

export default class App implements IApp{

    private m_map: esriMap;
    private m_view: MapView;
    private m_cmdManager: CommandManager;

    constructor(){
        this.m_cmdManager = new CommandManager(this);
    }

    public run(){

        this.m_map = new esriMap({
            basemap: "streets-night-vector"
        });

        this.m_view = new MapView({
            map: this.m_map,
            container: "MapViewDiv", // index tarafında "id si bu olan bir div" temsilen
            center: [30,40],
            zoom: 10
        });

        this.m_cmdManager.init();

        var g = new Graphic();

        var gl = new GraphicsLayer();

    }

    public goTo(x: number, y: number){
        this.m_view.goTo([x,y]);
    }



}