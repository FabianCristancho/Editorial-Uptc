import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEdUptcComponent } from './page-ed-uptc.component';
import { BannerUptcComponent } from "./banner-uptc/banner-uptc.component";
import { FastNavigationComponent } from "./fast-navigation/fast-navigation.component";
import { FooterComponent } from "./footer/footer.component";
import { NavBarEncabezado1Component } from "./nav-bar-encabezado1/nav-bar-encabezado1.component";
import { NewsAndEventsComponent } from "./news-and-events/news-and-events.component";

describe('PageEdUptcComponent', () => {
  let component: PageEdUptcComponent;
  let fixture: ComponentFixture<PageEdUptcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEdUptcComponent, BannerUptcComponent, FastNavigationComponent, FooterComponent, NavBarEncabezado1Component, NewsAndEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEdUptcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
