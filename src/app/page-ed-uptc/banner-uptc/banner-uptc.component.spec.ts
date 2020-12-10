import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerUptcComponent } from './banner-uptc.component';

describe('BannerUptcComponent', () => {
  let component: BannerUptcComponent;
  let fixture: ComponentFixture<BannerUptcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerUptcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerUptcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
