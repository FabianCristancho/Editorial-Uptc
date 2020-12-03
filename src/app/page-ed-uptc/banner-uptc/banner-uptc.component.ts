import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-banner-uptc',
  templateUrl: './banner-uptc.component.html',
  styleUrls: ['./banner-uptc.component.css']
})
export class BannerUptcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.slider').slider();
  }

}
