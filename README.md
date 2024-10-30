# Sistema de Controle Financeiro Pessoal

## Descrição

Este projeto visa desenvolver um sistema de controle financeiro pessoal utilizando Node.js e Express. O objetivo do sistema é permitir que os usuários gerenciem suas finanças pessoais, categorizando receitas e despesas, e gerando relatórios financeiros detalhados. O sistema ainda está em fase de desenvolvimento.

## Funcionalidades Planejadas

- **Cadastro de Usuários**: Permitirá que novos usuários se registrem com e-mail e senha.
- **Login e Autenticação**: Implementação de um sistema de login seguro utilizando JWT para autenticação.
- **Gerenciamento de Transações**: Permitir aos usuários adicionar, editar e excluir transações financeiras categorizadas como receitas ou despesas.
- **Gerenciamento de Categorias**: Criar e gerenciar categorias para organização das transações.
- **Relatórios Financeiros**: Geração de relatórios que sumarizam receitas e despesas, proporcionando uma visão clara do estado financeiro do usuário.

## Tecnologias Planejadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express.js**: Framework para construção de aplicações web e APIs REST.
- **SQLite**: Banco de dados relacional leve para armazenamento das informações.
- **JWT (JsonWebToken)**: Utilizado para autenticação e gerenciamento de sessões.
- **bcrypt**: Biblioteca para hashing de senhas.

## Instalação (planejada)

Uma vez que o desenvolvimento esteja mais avançado, o processo de instalação será:

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/sistema-controle-financeiro.git
    cd sistema-controle-financeiro
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente:

    Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

    ```plaintext
    DATABASE_URL=sqlite:./database.sqlite
    JWT_SECRET=sua_chave_secreta
    PORT=3000
    ```

4. Inicie a aplicação:

    ```bash
    npm start
    ```

## Estrutura do Projeto

A estrutura do projeto será organizada da seguinte forma:

```plaintext
├── app.js               # Arquivo principal da aplicação
├── controllers/         # Controladores que gerenciam a lógica de negócios
├── models/              # Modelos do banco de dados
├── routes/              # Definição das rotas da API
├── middleware/          # Middlewares para autenticação e validação
├── config/              # Configuração do banco de dados e ambiente
└── .env.example         # Exemplo de configuração do ambiente
