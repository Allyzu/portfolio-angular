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
      name: 'TellMe School - Agenda Escolar',
      description:
        'Plataforma educacional com foco em comunicacao escolar, organizacao de rotina e produtividade para instituicoes de ensino.',
      tags: ['Angular', 'C#', 'SQL'],
      githubUrl: 'https://github.com/seu-usuario/tellme-school'
    },
    {
      name: 'API de Gestao de Tarefas',
      description:
        'API REST com autenticacao, controle de permissoes e estrutura preparada para escalar em aplicacoes SaaS.',
      tags: ['Java', 'SQL', 'Git'],
      githubUrl: 'https://github.com/seu-usuario/task-api'
    },
    {
      name: 'Dashboard Fullstack',
      description:
        'Dashboard para acompanhamento de indicadores com filtros, graficos e integracao com multiplas fontes de dados.',
      tags: ['Angular', 'JavaScript', 'C#'],
      githubUrl: 'https://github.com/seu-usuario/fullstack-dashboard'
    }
  ];
}
