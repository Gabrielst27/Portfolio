import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-knowledges',
  standalone: true,
  imports: [],
  templateUrl: './knowledges.component.html',
  styleUrl: './knowledges.component.scss'
})
export class KnowledgesComponent {
  public arrayKnowledge = signal([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone de conhecimento de html5'
    },
    {
      src: 'assets/icons/knowledge/javascript.png',
      alt: 'Icone de conhecimento de javascript'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icone de conhecimento de css3'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de conhecimento de angular'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Icone de conhecimento de nodejs'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Icone de conhecimento de sass'
    },
    {
      src: 'assets/icons/knowledge/csharp.png',
      alt: 'Icone de conhecimento de html5'
    },
    {
      src: 'assets/icons/knowledge/typescript.png',
      alt: 'Icone de conhecimento de typescript'
    }
  ])
}
