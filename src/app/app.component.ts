import { Component } from '@angular/core';
import { MapsService } from './maps.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat:string = '';
  lng:string = '';

  locatin:Object;

  constructor(private map:MapsService){}

  ngOnInit() {
    console.log(this.map.getLocation());
  }
}
