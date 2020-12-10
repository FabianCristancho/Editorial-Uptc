import { Component, OnInit } from '@angular/core';

declare var $:any; 

@Component({
  selector: 'app-nav-bar-encabezado1',
  templateUrl: './nav-bar-encabezado1.component.html',
  styleUrls: ['./nav-bar-encabezado1.component.css']
})
export class NavBarEncabezado1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.sidenav').sidenav();
  }

}
