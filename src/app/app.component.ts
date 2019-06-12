import { Component } from '@angular/core';
import { MapsService } from './maps.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat:number;
  lng:number;

  locatin:Object;

  constructor(private map:MapsService){}

  ngOnInit() {
    this.map.getLocation().subscribe(data => {
      this.lat = data['location']['lat']
      this.lng = data['location']['lng']
    });
  }
}
