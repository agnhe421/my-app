import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { SidebarModule } from 'ng-sidebar'; 
import 'rxjs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    NgbModule, 
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent, SidebarComponent]
})
export class AppModule { }
