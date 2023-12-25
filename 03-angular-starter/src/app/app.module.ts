import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { Message2Component } from './message2/message2.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    Message2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
