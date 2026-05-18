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
    '.NET',
    'ASP.NET MVC',
    'Entity Framework',
    'APIs REST',
    'MVC Razor',
    'Java',
    'JavaScript',
    'Angular',
    'Git',
    'SQL Server'
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
      name: 'Gerenciador de workshops clean architecture',
      description:
        "Gerenciador de Workshops em ASP.NET Core MVC com arquitetura em camadas (Web, Application, Domain e Infrastructure), voltado para organizar workshops, colaboradores e atas, com login, dashboard e paginação para facilitar a gestão do dia a dia.",
      tags: ['ASP.NET Core MVC (.NET 8)', 'API REST', 'C#'],
      githubUrl: 'https://github.com/Allyzu/gerenciador-workshops-clean-architecture'
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
