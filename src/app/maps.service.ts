import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

interface Location{
  latitude:string;
  longitude:string;
}


@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  data = {
    mac_address:"98:fe:94:4a:98:3c"
  }
  getLocation() {
    const headers = new HttpHeaders().set('Authorization', 'API KEY');
    return this.http.post<Location>('https://www.googleapis.com/geolocation/v1/geolocate?key=API KEY',this.data, { headers }).subscribe((data) => {
      console.log(data);
      return data
    })
  }

}
