import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HwAppModule } from './hw-app/hw-app.module';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HwAppModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
