# 🍔 DevBurguer — Frontend

Aplicação web Full Stack para gerenciamento de pedidos de uma hamburgueria, desenvolvida com **React, JavaScript e Node.js**.

O DevBurguer oferece uma interface para clientes realizarem pedidos e um painel administrativo para acompanhar e gerenciar a operação.

## 🌐 Aplicação online

**[Acessar DevBurguer](https://devburguer-interface-lovat.vercel.app/)**

> A API está hospedada no plano gratuito da Render. O primeiro acesso pode apresentar um tempo de carregamento maior após períodos de inatividade.

## 📸 Demonstração

Em breve, serão adicionadas capturas de tela da aplicação.

## 🚀 Funcionalidades

### Área do cliente
- Visualização de produtos e categorias
- Carrossel de produtos
- Carrinho de compras
- Adição e remoção de produtos
- Atualização de quantidades
- Cálculo automático de valores e taxa de entrega
- Autenticação de usuários
- Finalização de pedidos

### Painel administrativo
- Visualização de pedidos realizados
- Consulta dos produtos de cada pedido
- Atualização do status dos pedidos
- Interface para gerenciamento de produtos

## 🛠️ Tecnologias utilizadas

- **React** — construção da interface
- **JavaScript** — lógica da aplicação
- **Vite** — ambiente de desenvolvimento e build
- **React Router** — navegação entre páginas
- **Axios** — comunicação com a API
- **Context API** — gerenciamento de estado
- **Styled Components** — estilização dos componentes
- **Material UI** — componentes de interface
- **JWT** — autenticação integrada ao backend

## 🏗️ Arquitetura

O frontend foi desenvolvido com React e consome uma API REST construída com Node.js e Express.

A comunicação acontece por meio do Axios, utilizando autenticação JWT para acessar os recursos protegidos.

O carrinho utiliza Context API para compartilhar os produtos selecionados entre os componentes, com persistência no armazenamento local do navegador.

**Backend:** [DevBurguer API](https://github.com/Alegomes2/DevBurguer-Api)

## 💻 Como executar localmente

### Pré-requisitos

- Node.js
- Yarn

### Instalação

Clone o repositório:

```bash
git clone https://github.com/Alegomes2/devburguer-interface.git
```

Acesse a pasta:

```bash
cd devburguer-interface
```

Instale as dependências:

```bash
yarn install
```

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3001
```

Inicie o servidor de desenvolvimento:

```bash
yarn dev
```

Abra no navegador o endereço informado pelo Vite, normalmente `http://localhost:5173`.

Para utilizar todas as funcionalidades, a API e o banco de dados precisam estar configurados e em execução.

## 🔧 Desafios técnicos e aprendizados

Durante o desenvolvimento e a publicação do DevBurguer, trabalhei com problemas reais de integração e deploy.

Entre os principais desafios:

- Configuração de CORS entre frontend e backend
- Autenticação com JWT e envio de tokens nas requisições
- Correção de URLs de imagens em produção
- Atualização imutável do estado do carrinho no React
- Configuração de variáveis de ambiente
- Correção de rotas SPA na Vercel
- Integração com a API e persistência dos pedidos

Esses desafios contribuíram para aprofundar meus conhecimentos sobre React, gerenciamento de estado, integração com APIs e funcionamento de aplicações Full Stack em produção.

## ☁️ Deploy

A aplicação utiliza:

- **Frontend:** Vercel
- **Backend:** Render
- **Banco de dados:** PostgreSQL hospedado no Aiven

O fluxo principal foi validado em produção, incluindo criação de pedidos, visualização no painel administrativo e persistência da atualização de status.

## 📂 Repositórios

- **Frontend:** https://github.com/Alegomes2/devburguer-interface
- **Backend:** https://github.com/Alegomes2/DevBurguer-Api

## 👨‍💻 Desenvolvedor

**Alexandre Gomes**

Desenvolvedor Full Stack em formação, com foco em aplicações web, APIs e automações.

[Meu GitHub](https://github.com/Alegomes2)