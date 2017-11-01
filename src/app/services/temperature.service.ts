import {Http, Headers} from "@angular/http";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'

@Injectable()

export class TemperatureService {

  API: string = 'http://192.168.1.129:8080/api/';

  constructor(private http: Http) {}

  public get() : Observable<any> {
    return this.http.get(this.API + 'temperature')
      .map(res => res.json());
  }
}
