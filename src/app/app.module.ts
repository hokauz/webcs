import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';

import { HttpClientModule } from '@angular/common/http';
import { BaseModule } from './base/base.module';
import { SampleAComponent } from './pages/sample-a/sample-a.component';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { DefComponent } from './pages/def/def.component';

const ROUTES: Routes = [
  {
    path: '', 
    component: DefComponent
  },
  {
    path: 'test-1',
    loadChildren: () => import('./pages/sample-a/sample-a.module').then(m => m.SampleAModule)
  },
  {
    path: 'test-2',
    loadChildren: () => import('./pages/sample-b/sample-b.module').then(m => m.SampleBModule)
  },
  {
    path: 'test-3',
    loadChildren: () => import('./pages/sample-c/sample-c.module').then(m => m.SampleCModule)
  },
]
@NgModule({
  declarations: [
    AppComponent,
    DefComponent
  ],
  imports: [
    BrowserModule,
    BaseModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  schemas: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
