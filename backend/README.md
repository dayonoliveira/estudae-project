# 🎓 EstudaE API

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
</p>

Sistema multiplataforma de matching entre estudantes, mentores e voluntários para doação de materiais educacionais e mentoria acadêmica. Projeto vinculado ao **ODS 11 - Cidades e Comunidades Sustentáveis**.

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Executando o Projeto](#-executando-o-projeto)
- [Endpoints da API](#-endpoints-da-api)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Banco de Dados](#-banco-de-dados)
- [Testes](#-testes)
- [Equipe](#-equipe)

---

## 🎯 Sobre o Projeto

O **EstudaE** é uma plataforma que conecta estudantes que precisam de apoio educacional com mentores e voluntários dispostos a ajudar. O sistema facilita:

- 📚 **Doação de materiais escolares** (livros, cadernos, uniformes, etc)
- 👨‍🏫 **Mentoria acadêmica** (aulas de reforço, orientação educacional)
- 🤝 **Matching inteligente** entre estudantes e apoiadores
- 🔔 **Sistema de notificações** para acompanhamento

### ODS 11 - Cidades e Comunidades Sustentáveis

Este projeto contribui para o desenvolvimento sustentável através da educação, promovendo:
- Acesso igualitário à educação de qualidade
- Fortalecimento de comunidades através da educação
- Redução de desigualdades educacionais
- Desenvolvimento social sustentável

---

## ✨ Funcionalidades

### Implementadas ✅

- **Sistema de Autenticação**
  - ✅ Registro de usuários com validação completa
  - ✅ Criptografia de senhas com bcrypt
  - ✅ Suporte para menores de idade com responsável legal
  - ✅ Três tipos de perfil: Estudante, Mentor, Voluntário
  - ✅ Login com JWT e geração de token
  - ✅ Autenticação Passport JWT
  - ✅ Rotas protegidas com guards

- **Gerenciamento de Usuários**
  - ✅ CRUD completo de usuários
  - ✅ Validações de dados (email único, formato válido, etc)
  - ✅ Detecção automática de menor de idade
  - ✅ Vinculação automática de responsáveis

- **Banco de Dados**
  - ✅ PostgreSQL com Prisma ORM
  - ✅ Migrations versionadas
  - ✅ Seed de dados para testes
  - ✅ 5 tabelas principais (users, material_requests, mentorship_requests, matches, notifications)

### Em Desenvolvimento 🔄

- Dashboard adaptativo por perfil (B5)
- Sistema de busca e matching (B6)
- Sistema de notificações (B7)

---

## 🛠 Tecnologias

### Backend
- **[NestJS](https://nestjs.com/)** - Framework Node.js progressivo
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem
- **[Prisma](https://www.prisma.io/)** - ORM moderno para Node.js
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional
- **[bcrypt](https://www.npmjs.com/package/bcrypt)** - Hash de senhas
- **[JWT](https://jwt.io/)** - Autenticação via JSON Web Tokens
- **[Passport](http://www.passportjs.org/)** - Middleware de autenticação

### Ferramentas de Desenvolvimento
- **ESLint** - Linter para código limpo
- **Prettier** - Formatação de código
- **Jest** - Framework de testes
- **Prisma Studio** - Interface visual do banco de dados

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (v18 ou superior) - [Download](https://nodejs.org/)
- **yarn** - Gerenciador de pacotes
- **PostgreSQL** (v14 ou superior) - [Download](https://www.postgresql.org/download/)
- **Git** - [Download](https://git-scm.com/)

### Instalar Yarn

```bash
npm install -g yarn
```

---

## 🚀 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/estudae-api.git
cd estudae-api
```

### 2. Instale as dependências

```bash
yarn install
```

---

## ⚙️ Configuração

### 1. Configurar PostgreSQL

Crie o banco de dados no PostgreSQL:

```bash
# Acesse o PostgreSQL
sudo -u postgres psql

# Crie o banco de dados
CREATE DATABASE estudae;

# Crie um usuário (opcional, mas recomendado)
CREATE USER estudae_user WITH ENCRYPTED PASSWORD 'sua_senha_segura';
GRANT ALL PRIVILEGES ON DATABASE estudae TO estudae_user;

# Saia do PostgreSQL
\q
```

### 2. Configurar variáveis de ambiente

Copie o arquivo de exemplo e configure:

```bash
cp .env.example .env
```

Edite o arquivo `.env`:

```env
# Database
DATABASE_URL="postgresql://estudae_user:sua_senha@localhost:5432/estudae"

# Application
NODE_ENV=development
PORT=3000

# JWT
JWT_SECRET=sua_chave_secreta_super_segura
JWT_EXPIRES_IN=7d
```

### 3. Executar migrations

```bash
yarn prisma migrate dev --name init
```

### 4. Popular banco com dados de exemplo (opcional)

```bash
yarn prisma:seed
```

---

## 🎮 Executando o Projeto

### Modo Desenvolvimento

```bash
yarn start:dev
```

O servidor estará rodando em: **http://localhost:3000**

### Modo Produção

```bash
# Build
yarn build

# Executar
yarn start:prod
```

### Prisma Studio (Interface Visual do Banco)

```bash
yarn prisma:studio
```

Abre em: **http://localhost:5555**

---

## 📡 Endpoints da API

### Autenticação

#### Registrar Usuário
```http
POST /auth/register
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@example.com",
  "password": "senha123",
  "birthdate": "2000-05-15",
  "phone": "85988887777",
  "profileType": "STUDENT",
  "bio": "Estudante universitário",
  "address": "Fortaleza, CE"
}
```

**Resposta (201 Created):**
```json
{
  "success": true,
  "message": "Usuário registrado com sucesso!",
  "data": {
    "id": "uuid-gerado",
    "name": "João Silva",
    "email": "joao@example.com",
    "birthdate": "2000-05-15T00:00:00.000Z",
    "phone": "85988887777",
    "profileType": "STUDENT",
    "isMinor": false,
    "createdAt": "2024-11-28T..."
  }
}
```

#### Registrar Menor de Idade
```http
POST /auth/register
Content-Type: application/json

{
  "name": "Pedro Costa",
  "email": "pedro@example.com",
  "password": "senha123",
  "birthdate": "2010-11-25",
  "profileType": "STUDENT",
  "guardianName": "Ana Costa",
  "guardianEmail": "ana@example.com",
  "guardianPassword": "senha456",
  "guardianPhone": "85944443333"
}
```

#### Login (Implementado! ✅)
```http
POST /auth/login
Content-Type: application/json

{
  "email": "joao@example.com",
  "password": "senha123"
}
```

**Resposta (200 OK):**
```json
{
  "success": true,
  "message": "Login realizado com sucesso!",
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "uuid",
      "name": "João Silva",
      "email": "joao@example.com",
      "profileType": "STUDENT",
      "isMinor": false,
      ...
    }
  }
}
```

#### Buscar Dados do Usuário Autenticado (Rota Protegida)
```http
GET /auth/me
Authorization: Bearer seu_token_jwt_aqui
```

**Resposta (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "João Silva",
    "email": "joao@example.com",
    "profileType": "STUDENT",
    ...
  }
}
```

### Usuários

#### Listar Todos os Usuários
```http
GET /user
```

#### Buscar Usuário por ID (Rota Protegida)
```http
GET /user/:id
Authorization: Bearer seu_token_jwt_aqui
```

---

## 📁 Estrutura do Projeto

```
estudae-api/
├── prisma/
│   ├── schema.prisma          # Schema do banco de dados
│   ├── seed.ts                # Dados de exemplo
│   └── migrations/            # Histórico de migrations
│
├── src/
│   ├── auth/
│   │   ├── auth.module.ts         # Módulo de autenticação
│   │   ├── jwt.strategy.ts        # Estratégia JWT Passport
│   │   ├── jwt-auth.guard.ts      # Guard de autenticação
│   │   └── current-user.decorator.ts # Decorator @CurrentUser()
│   │
│   ├── controllers/
│   │   ├── user.controller.ts     # Controller de usuários
│   │   └── auth.controller.ts     # Controller de autenticação
│   │
│   ├── services/
│   │   ├── user.service.ts        # Lógica de usuários
│   │   └── auth.service.ts        # Lógica de autenticação e login
│   │
│   ├── dtos/
│   │   └── input/
│   │       ├── create_user.input.dto.ts
│   │       ├── register-user.dto.ts
│   │       └── login.dto.ts       # DTOs de login e JWT
│   │
│   ├── prisma-client/
│   │   ├── prisma.service.ts      # Serviço do Prisma
│   │   └── prisma.module.ts       # Módulo global do Prisma
│   │
│   ├── app.module.ts              # Módulo principal
│   └── main.ts                    # Entry point
│
├── test/                      # Testes E2E
├── .env                       # Variáveis de ambiente (não commitar)
├── .env.example               # Exemplo de variáveis
├── .gitignore                 # Arquivos ignorados pelo git
├── package.json               # Dependências do projeto
├── tsconfig.json              # Configuração TypeScript
├── nest-cli.json              # Configuração NestJS
└── README.md                  # Este arquivo
```

---

## 🗄️ Banco de Dados

### Modelo de Dados

O banco de dados possui 5 tabelas principais:

#### 1. **users** - Usuários do Sistema
- `id` (UUID) - Chave primária
- `name` - Nome completo
- `email` - Email único
- `password` - Senha hasheada com bcrypt
- `birthdate` - Data de nascimento
- `phone` - Telefone (opcional)
- `profileType` - Tipo: STUDENT, MENTOR ou VOLUNTEER
- `isMinor` - Se é menor de idade (< 18 anos)
- `guardianId` - ID do responsável (se menor)
- `bio` - Biografia pública
- `address` - Endereço
- `createdAt` / `updatedAt` - Timestamps

#### 2. **material_requests** - Solicitações de Materiais
- Pedidos de materiais escolares feitos por estudantes

#### 3. **mentorship_requests** - Solicitações de Mentoria
- Pedidos de mentoria/aulas de reforço

#### 4. **matches** - Matches entre Usuários
- Conexões entre estudantes e mentores/voluntários

#### 5. **notifications** - Notificações do Sistema
- Avisos e lembretes para os usuários

### Diagrama ER

```
users (1) ←→ (N) material_requests
users (1) ←→ (N) mentorship_requests
users (1) ←→ (N) matches (como student)
users (1) ←→ (N) matches (como helper)
users (1) ←→ (N) notifications
users (1) ←→ (N) users (como guardian)
```

### Comandos Úteis do Prisma

```bash
# Gerar Prisma Client
yarn prisma generate

# Criar nova migration
yarn prisma:migrate

# Abrir Prisma Studio
yarn prisma:studio

# Resetar banco (CUIDADO!)
yarn prisma migrate reset

# Aplicar migrations em produção
yarn prisma migrate deploy
```

---

## 🧪 Testes

```bash
# Testes unitários
yarn test

# Testes em modo watch
yarn test:watch

# Cobertura de testes
yarn test:cov

# Testes E2E
yarn test:e2e
```

---

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
yarn start:dev        # Inicia servidor em modo watch

# Build e Produção
yarn build           # Compila o projeto
yarn start:prod      # Inicia servidor em produção

# Formatação e Linting
yarn format          # Formata código com Prettier
yarn lint            # Verifica código com ESLint

# Prisma
yarn prisma:generate # Gera Prisma Client
yarn prisma:migrate  # Cria e aplica migrations
yarn prisma:studio   # Interface visual do banco
yarn prisma:seed     # Popula banco com dados de teste

# Testes
yarn test           # Executa testes
yarn test:watch     # Testes em modo watch
yarn test:cov       # Cobertura de testes
yarn test:e2e       # Testes end-to-end
```

---

## 🔐 Segurança

- ✅ Senhas criptografadas com **bcrypt** (10 rounds)
- ✅ Autenticação JWT com tokens de acesso
- ✅ Tokens com expiração configurável (padrão: 7 dias)
- ✅ Validação de entrada de dados
- ✅ Proteção contra SQL Injection (via Prisma)
- ✅ Emails únicos no sistema
- ✅ Variáveis de ambiente não versionadas
- ✅ Guards para proteger rotas sensíveis
- ✅ Mensagens de erro seguras (não revelam informações sensíveis)

---

## 🚧 Roadmap

### Etapas Concluídas ✅
- [x] **B1** - Configurar PostgreSQL com banco e tabelas
- [x] **B2** - Integrar Prisma ORM para comunicação com banco
- [x] **B3** - Sistema de registro com bcrypt e suporte a menores
- [x] **B4** - Sistema de login com JWT e autenticação

### Próximas Etapas 🔄
- [ ] **B5** - Dashboard adaptativo por perfil de usuário
- [ ] **B6** - Sistema de busca e matching entre usuários
- [ ] **B7** - Sistema de notificações por período de eventos

---


## 📄 Licença

Este projeto é desenvolvido como trabalho acadêmico da disciplina **Projeto Aplicado Multiplataforma Etapa 2 (N708)**.

---

## 🤝 Contribuindo

Este é um projeto acadêmico, mas sugestões são bem-vindas!

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📞 Suporte

Para dúvidas ou suporte:
- 📧 Email: [seu-email@example.com]
- 💬 Discord: [Link do servidor]
- 📱 WhatsApp: [Número do grupo]

---

## 🙏 Agradecimentos

- Professores e orientadores da disciplina N708
- Comunidade NestJS
- Todos os colaboradores do projeto

---

<p align="center">
  Feito com ❤️ pela Equipe EstudaE | ODS 11 - Cidades e Comunidades Sustentáveis
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow" alt="Status" />
  <img src="https://img.shields.io/badge/ODS-11-blue" alt="ODS 11" />
</p>