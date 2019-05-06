import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfigModule } from './appconfig.module';

import { AppConfigService } from './_services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // app comfiguration module
    AppConfigModule

  ],
  providers: [ AppConfigService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
