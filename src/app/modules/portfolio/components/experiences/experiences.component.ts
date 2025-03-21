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
        p: 'Arcnet Desenvolvimento de Software Ltda. | Out 2024 - Até o momento',
      },
      text: '<p>Atuei ativamente no desenvolvimento da solução financeira Mobyo Pay, um sistema de pagamentos e relatórios financeiros que permite ao cliente realizar e controlar transações por meio de PIX e cartão de débito e crédito. Utilizei as tecnologias Node.js, NestJS, Angular, Ionic e Firestore.</p><p>Em seguida, trabalhei no sistema Mobyo Integrador, um sistema responsável por integrar pedidos de diferentes plataformas (como Ifood, Zé Delivery, etc.) à plataforma de controle de pedidos do Mobyo, garantindo que o cliente possa ter controle desses pedidos de um lugar só. Utilizei as mesmas tecnologias do Mobyo Pay, com adição do Electron para transformar a aplicação em um app desktop.</p><p>Por fim, desenvolvi o Mobyo Pay Api, um projeto que tive a honra de criar do zero aplicando todos os conhecimentos adquiridos e acrescentando um grande detalhe à estruturação: a Clean Architecture. A aplicação permite integrar diversas formas de pagamento (internas e externas) de maneira simples e escalável ao sistema Mobyo Pay.</p>',
    },
  ]);
}
