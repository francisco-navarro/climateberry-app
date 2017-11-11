import {Http} from "@angular/http";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { SettingsService } from "./settings.service";
import 'rxjs/add/operator/map'

import { DeviceOptions } from "aws-iot-device-sdk";

@Injectable()
export class TemperatureService {

  constructor(private http: Http, private settings : SettingsService) {}

  public get() : Observable<any> {
    return this.http.get(this.getUri())
      .map(res => res.json());
  }

  public put(value) : Observable<any> {
    return this.http.put(this.getUri(), {
      desired: value
    }).map(res => res.json());
  }

  public getUri() {
    return this.settings.get('API_HOST') + '/api/temperature';
  }
}
