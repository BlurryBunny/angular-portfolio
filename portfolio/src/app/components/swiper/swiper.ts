import { Component, CUSTOM_ELEMENTS_SCHEMA, input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SwiperItem {
  title: string;
  subtitle?: string;
  image?: string;
  iconClass?: string;
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
    // Configuramos los parámetros tal como en tu ejemplo de JS
    const swiperParams = {
      effect: this.effect(),
      grabCursor: true,
      // Si el efecto es cards, podemos añadir configuraciones específicas aquí
      cardsEffect: {
        perSlideOffset: 8,
        perSlideRotate: 2,
        rotate: true,
        slideShadows: true
      },
      // Añadimos navegación y paginación si lo deseas
      pagination: true,
      navigation: true,
    };

    // Asignamos los parámetros e inicializamos
    Object.assign(this.swiperRef.nativeElement, swiperParams);
    this.swiperRef.nativeElement.initialize();
  }
}
