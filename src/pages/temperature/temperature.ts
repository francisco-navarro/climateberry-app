import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TemperatureService } from '../../app/services/temperature.service';

@Component({
  selector: 'page-temperature',
  templateUrl: 'temperature.html'
})
export class TemperaturePage {

  desired = 33;
  actual = 22;

  constructor(public navCtrl: NavController, private tempService : TemperatureService) {
    tempService.get().subscribe(value => {
      this.desired = Math.round(value.desired);
      this.actual = Math.round(value.actual);
    });
  }
  

}
