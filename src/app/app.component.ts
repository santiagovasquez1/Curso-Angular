import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { logging } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'PlatziSquare';
  mapa: Mapboxgl.Map;
  coordinates: any;

  lugares: any = [
    {plan:'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria la gardenia' },
    {plan:'gratuito', cercania: 2, distancia: 20, active: true, nombre: 'Zapateria memo' },
    {plan:'pagado', cercania: 3, distancia: 50, active: true, nombre: 'Donas la pasadita' },
    {plan:'gratuito', cercania: 1, distancia: 5, active: false, nombre: 'Veterinaria Reino bigotes' },
  ];

  ngOnInit() {

    (Mapboxgl as any).accessToken = environment.mapboxKey;

    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-75.3995084, 6.2333972], // starting position
      zoom: 12.5 // starting zoom
    });

    this.crearMarcador(-75.3995084, 6.2333972);
  }

  crearMarcador(Lng: number, Lat: number) {
    const marker = new Mapboxgl.Marker({
      draggable: true
    })
      .setLngLat([Lng, Lat])
      .addTo(this.mapa);

    marker.on('drag', () => {
      console.log(marker.getLngLat())
    })

  }


}

