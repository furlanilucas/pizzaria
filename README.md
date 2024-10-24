# API RESTful para Pizzaria com Node.js, Express e Prisma

Este projeto é uma API RESTful desenvolvida com **Node.js** e **Express**, utilizando o **Prisma** como ORM para interagir com um banco de dados **PostgreSQL**. A aplicação fornece funcionalidades para gerenciar usuários, categorias de produtos (como pizzas), pedidos e itens associados, seguindo boas práticas de desenvolvimento para garantir escalabilidade e facilidade de manutenção.

## Funcionalidades

- **Gerenciamento de Usuários**: Cadastro, verificação de duplicidade de e-mail e listagem de usuários.
- **Categorias e Produtos**: Criação e associação de produtos a categorias, como sabores de pizzas.
- **Pedidos**: Criação de pedidos com status e rascunho, incluindo o nome do cliente.
- **Itens do Pedido**: Associação de produtos específicos a pedidos existentes.
- **Tratamento de Erros**: Middleware para tratamento centralizado de erros.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express**: Framework web para criação de APIs RESTful.
- **Prisma ORM**: Ferramenta para mapeamento e manipulação de dados com PostgreSQL.
- **PostgreSQL**: Banco de dados relacional utilizado na aplicação.
- **CORS**: Para lidar com problemas de política de CORS.
- **Express-Async-Errors**: Gerenciamento de erros assíncronos no Express.

## Configuração do Projeto

### Pré-requisitos

- **Node.js** instalado (versão 14 ou superior)
- **PostgreSQL** configurado
- **Yarn** instalado globalmente

### Passos para Executar

```bash
# 1. Clone o repositório
git clone https://github.com/furlanilucas/pizzaria.git

# 2. Entre na pasta do projeto
cd pizzaria

# 3. Instale as dependências do projeto utilizando Yarn
yarn install

# 4. Configure as variáveis de ambiente, se necessário
# Crie um arquivo .env com as configurações apropriadas.

# 5. Inicie o servidor de desenvolvimento
yarn start  # ou o comando que você usa para iniciar o servidor

# 6. Acesse: http://localhost:3333

# 7. Utilize o Insomnia ou o Postman para testar as requisições.
