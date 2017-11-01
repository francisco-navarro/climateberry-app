import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-temperature',
  templateUrl: 'temperature.html'
})
export class TemperaturePage {

  desired = 33;

  constructor(public navCtrl: NavController) {

  }

}
