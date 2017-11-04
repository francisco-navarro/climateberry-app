import { Component, Input, OnInit } from '@angular/core';

/**
 * Generated class for the ComponentsTempCircleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'temp-circle',
  templateUrl: 'temp-circle.html'
})
export class TempCircleComponent implements OnInit {

  @Input() temp: number;
  classTemp;

  constructor() {}
  
  ngOnInit() {
    if (!isNaN(this.temp)) {
      this.classTemp = Math.round(this.temp/5);
    }
  }

  ngOnChanges() {
    if (!isNaN(this.temp)) {
      this.classTemp = Math.round(this.temp/5);
    }
  }

}
