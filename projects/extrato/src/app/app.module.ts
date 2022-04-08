import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { DefComponent } from './pages/def/def.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    DefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: []
})
export class AppModule { 
  constructor(private injector: Injector) {
    const elem = createCustomElement(AppComponent, { injector: this.injector } );
    customElements.define('micro-app-extrato', elem);
  }

  ngDoBootstrap() {}
}
