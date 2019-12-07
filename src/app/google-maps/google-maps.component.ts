import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker, icon } from 'leaflet';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent implements OnInit {
  
  map: any;
  //@ViewChild('map') mapElement: ElementRef; 
   
  
  constructor() {
  }

  ngOnInit() {
    //this.iniMap();
    this.loadmap();
  }

  iniMap(){
    // let coords = new google.maps.LatLng(45,100);
    // let mapOptions: google.maps.MapOptions = {
    //   center: coords,
    //   zoom: 14,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // }

    //this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions)

  }

  loadmap() {
    setTimeout(() => {
      this.map = new Map('map').setView([22.1340084, -100.985055], 14);
      
      // tslint:disable-next-line
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom: 18}).addTo(this.map);
           
      let greenIcon = icon({
          iconUrl: 'https://cdn0.iconfinder.com/data/icons/mono2/100/pin-512.png',
          iconSize: [38, 38],
          popupAnchor: [-3, -76]
      });

      marker([22.1340084, -100.985055], {icon: greenIcon}).addTo(this.map);

      /*marker([22.1340084, -100.985055]).addTo(this.map)
      .bindPopup('<img src="https://cdn0.iconfinder.com/data/icons/mono2/100/pin-512.png">')
      .openPopup();*/

      //marker([22.1647257, -101.0387027]).addTo(this.map).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();
      
    }, 50);
  }

}
