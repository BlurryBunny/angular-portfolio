import { Component, CUSTOM_ELEMENTS_SCHEMA, input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SwiperItem {
  title: string;
  subtitle?: string;
  image?: string;
  iconClass?: string
  isBackground?: boolean;
}
@Component({
  selector: 'app-swiper-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swiper.html',
  styleUrl: './swiper.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperComponent implements AfterViewInit {
  items = input.required<any[]>();
  effect = input<string>('cards');
  customClass = input<string>('');

  @ViewChild('swiperRef') swiperRef!: ElementRef;

  ngAfterViewInit() {
    const swiperParams = {
      effect: this.effect(),
      grabCursor: true,
      cardsEffect: {
        perSlideOffset: 8,
        perSlideRotate: 2,
        rotate: true,
        slideShadows: true
      },
      pagination: true,
      navigation: true,
    };

    Object.assign(this.swiperRef.nativeElement, swiperParams);
    this.swiperRef.nativeElement.initialize();
  }
}
