import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TempCircleComponent } from './temp-circle/temp-circle';
@NgModule({
	declarations: [TempCircleComponent],
	imports: [],
	exports: [TempCircleComponent],
	schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ComponentsModule {}
