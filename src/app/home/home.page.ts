import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  constructor() { }
  //ngOnInit() {
  //}

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([-7.00485939336636, 110.42606920039248], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([-7.00485939336636, 110.42606920039248]).addTo(this.map)
      .bindPopup('Semarang')
      .openPopup();


    // Tambahkan tampilan peta dasar OpenStreetMap
    const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    const opentopomapLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: '&copy; <a href="https://opentopomap.org/about.html">OpenTopoMap</a> contributors'
    });
    const googleMapsLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: '&copy; Google Maps'
    });

    // Buat objek layer control
    const baseMaps = {
      'OpenStreetMap': osmLayer,
      'Google Maps': googleMapsLayer,
    };
  

    // Tambahkan layer control ke peta
    L.control.layers(baseMaps).addTo(this.map);

    osmLayer.addTo(this.map);
  }


}