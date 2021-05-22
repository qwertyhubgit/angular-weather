import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WeatherService implements OnInit {
  data: any = []

  constructor(private http: HttpClient) { }

  fetchData(name: string): any {
    console.log(name, 'from service')
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${ name }&lang=en&appid=e37756d78f5f0989d1c737dda012668e`)
  }

  ngOnInit() {
    
  }
}
