import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

@Component({
  
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private _opened: boolean = false;
  
  private openSidebar() {
    this._opened = true;
    console.log('_opened', this._opened);
   }

  private closeSidebar() {
    this._opened = false;
    console.log('_opened', this._opened);
   }

  constructor() { }

  ngOnInit() {

  }

}
