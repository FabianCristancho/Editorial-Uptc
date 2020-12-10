import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-fast-navigation',
  templateUrl: './fast-navigation.component.html',
  styleUrls: ['./fast-navigation.component.css']
})
export class FastNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.sidenav').sidenav();
  }
}
