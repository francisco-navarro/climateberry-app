import { Component } from '@angular/core';

import { TemperaturePage } from '../temperature/temperature';
import { DashboardPage } from '../dashboard/dashboard';
import { SettingsPage } from '../settings/settings';
import { Events } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TemperaturePage;
  tab2Root = DashboardPage;
  tab3Root = SettingsPage;

  constructor(public events: Events) {

  }

  tabTemperature(ev) {
    this.events.publish('home:changeTab', Date.now() );
  }
}
