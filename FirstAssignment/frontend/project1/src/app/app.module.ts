import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { OperatorServiceService } from "./operator-service.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [OperatorServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
