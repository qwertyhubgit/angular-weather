import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  name: string = "London"
  info: any = []
  loading = false
  warning: string = ""

  constructor(public weatherService: WeatherService) { }

  getData(name: string) {
    this.info = []
    this.loading = true
    setTimeout(() => this.weatherService.fetchData(name)
    .subscribe((response: any) => {
      this.info = response
      this.loading = false
      console.log(this.info)
    },
    (error: any) => {
      this.warning = "Unknown error, try again!"
      this.loading = false
    }), 2000)
  }
  closeErr() {
    this.warning = ""
  }
  ngOnInit(): void {}
}
