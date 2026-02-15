import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly stacks = [
    'C#',
    'Java',
    'JavaScript',
    'Angular',
    'Git',
    'SQL'
  ];

  protected readonly projects = [
    {
      name: 'DesafioFast',
      description:
        'Sistema fullstack de gerenciamento de workshops com backend em .NET 7 e frontend em Angular, incluindo cadastro de workshops, pets, consultas e atas.',
      tags: ['.NET 7', 'Angular', 'SQL'],
      githubUrl: 'https://github.com/Allyzu/DesafioFast'
    },
    {
      name: 'Api Brasileirao',
      description:
        "Estudo de consumo de APIs com Angular usando dados da API Futebol para acompanhamento do Campeonato Brasileiro.",
      tags: ['Angular', 'API REST', 'TypeScript'],
      githubUrl: 'https://github.com/Allyzu/ApiBrasileirao'
    },
    {
      name: 'Rede Neural Perceptron',
      description:
        'Desenvolvimento de uma rede neural perceptron em JavaScript para projeto realizado no Museu Espaco Ciencia.',
      tags: ['JavaScript', 'IA', 'Perceptron'],
      githubUrl: 'https://github.com/Allyzu/rede-neural-perceptron'
    }
  ];
}
