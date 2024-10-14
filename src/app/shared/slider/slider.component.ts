import { Component, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {
  currentSlide = 0;
  autoSlideInterval: any;
  slides: HTMLElement[] = [];

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const slider = document.querySelector('.slider');
    if (slider) {
      this.slides = Array.from(slider.querySelectorAll('.slide'));
      if (this.slides.length > 0) {
        this.showSlide(0);
        this.startAutoSlide();
      }
    }
  }

  showSlide(n: number) {
    if (n >= this.slides.length) {
      this.currentSlide = 0;
    } else if (n < 0) {
      this.currentSlide = this.slides.length - 1;
    } else {
      this.currentSlide = n;
    }

    this.slides.forEach((slide) => this.renderer.removeClass(slide, 'active'));
    this.renderer.addClass(this.slides[this.currentSlide], 'active');
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.showSlide(this.currentSlide + 1);
    }, 5000);
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }

  slideTo(n: number) {
    this.stopAutoSlide();
    this.showSlide(n);
  }
}
