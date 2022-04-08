import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleCComponent } from './sample-c.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SampleCComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: SampleCComponent }])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SampleCModule { }
