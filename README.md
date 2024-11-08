Esse é somente a parte de Backend do projeto - Front End está sendo desenvolvido

Este projeto é uma API RESTful desenvolvida com Node.js e Express, usando o Prisma como ORM para interagir com um banco de dados PostgreSQL. A aplicação fornece funcionalidades para gerenciar usuários, categorias de produtos (como pizzas), pedidos e itens associados, seguindo boas práticas de desenvolvimento para garantir escalabilidade e facilidade de manutenção.
Funcionalidades

Gerenciamento de Usuários: Cadastro, verificação de duplicidade de email e listagem de usuários.
Categorias e Produtos: Criação e associação de produtos a categorias, como sabores de pizzas.
Pedidos: Criação de pedidos com status e rascunho, incluindo o nome do cliente.
Itens do Pedido: Associa produtos específicos a pedidos existentes.
Tratamento de Erros: Middleware para tratamento centralizado de erros.
Tecnologias Utilizadas

Node.js: Ambiente de execução JavaScript no lado do servidor.
Express: Framework web para criação de APIs RESTful.
Prisma ORM: Ferramenta para mapeamento e manipulação de dados com PostgreSQL.
PostgreSQL: Banco de dados relacional usado na aplicação.
Cors: Para lidar com problemas de política de CORS.
Express-Async-Errors: Gerenciamento de erros assíncronos no Express.
