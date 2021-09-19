import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForm: FormGroup;
  weater: any = {};
  result: any = {};
  constructor(private userService:UserService, private fb:FormBuilder) { }

  ngOnInit() {
    this.weatherForm = this.fb.group({
      cityName: [""],
    });
  }
  SearchByCity(){
  console.log("here my city", this.weater);
  this.userService.GetCityWeather(this.weater).subscribe(
    (data)=>
   this.result=data.result
  )
  }
}
