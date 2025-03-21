import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  HostListener,
  OnInit,
  signal,
} from '@angular/core';
import { IKnowledge } from '../../interfaces/IKnowledge.interface';
import { register, SwiperContainer } from 'swiper/element';
register();

@Component({
  selector: 'app-knowledges',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './knowledges.component.html',
  styleUrl: './knowledges.component.scss',
})
export class KnowledgesComponent implements OnInit {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/nodejs.png',
      alt: 'Ícone de conhecimento em nodejs',
      title: 'Node.js',
    },
    {
      src: 'assets/icons/knowledge/nestjs.png',
      alt: 'Ícone de conhecimento em nestjs',
      title: 'NestJS',
    },
    {
      src: 'assets/icons/knowledge/angular.png',
      alt: 'Ícone de conhecimento em angular',
      title: 'Angular',
    },
    {
      src: 'assets/icons/knowledge/prisma.png',
      alt: 'Ícone de conhecimento em prisma',
      title: 'Prisma ORM',
    },
    {
      src: 'assets/icons/knowledge/typescript.png',
      alt: 'Ícone de conhecimento em typescript',
      title: 'Typescript',
    },
    {
      src: 'assets/icons/knowledge/html.png',
      alt: 'Ícone de conhecimento em html5',
      title: 'HTML5',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento em javascript',
      title: 'Javascript',
    },
    {
      src: 'assets/icons/knowledge/css.svg',
      alt: 'Ícone de conhecimento em css3',
      title: 'CSS3',
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Ícone de conhecimento em sass',
      title: 'Sass',
    },
  ]);

  ngOnInit(): void {
    const width = window.innerWidth;
    this.updateSlidesPerView(width);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width = (event.target as Window).innerWidth;
    this.updateSlidesPerView(width);
  }

  private updateSlidesPerView(width: number) {
    const swiperElement = document.getElementById(
      'knowledge-icons-container'
    ) as SwiperContainer;

    if (width < 751) {
      swiperElement?.setAttribute('slides-per-view', '1.6');
    }
    if (width >= 751) {
      swiperElement?.setAttribute('slides-per-view', '4.5');
    }

    swiperElement?.initialize();
  }
}
