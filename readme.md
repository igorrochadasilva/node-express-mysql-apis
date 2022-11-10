# 1. Introdução

**Apresentação**

- MySql
- Sequelize ORM
- Express

**Requisitos para instalação**

- Node.js
- Postman
- Mysql

# 2. Javascript e Node.js Básico

**Introdução**

- Abordando o basico de javscript

**Váriaveis, funções e objetos**

- Basico de váriaveis
- Basico de funções
- Basico de objetos

**Importando e exportando arquivos**

- Import and exports

**Instalando bibliotecas com npm**

- npm install library

**Arrays**

- abordando arrays

# 3. Sequelize ORM

**Configurando o projeto**

- Sequelize is a modern TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more. Featuring solid transaction support, relations, eager and lazy loading, read replication and more.

OBs: utilizei o Docker para criar um container com o mysql:
`$ docker run --name node_mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=1234 -d mysql`
db-name: mysqlnode
user: root
MYSQL_ROOT_PASSWORD=1234
port: 3036

- Instalando o sequelize: `npm install --save sequelize`
- Instalando o mysql2: `npm install --save mysql2`
- Instalando Cli do sequelize: `npm install --save-dev sequelize-cli`
- Iniciando sequelize: `npm sequelize-cli init`

**Migrations**

- Cada migration serve para fazer uma ação no banco de dados.
- gerando migrations: `npx sequelize-cli model:generate --name pessoa --attributes nome:string,sobrenome:string,cpf:string,email:string`
- rodando migrations: `npx sequelize-cli db:migrate`
- gerando migration: `npx sequelize-cli migration:generate --name addRgColum`
- revertendo ultima migration que foi feita: `npx sequelize-cli db:migrate:undo`

**Correção do model de Pessoa**

- arquivo para correção

**Create, Update e Delete**

- Criando arquivo `aula-3`, e funções `delete`, `update` e `create` para o banco de dados, utilizando os sequelize.

**Inserindo multiplos registros**

- Inserindo multiplos registros utilizando a função `bulkCreate` do sequelize.

**Aprendendo a realizar consultas**

Criando consultas para buscar dados com sequelize:

`encontrarUtilizandoOperadores`
`encontrarComLike`
`encontrarComOffsetElimit`
`encontrarComIdIn`
`encontrarPorId`
`encontrarPorNome`

**Raw Query**

Utilizando Raw querys para fazer consultas no banco dados, importante deixar claro que deve ser usado somente quando for feito consultas
muito complexas

# 4. Relacionamentos e Transactions

**Relacionamento 1-1**

- Gerando migration: `npx sequelize-cli model:generate --name Endereco --attributes bairro:string`
- Criando tabela `endereços`
- Criando registro na tabela `endereços`
- Criando relacionamento de tabela `enderecos` para tabela `pessoas`
- Criando consultas que tragam ambas as tabelas
- Utilizando atributos `required`, `includes` e `nest`

**Relacionamento 1 - n**

- Gerando migration: `npx sequelize-cli model:generate --name Telefone --attributes firstName:string`
- Criado tabela Telefone.
- Criando relacionamento de `Pessoa` para tabela `Telefone`
- Criando consulta de 1 para muitos.

**Relacionamento m - n**

- Gerando migration: `npx sequelize-cli model:generate --name PessoaSeguidor --attributes firstName:string`
- Utilizando auto relacionamento entre colunas diferentes da mesma tabela.
- Criado tabela `seguidor`, e criando relacionamento na tabela `pessoa`

**Transactions**

- Com as transactions, é possivel fazer ações ao mesmo tempo.
- No arquivo `aula-10`, é utilizado transaction para fazer ações ao mesmo tempo.

# 5. Express

**Configurando o projeto**

- Configurando projeto com express para iniciar servidor.
- instalando `express`, `body-parser` e `nodemon`

**Entendendo o verbo Get**

- Abordando o metodo get para busca de registros.

**Entendendo o verbo Post**

- Criando novos usuários como o metodo post

**Entendendo o verbo put**

- Alterando registro utilizando metodo put

**Entendendo o verbo delete**

- Deletando registro utilizando metodo delete

**HTTp Status Code**

- Status de código retornado na requisição.

**Link com o projeto completo**

## Configurando o Projeto

**Configuração inicial**

- Instalando dependencias: `sequelize, body-parser, express e sequelize-cli, dotenv, mysql2`
- Criado estrutura de pastas:
- Pasta controllers: vão ser responsaveis por receber a requisição, tratar o que chega e a resposta da requisição.
- Pasta middlewares:
- Pasta repositories: funções que vão cuidar da comunicação com o database
- Pasta services: tratamento de regra de negocios
- Pasta de routes: rotas da aplicação
- Criando controller item
- Criado rota `/api/itens`

**Configurando o sequelize, primeira migration**

- Configurando sequelize, exportando modulos
- Configurando arquivo `config.js` com informações vindo do env.
- Inicializando pastas com sequelize: `npx sequelize-cli init`
- Exportar modulos da pasta database para não ser preciso rodar comandos do sequelize-cli na pasta database.
- Criado migration `criar usuários` para criação de tabela
