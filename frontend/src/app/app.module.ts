import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AboutComponent} from "./about/about.component";
import {MainComponent} from "./main/main.component";
import {ListComponent} from "./list/list.component";
import {HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import {HttpErrorHandler} from "./http-error-handler.service";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
  ],
  providers: [HttpErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
