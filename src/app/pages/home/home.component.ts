import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('swiper') swiperRef!: ElementRef;

  constructor() {}
  
  ngAfterViewInit() {
    const swiperEl = this.swiperRef.nativeElement;

    const params = {
      slidesPerView: 1,
    };

    Object.assign(swiperEl, params);
    swiperEl.initialize();
  }
}
