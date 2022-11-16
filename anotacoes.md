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

## Usuário e criptografia de senhas

**Entidade de Usuário - Criar, Retornar Todos E Retornar Por Id**

- Criando entidade de usuário
- Definindo controller de usuário.
- Definindo repository de usuário
- Definindo router de usuário
- Definindo service de usuário
- Criando consulta por id de usuário
- Criando consulta todos os usuário
- Criando registrar novo usuário

**Criptografando a Senha dos Usuários**

- Instalando library `bcrypt`
- Utilizando bcrypt para criptografa senha

## Middlewares

**Middleware - 404 Not Found**

- Criando middleware de não dar erro quando não existir rota
- Middlewares são funções que adicionamos em nossa cadeia de chamadas que atendam determinado cenário

**Middleware - Tratamento de erros**

- Criação de middleware para tratamento de todos os erros.
- Instalado http-errors
- Utiliando o `next` avança para o proximo middleware.
- adicionando try catch nos controllers para caso ocorra erro chamar o proximo middleware com o `next`
- No service usuarios, criando validações para regra de negocios

  **Middleware - Validando a request**

  - Capiturando erros de propriedades invalidas e informando o erro.
  - Criando pasta validators e utils
  - Criando funções no utils para retornar mensagem de erro.
  - Criando validators com librabry `express-validators` para retornar mensagem para propries
  - Adicionando middleware especificamente para uma rota.

## Finalizando entidade de usuário

**Atualizando o usuário**

- Criando função `atualizar` no repositorio de `usuario` utilizando `update` do sequelize, identificando por id.
- Criando validações no `usuario.validator` para validar propriedade `nome` e `id`.
- Criando função `atualizar` no `service` para validar se o usuário existe.
- Criado função de `atualizar` no controller do `usuário`

**Deleção de usuário com paranoid**

- Adicionando `paranoid` no `usuario model`, com isso, quando é deletado o registro e registrado na coluna `deletedAt`, caso tente buscar o registro não é retornado, pelo fato de estar usando o `paranoid`
- Criado função de `deletar` no `usuário repository`
- Criado função de `deletar` no `usuário service` e fazer validação de usuário existe
- Criado função de `deletar` no `usuario controler` e validar.
- Criando `validator` que validara id.
- Obs: sem o `paranoid` o registro seria realmente deletado.

## Login e Verificando usuário logado

**Login do usuário**

- Instalando `npm i jsonwebtoken`
- Criando `login validator`
- Criando `login service` onde valida se `usuario` existe e utiliza o `bcrypt.compare` para validar senhas criptografadas.
- Adiciona nova variavel de ambiente `SECRET` que irá criptografa o token.
- Criado token com o `sign` do jsonwebtoken e retornar usuário e token caso sucesso.
- Criado função `login` no controller e validando erros.

**Middleware - Verificando usuário logado**

- Criando middleware authorization.
- Criado função `verifyJWT` que valida se token existe com o `verify` do `jsonwebtoken`.
- Passado middleware `verifyJWT` para rotas de usuário, agora somente com o token no header é possivel utilizar as rotas `encontrarTodos`, `encontrarPorId`, `atualizar`, `deletar`

## Itens, entradas e saidas

**Criando a migration de Item**

- Criando migration `npx sequelize-cli model:generate --name Item --attributes nome:string,quantidade:integer`
- Configurado model de `item`
- Associado `usuario_id` com `usuario`
- Adicionado `paranoid`

**CRUD de itens**

- Criado fução `criar, atualizar, encontrarTodos, encontrarPorId, encontrarUmPorWhere e deletar` no `repository item`
- Criado `item validator` para cada ação da api itens
- Criado `item service`, e funções `criar, atualizar, encontrarTodos, encontrarPorId, encontrarUmPorWhere e deletar`
- Criado `item controller` e funções `criar, atualizar, encontrarTodos, encontrarPorId, encontrarUmPorWhere e deletar`
- Passando usuario id que foi inserido por middleware.
- Criado `item router`

**Criando a migration de entradas**

- Criando migration para tabela de entradas `npx sequelize-cli model:generate --name Entrada --attributes quantidade: integer`, as entradas serão adição de itens
- Criado associção de model item utilizando foreingKey
- Rodando `npx sequelize-cli db:migrate` para criação de tabelas

**Criando migration de saida**

- Criando migration para tabela de entradas `npx sequelize-cli model:generate --name Saida --attributes quantidade: integer`, as entradas serão saida de itens
- Criado associção de model item utilizando foreingKey
- Rodando `npx sequelize-cli db:migrate` para criação de tabelas

**Cadastrando e retornando entradas**

- Criando `entrada.validator`
- Criando `entrada.repository` e funções `criar,encontrarTodos, encontrarPorId`
- Criando `entrada.service` e funções `criar,encontrarTodos, encontrarPorId`
- Criando `entrada.controller` e funções `criar,encontrarTodos, encontrarPorI`

**Corrigindo o Model de saída**

- Corrigindo `association` do model de saida

**Cadastrando e retornando as saídas**

- Criando `saida.repository` e funções `criar,encontrarTodos, encontrarPorId`
- Criando `saida.service` e funções `criar,encontrarTodos, encontrarPorId`
- Criando `saida.validator` e funções `criar,encontrarTodos, encontrarPorId`
- Criando `saida.controller` e funções `criar,encontrarTodos, encontrarPorI`

## Fornecedor e Relatórios

**SQL da consulta de relatórios**

- introdução.

**Gerando planilhas de relatórios com ExcelJS**

- Instalando library exceljs
- Criado `item-reporty.repository`.
- Criando `item-reporty.service` e funções `criarXLsx` para criação de relatorio
- Criando `item-reporty.controller` e funções `xlsx` para criação de relatorio
- Criando `item-reporty.route`

**Migration de Fornecedor**

- Criando migraiton fornecedor `npx sequelize-cli model:generate --name Fornecedor --attributes: nome:string,telefone:string,email:string`

- Rodando migration: `npx sequelize-cli db:migrate`

**CRUD de fornecedor**

- Criando `saida.repository` e funções de cada rota.
- Criando `saida.service` e funções de cada rota.
- Criando `fornecedor.validator` e validações de parametros de cada função.
- Criando `saida.controller` e funções de cada rota.
- Criado rota `fornecedor.route`

**Adicionando fornecedor_id na tabela de entrada**

- Adicionando nova coluna na tabela de entrada `npx sequelize-cli migration: generate --name add-fornecedor-id-column`
- Configurando migration pada adição de coluna ou remoção.
- Adicionando assoction no model entrada

**Adicionando atributo no crud de entradas**

- Adicionando novo atributo `fornecedor_id` no `entrada.validator`
- Adicionando model de fornecedor no `entrada.validator`
