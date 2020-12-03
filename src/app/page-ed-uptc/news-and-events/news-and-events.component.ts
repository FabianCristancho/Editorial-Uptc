import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-news-and-events',
  templateUrl: './news-and-events.component.html',
  styleUrls: ['./news-and-events.component.css']
})
export class NewsAndEventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.carousel').carousel();
  }

}
