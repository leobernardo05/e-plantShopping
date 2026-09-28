# Paradise Nursery — Shopping Cart

Projeto final desenvolvido durante o curso de **React da IBM**, realizado pela Coursera.

O projeto consiste na criação de uma aplicação de compras para a **Paradise Nursery**, uma loja virtual de plantas de interior. A aplicação permite visualizar produtos, adicionar plantas ao carrinho e gerenciar os itens selecionados.

## Sobre o projeto

O **Paradise Nursery Shopping Cart** foi desenvolvido como projeto prático para consolidar os conhecimentos adquiridos durante o curso de React.

A aplicação utiliza **React** para construção da interface e **Redux** para o gerenciamento do estado do carrinho de compras.

Durante o desenvolvimento, foram praticados conceitos como:

* Criação e organização de componentes React;
* JSX;
* Props;
* Gerenciamento de estado;
* Redux;
* Redux Store;
* Redux Slice;
* Ações e atualizações do estado;
* Renderização de listas;
* Eventos e interações do usuário;
* Manipulação de dados;
* Componentização;
* Estilização com CSS;
* Organização de uma aplicação React utilizando Vite.

## Funcionalidades

A aplicação permite ao usuário:

* Visualizar os produtos disponíveis na loja;
* Adicionar plantas ao carrinho;
* Visualizar os produtos adicionados;
* Alterar a quantidade de itens;
* Remover produtos do carrinho;
* Acompanhar os itens selecionados;
* Gerenciar o estado do carrinho de forma centralizada.

## Tecnologias utilizadas

* **React**
* **JavaScript**
* **Redux**
* **React Redux**
* **Vite**
* **HTML**
* **CSS**
* **npm**

## Gerenciamento de estado

O gerenciamento do carrinho é realizado utilizando **Redux**, permitindo manter o estado dos produtos selecionados de forma centralizada.

A estrutura relacionada ao gerenciamento de estado está organizada nos arquivos:

```text
src/
├── CartSlice.jsx
└── store.js
```

### `CartSlice.jsx`

Responsável pela definição do estado e das ações relacionadas ao carrinho de compras, como adicionar, remover e atualizar itens.

### `store.js`

Responsável pela configuração da Redux Store utilizada pela aplicação.

## Componentes principais

### `ProductList.jsx`

Responsável pela exibição dos produtos disponíveis na loja e pela interação para adicionar produtos ao carrinho.

### `CartItem.jsx`

Representa um item individual dentro do carrinho, permitindo trabalhar com as informações e ações relacionadas ao produto selecionado.

### `AboutUs.jsx`

Componente destinado à apresentação de informações sobre a Paradise Nursery.

### `App.jsx`

Componente principal responsável pela organização da aplicação e integração dos demais componentes.

## Estrutura do projeto

```text
Paradise-Nursery/
├── public/
├── src/
│   ├── assets/
│   ├── AboutUs.css
│   ├── AboutUs.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── CartItem.css
│   ├── CartItem.jsx
│   ├── CartSlice.jsx
│   ├── ProductList.css
│   ├── ProductList.jsx
│   ├── index.css
│   ├── main.jsx
│   └── store.js
├── .eslintrc.cjs
├── .gitignore
├── LICENSE
├── README.md
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

### 2. Acesse a pasta do projeto

```bash
cd Paradise-Nursery
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute a aplicação

```bash
npm run dev
```

A aplicação será disponibilizada pelo Vite, normalmente em:

```text
http://localhost:5173
```

## Objetivo de aprendizagem

Este projeto representa a etapa final do curso de **React da IBM**, reunindo na prática conceitos estudados ao longo do curso.

O desenvolvimento do aplicativo permitiu praticar principalmente a construção de interfaces com React, a criação de componentes reutilizáveis e o gerenciamento de um estado global utilizando Redux.

## Curso

**React Basics / React Application Development — IBM**

Projeto final desenvolvido como parte dos estudos de React na **Coursera**.

## Autor

**Leonardo Bernardo**

* GitHub: [leobernardo05](https://github.com/leobernardo05)
* LinkedIn: [Leonardo Bernardo](https://www.linkedin.com/in/leonardo0503/)
