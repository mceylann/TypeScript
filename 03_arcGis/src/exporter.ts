import { IApp } from "./types";
import { data } from "./data";
import GeoJSONLayer from "esri/layers/GeoJSONLayer";
import { SimpleRenderer } from "esri/renderers";
import SimpleFillSymbol from "esri/symbols/SimpleFillSymbol";
import { SimpleLineSymbol } from "esri/symbols";
import Graphic from "esri/Graphic";
import Point from "esri/geometry/Point";
import Extent from "esri/geometry/Extent";

export class Exporter {
  constructor(private app: IApp) {}

  public async CreateLayer(): Promise<GeoJSONLayer> {
    // create a new blob from geojson featurecollection
    const blob = new Blob([JSON.stringify(data)], {
      type: "application/json",
    });

    // URL reference to the blob
    const url = URL.createObjectURL(blob);
    // create new geojson layer using the blob url
    const layer = new GeoJSONLayer({
      url: url,
      renderer: new SimpleRenderer({
        symbol: new SimpleFillSymbol({
          color: [0, 0, 0, 0],
          outline: new SimpleLineSymbol({
            color: [255, 0, 0, 1],
            width: 2,
          }),
        }),
      }),
    });

    await layer.load();

    //this.app.addLayer(layer);

    return layer;
  }

  public async Run(): Promise<void> {
    var layer = await this.CreateLayer();

    var fSet = await layer.queryFeatures();

    let i = 0;
    for(let f of fSet.features){
      i++;
      if ( i > 15 && i<31) {
        await this.ExportGraphic(f,i);
      }
    }

  }

  public async ExportGraphic(f: Graphic, i: number): Promise<void> {
    var extent = f.geometry.extent.expand(1.1);
    var wh = Math.max(extent.width, extent.height)/2;
    var e = new Extent({
      xmin: extent.center.x-wh,
      xmax: extent.center.x+wh,
      ymin: extent.center.y-wh,
      ymax: extent.center.y+wh,
      spatialReference: extent.spatialReference
    })
    var view = this.app.View;
    var layer = view.map.basemap.baseLayers.getItemAt(0) as __esri.WebTileLayer;
    await view.goTo(e);

    return new Promise((resolve,reject)=>{

      var hnd2 = view.watch(
        "updating",
        (newValue: boolean, oldValue: boolean) => {
          if (oldValue == true && newValue == false) {
            console.log("Downloading..");
            hnd2.remove();
            this.triggerDownload(e, view, i.toString()+".jpg").then(()=>{
              resolve();
            }).catch(()=>{ reject()}); 
          }
        }
      );

    });

  }

  private getImageURL(screenshot: __esri.Screenshot) {
    const imageData = screenshot.data;

    // to add the text to the screenshot we create a new canvas element
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.height = imageData.height;
    canvas.width = imageData.width;

    // add the screenshot data to the canvas
    context.putImageData(imageData, 0, 0);

    return canvas.toDataURL();
  }

  public downloadImage(filename: string, dataUrl: string) {
    var ws = window as any;
    // the download is handled differently in Microsoft browsers
    // because the download attribute for <a> elements is not supported
    if (!ws.navigator.msSaveOrOpenBlob) {
      // in browsers that support the download attribute
      // a link is created and a programmatic click will trigger the download
      const element = document.createElement("a");
      element.setAttribute("href", dataUrl);
      element.setAttribute("download", filename);
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    } else {
      // for MS browsers convert dataUrl to Blob
      const byteString = atob(dataUrl.split(",")[1]);
      const mimeString = dataUrl.split(",")[0].split(":")[1].split(";")[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ab], { type: mimeString });

      // download file
      ws.navigator.msSaveOrOpenBlob(blob, filename);
    }
  }

  public async triggerDownload(extent: __esri.Extent, view: __esri.MapView, filename: string) {
    var pMin = new Point({
      x: extent.xmin,
      y: extent.ymin,
      spatialReference: extent.spatialReference,
    });

    var pMax = new Point({
      x: extent.xmax,
      y: extent.ymax,
      spatialReference: extent.spatialReference,
    });

    var sMin = view.toScreen(pMin);
    var sMax = view.toScreen(pMax);

    var ss = await view.takeScreenshot({
      area: {
        x: Math.min(sMin.x, sMax.x),
        y: Math.min(sMin.y, sMax.y),
        width: Math.abs(sMax.x - sMin.x),
        height: Math.abs(sMax.y - sMin.y),
      },
      format: "jpg",
    });

    console.log(ss);

    this.downloadImage(filename, this.getImageURL(ss));
  }
}
