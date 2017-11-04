import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { TemperatureService } from '../../app/services/temperature.service';

@Component({
  selector: 'page-temperature',
  templateUrl: 'temperature.html'
})
export class TemperaturePage {

  desired : Number = 0;
  actual : Number = 0;
  outside : Number = 0;
  connected : Boolean = false;

  constructor(public navCtrl: NavController, private tempService : TemperatureService, public events: Events) {
    this.refresh();
    events.subscribe('home:changeTab', (time) => {
      this.refresh();
    });
  }

  setTemp() {
    this.tempService.put(this.desired).subscribe(value => {
      this.desired = Math.round(value.desired);
      this.actual = Math.round(value.actual);
    },
    error => this.connected = false);
  }

  refresh() {
    console.log('TemperaturePage refresh');
    this.tempService.get().subscribe(value => {
      this.desired = Math.round(value.desired);
      this.actual = Math.round(value.actual);
      this.outside = Math.round(value.outside);
      this.connected = true;
    }, error => {
      this.connected = false
    });
  }

}
