import { Injectable } from "@angular/core";

@Injectable()

export class SettingsService {

  values = {
    API_HOST: '192.168.1.129:8080'
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
