import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageEdUptcComponent } from './page-ed-uptc/page-ed-uptc.component';
import { NavBarEncabezado1Component } from './page-ed-uptc/nav-bar-encabezado1/nav-bar-encabezado1.component';
import { NewsAndEventsComponent } from './page-ed-uptc/news-and-events/news-and-events.component';
import { BannerUptcComponent } from './page-ed-uptc/banner-uptc/banner-uptc.component';
import { FastNavigationComponent } from './page-ed-uptc/fast-navigation/fast-navigation.component';
import { FooterComponent } from './page-ed-uptc/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageEdUptcComponent,
    NavBarEncabezado1Component,
    NewsAndEventsComponent,
    BannerUptcComponent,
    FastNavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
