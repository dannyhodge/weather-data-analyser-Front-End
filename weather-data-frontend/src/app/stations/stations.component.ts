import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Circle, Icon, latLng, Layer, MapOptions, tileLayer } from 'leaflet';
import { Station } from 'src/models/station';
import { ApiService } from '../api.service';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css'],
})
export class StationsComponent implements OnInit {
  stations: Station[] = [];
  layers: Layer[] = [];  
  center: L.LatLng = latLng(53.326492751, -1.507054408);
  zoom: number = 5;

  options: MapOptions = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 5,
    center: this.center,
  };

  geocoder: MapboxGeocoder = new MapboxGeocoder({
    accessToken:
      'pk.eyJ1IjoiZGFubnlob2RnZSIsImEiOiJja3Z6amU1NnAxMmRrMm5xaWthc2dnOTBkIn0._RCYihXx3kVEQWVvbfNfGQ',
  });
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getStationData();
    this.geocoder.addTo('#geocoder-container');

    this.geocoder.on('result', (e) => {
      this.center = latLng(e.result.center[1], e.result.center[0]);
      this.zoom = 8;
    })
  }

  getStationData() {
    this.apiService.getStationGeoms().subscribe((data: Station[]) => {
      data.forEach((element) => {
        var geom: any = JSON.parse(element.geom);
        var coords: any = geom['coordinates'];

        var newCoords: [number, number] = [coords[1], coords[0]];
        geom['coordinates'] = newCoords;

        var marker = new L.Marker(L.GeoJSON.coordsToLatLng(newCoords));
        var icon: Icon = new Icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: '../../assets/images/marker-icon.png',
          shadowUrl: '../../assets/images/marker-shadow.png',
        });
        marker.setIcon(icon);
        marker.bindTooltip(element.name);

        var circle: Circle = new Circle(L.GeoJSON.coordsToLatLng(newCoords), {
          radius: 60000,
        });

        this.layers.push(marker);
        this.layers.push(circle);
      });
      this.stations = data;
    });
  }
}
