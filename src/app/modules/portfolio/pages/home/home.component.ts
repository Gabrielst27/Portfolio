import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { KnowledgesComponent } from '../../components/knowledges/knowledges.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    KnowledgesComponent,
    ExperiencesComponent,
    ProjectsComponent,
    FooterComponent,
    AboutMeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
