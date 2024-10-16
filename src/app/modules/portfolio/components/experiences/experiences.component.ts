import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interfaces/IExperiences.interface';

// Interface

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Estágio Desenvolvedor Full-Stack',
        p: 'Arcnet | Out 2024 - Até o momento',
      },
      text: '<p>Atuei no desenvolvimento e na manutenção do aplicativo financeiro Nati Pay. Utilizei as tecnologias Node.js, Angular, Ionic e SQL Server</p>'
    },
  ]);
}