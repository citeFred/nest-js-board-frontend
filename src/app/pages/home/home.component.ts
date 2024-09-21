import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('swiper_cgv') swiperRef_cgv!: ElementRef;
  @ViewChild('swiper_netflix') swiperRef_netflix!: ElementRef;

  constructor() {}
  
  ngAfterViewInit() {
    const swiperEl_cgv = this.swiperRef_cgv.nativeElement;
    const swiperEl_netflix = this.swiperRef_netflix.nativeElement;

    const params = {
      slidesPerView: 3,
      spaceBetween: 5,
    };

    Object.assign(swiperEl_cgv, params);
    swiperEl_cgv.initialize();

    Object.assign(swiperEl_netflix, params);
    swiperEl_netflix.initialize();
  }
}
