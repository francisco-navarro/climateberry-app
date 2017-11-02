import { Component } from '@angular/core';

import { TemperaturePage } from '../temperature/temperature';
import { LightPage } from '../light/light';
import { SettingsPage } from '../settings/settings';
import { Events } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TemperaturePage;
  tab2Root = LightPage;
  tab3Root = SettingsPage;

  constructor(public events: Events) {

  }

  tabTemperature(ev) {
    this.events.publish('home:changeTab', Date.now() );
  }
}
