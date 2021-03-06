import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { ComponentsModule } from '../components/components.module';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { TemperaturePage } from '../pages/temperature/temperature';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TemperatureService } from './services/temperature.service';
import { SettingsService } from './services/settings.service';
import { AwsIotService } from './services/aws-iot.service';

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    TemperaturePage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    TemperaturePage,
    SettingsPage,
    TabsPage
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TemperatureService,
    SettingsService,
    AwsIotService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
