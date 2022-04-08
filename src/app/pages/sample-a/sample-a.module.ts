import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleAComponent } from './sample-a.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SampleAComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: SampleAComponent }])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SampleAModule { }
