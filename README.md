# Teste Fullstack: Aplicativo de Gerenciamento de Clientes

## Descrição:

Neste desafio, você deverá desenvolver um aplicativo fullstack que permita aos usuários visualizar e criar clientes. O aplicativo consiste em duas partes: o frontend e o backend. O frontend será responsável pela interface do usuário e a comunicação com a API. O backend será responsável pelo armazenamento e gerenciamento dos dados dos clientes.

## Pré-requisitos

- Node >= 18.17.0
- NPM
- Opcionais:
  - Docker
  - Docker Compose

## Começando

1. Clone o repositório para a sua máquina local.
2. Navegue até a pasta do projeto

## Rodando o projeto

### Opção 1 - docker compose

1. Rode no terminal

```bash
$ docker compose up --build
```

2. Acesse o aplicativo em [http://localhost:3001](http://localhost:3001)

### Opção 2

1. inicie o Backend:

```bash
$ cd backend
$ npm install
$ npm start
```

2. inicie o Frontend:

```bash
$ cd frontend
$ npm install
$ npm start
```

3. Acesse o aplicativo em [http://localhost:3001](http://localhost:3001)

## Tecnologias

Backend:

- NestJS
- SQLite
- Prisma ORM
- Docker

Frontend:

- NextJS
- TailwindCSS
- React Hook Form
- Zod
