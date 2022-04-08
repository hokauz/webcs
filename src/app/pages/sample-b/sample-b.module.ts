import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleBComponent } from './sample-b.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SampleBComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: SampleBComponent }])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SampleBModule { }
