import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsService } from '../../app/services/settings.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  values;

  constructor(public navCtrl: NavController, private settings : SettingsService) {
    this.values = this.settings.getProps();
  }

}
