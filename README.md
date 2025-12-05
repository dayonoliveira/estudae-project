# Estudae Project

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Configuração do Database](#️-configuração-do-database)
- [Configuração do Backend](#-configuração-do-backend)
- [Configuração do Frontend](#-configuração-do-frontend)
- [Executando o Projeto](#-executando-o-projeto)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Troubleshooting](#-troubleshooting)

---

## 🎯 Sobre o Projeto

**ESTUDAE** é uma aplicação com foco social que tem como objetivo aproximar pessoas que não têm condições de adquirir material escolar de pessoas que podem doar ou disponibilizar livros. A proposta é facilitar o acesso a conteúdos de estudo por meio de uma rede colaborativa, promovendo educação mais acessível.

O sistema foi desenvolvido com uma abordagem simples e objetiva, priorizando a criação de contas e o acesso às funcionalidades principais de forma clara e direta.

🎯 Objetivo

Incentivar a doação/compartilhamento de livros e materiais de estudo

Facilitar a conexão entre doadores e estudantes

Contribuir para reduzir a falta de acesso a materiais escolares

Contribuindo para o **ODS 11 - Cidades e Comunidades Sustentáveis**.

---

## 📦 Pré-requisitos

Antes de começar, instale:

- **Node.js** (v18+) - [Download](https://nodejs.org/)
- **yarn** - `npm install -g yarn`
- **PostgreSQL** (v14+) - [Download](https://www.postgresql.org/download/)
- **Git** - [Download](https://git-scm.com/)

---

## 🗄️ Configuração do Database

### 1. Criar Banco de Dados PostgreSQL

```bash
# Acesse o PostgreSQL
sudo -u postgres psql

# Crie o banco de dados
CREATE DATABASE estudae;

# Saia
\q
```

### 2. Verificar Conexão

```bash
# Teste a conexão
psql -U estudae_user -d estudae -h localhost
```

---

## 🚀 Configuração do Backend

### 1. Navegue até a pasta backend

```bash
cd backend
```

### 2. Instale as dependências

```bash
yarn install
```

### 3. Configure as variáveis de ambiente

```bash
# Copie o arquivo de exemplo
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais:

```env
# Database
DATABASE_URL="postgresql://postgres:<senha do usuário postgres>@localhost:5432/estudae"

# Application
NODE_ENV=development
PORT=3000

# JWT
AUTH_KEY=sua_chave_secreta_super_segura
JWT_EXPIRES_IN=1d
```

### 4. Execute as migrations do Prisma

```bash
# Gerar Prisma Client
yarn prisma generate

# Criar e aplicar migrations
yarn prisma migrate dev --name init
```

### 5. Inicie o servidor

```bash
# Modo desenvolvimento (com hot reload)
yarn start:dev

# Modo produção
yarn build
yarn start:prod
```

O backend estará rodando em: **<http://localhost:3000>**

---

## 💻 Configuração do Frontend

### 1. Navegue até a pasta frontend/web

```bash
cd frontend/web
```

### 2. Instale as dependências

```bash
yarn install
```

### 3. Configure a URL da API

```bash
# Cria o arquivo .env com a saída do comando echo
echo "VITE_BASE_URL=http://localhost:3000" >> .env
```

### 4. Inicie o servidor de desenvolvimento

```bash
# Modo desenvolvimento (com hot reload)
yarn dev
```

O frontend estará rodando em: **<http://localhost:5173>** (ou a porta informada no terminal)

### 5. Build para produção

```bash
yarn build

# Preview do build
yarn preview
```

---

## 🎮 Executando o Projeto

### Em Terminais Separados

**Terminal 1 - Backend:**

```bash
cd backend
yarn start:dev
```

**Terminal 2 - Frontend:**

```bash
cd frontend/web
yarn dev
```

## 📁 Estrutura do Projeto

```
estudae-project/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma          # Schema do banco
│   │   ├── seed.ts                # Dados de exemplo
│   │   └── migrations/            # Histórico de migrations
│   ├── src/
│   │   ├── controllers/           # Controladores
│   │   ├── services/              # Lógica de negócio
│   │   ├── repositories/          # Acesso a dados
│   │   ├── dtos/                  # Data Transfer Objects
│   │   ├── modules/               # Módulos NestJS
│   │   ├── config/                # Configurações
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
├── frontend/
│   └── web/
│       ├── src/
│       │   ├── components/        # Componentes React
│       │   ├── pages/             # Páginas
│       │   ├── assets/            # Imagens e ícones
│       │   ├── utils/             # Funções auxiliares
│       │   ├── App.tsx
│       │   └── main.tsx
│       ├── package.json
│       └── vite.config.ts
│
├── docs/
│   ├── api/                       # Documentação da API
│   ├── architecture/              # Arquitetura do sistema
│   └── requirements/              # Requisitos
│
├── validation/                    # Relatórios de validação
└── README.md                      # Este arquivo
```

---

## 🔐 Segurança

- ✅ Senhas criptografadas com **bcrypt**
- ✅ Autenticação JWT com tokens
- ✅ Proteção contra SQL Injection via Prisma
- ✅ Validação de entrada de dados
- ✅ Variáveis de ambiente não versionadas

---

## 📝 Scripts Úteis

### Backend

```bash
yarn start:dev          # Desenvolvimento com hot reload
yarn build              # Build de produção
yarn start:prod         # Executar em produção
yarn test               # Executar testes
yarn lint               # Verificar código
yarn format             # Formatar código
yarn prisma:studio      # Abrir Prisma Studio
```

### Frontend

```bash
yarn dev                # Desenvolvimento com hot reload
yarn build              # Build de produção
yarn preview            # Preview do build
yarn lint               # Verificar código
```

---

## 🚧 Troubleshooting

### Backend não conecta ao PostgreSQL

1. Verifique se PostgreSQL está rodando
2. Verifique as credenciais em `.env`
3. Teste a conexão: `psql -U estudae_user -d estudae -h localhost`

### Frontend não carrega

1. Verifique se a URL da API está correta
2. Limpe o cache: `rm -rf node_modules yarn.lock && yarn install`
3. Verifique se o backend está rodando

### Erros de Prisma

```bash
# Regenerar Prisma Client
yarn prisma generate

# Resetar banco (⚠️ CUIDADO - deleta dados)
yarn prisma migrate reset
```
