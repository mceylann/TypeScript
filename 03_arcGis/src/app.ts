import { Geometry, Point } from "esri/geometry";
import Polyline from "esri/geometry/Polyline";
import Graphic from "esri/Graphic";
import GraphicsLayer from "esri/layers/GraphicsLayer";
import esriMap from "esri/Map";
import SimpleMarkerSymbol from "esri/symbols/SimpleMarkerSymbol";
import MapView from "esri/views/MapView";
import Sketch from "esri/widgets/Sketch";
import { data } from "./data";

import CommandManager from "./CommandManager";
import { IApp } from "./types";
import { Exporter } from "./exporter";
import WebTileLayer from "esri/layers/WebTileLayer";
import TileInfo from "esri/layers/support/TileInfo";
import Basemap from "esri/Basemap";

export default class App implements IApp {
  private m_map: esriMap;
  private m_view: MapView;
  private m_cmdManager: CommandManager;
  private m_gLayer: GraphicsLayer;
  private m_drawGLayer: GraphicsLayer;
  private m_exporter: Exporter;

  constructor() {
    this.m_cmdManager = new CommandManager(this);
  }

  public get View(): MapView {return this.m_view}

  public run() {
    this.m_gLayer = new GraphicsLayer(); // 1
    this.m_drawGLayer = new GraphicsLayer();

    this.m_map = new esriMap({
      //basemap: "streets-vector",
      basemap: this.createBaseMap(),
      layers: [this.m_gLayer, this.m_drawGLayer] // 2 --> BURAYI SOR !! 1+2 ile toolun çalışması / seçimlerin map üstünde kalmaması ilişkisini tam anla
    });

    this.m_view = new MapView({
      map: this.m_map,
      container: "MapViewDiv", // index tarafında "id si bu olan bir div" temsilen
      center: [-122.5 , 38],
      zoom: 9
    });

    // Sketch tool
    this.m_view.when(() => {
      const sketch = new Sketch({
        layer: this.m_gLayer,
        view: this.m_view,
        creationMode: "continuous"
      });

      this.m_view.ui.add(sketch, "bottom-right");

    });

    var exporter = new Exporter(this);
    // exporter.Run();

    this.AddPointGraph();
    this.m_cmdManager.init();
  }

  // IApp methods
  public goTo(x: number, y: number) {
    this.m_view.goTo([x, y]);
  }

  public addLayer(layer: __esri.Layer): void {
    this.m_map.add(layer);
  }

  public getPictures(){
    this.m_exporter = new Exporter(this);
    this.m_exporter.Run();
  }
  // IApp methods

  public createBaseMap(): __esri.Basemap {
    var webTileLayer = new WebTileLayer({
			urlTemplate: "https://mts{subDomain}.google.com/vt/lyrs=y&x={col}&y={row}&z={level}",
			subDomains: ['0', '1', '2', '3'],
			tileInfo: TileInfo.create()
		});
		var baseMap = new Basemap({
			//title: "Google RoadMap",
			//thumbnailUrl: "http://mts3.google.com/vt/lyrs=m@206000000&hl=en&src=app&x=2377&y=1535&z=12",
			baseLayers: [webTileLayer],
			id: "googleLayers"
		});

    return baseMap;

  }

  // deneme
  public AddPointGraph(){

  const pointGraphic = new Graphic({
    geometry: new Point({x:39, y:32}),
    symbol: new SimpleMarkerSymbol(),
  });

  this.m_view.graphics.add(pointGraphic);

  }

}