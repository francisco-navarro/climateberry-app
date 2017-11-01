import { Component } from '@angular/core';

import { TemperaturePage } from '../temperature/temperature';
import { LightPage } from '../light/light';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TemperaturePage;
  tab2Root = LightPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
