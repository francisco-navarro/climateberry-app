import { Injectable } from "@angular/core";

@Injectable()

export class SettingsService {

  values = {
    API_HOST: '/endpoints/'
  };

  constructor() {}

  public get(key) {
    return this.values[key];
  }

  public set(key, value) {
    return this.values[key] =  value;
  }

  public getProps() {
    return this.values;
  }
}
