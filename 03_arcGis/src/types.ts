import MapView from "esri/views/MapView";

export interface ICommand {
  id: string;
  run(): void;
}

export interface IApp {

  get View(): MapView;

  goTo(x: number, y: number): void;
  addLayer(layer: __esri.Layer): void;
  getPictures(): void;
}
