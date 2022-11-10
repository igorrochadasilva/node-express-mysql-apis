const db = require("../models/index");
const sequelize = db.sequelize;

//Raw Query
//Quando consultas forem muito complexas, utilizar a forma raw query

function encontrarPorIdv2(id) {
  sequelize
    .query("SELECT * FROM pessoas where id = :id", {
      replacements: { id: id },
      type: sequelize.QueryTypes.SELECT,
      raw: true,
      plan: true,
    })
    .then((pessoa) => {
      console.log("\n \n \n");
      console.log(pessoa);
    });
}

function encontrarPorNome(nome) {
  //Select nome, sobrenome from pessoas where nome = 'Jerrie'
  sequelize
    .query("SELECT nome, sobrenome from pessoas where nome = :nome", {
      replacements: { nome: nome },
      type: sequelize.QueryTypes.SELECT,
      raw: true,
      plan: true,
    })
    .then((pessoa) => {
      console.log("\n \n \n");
      console.log(pessoa);
    });
}

function encontrarComIdIn(arrayIds) {
  //Select * from pessoas where id in (1, 2, 3, 4)
  sequelize
    .query("SELECT * from pessoas where id in (:arrayIds)", {
      replacements: { arrayIds },
      type: sequelize.QueryTypes.SELECT,
      raw: true,
    })
    .then((pessoa) => {
      console.log("\n \n \n");
      console.log(pessoa);
    });
}

function encontrarComOffsetElimit() {
  //Select * from pessoas LIMIT 10 offset 990
  sequelize
    .query("SELECT * from pessoas LIMIT 10 offset 990", {
      type: sequelize.QueryTypes.SELECT,
      raw: true,
    })
    .then((pessoa) => {
      console.log("\n \n \n");
      console.log(pessoa);
    });
}

function encontrarComLike(replacements) {
  //Select * from pessoas where nome LIKE 'Ro%' LIMIT 10
  sequelize
    .query("SELECT * from pessoas where nome LIKE :nome LIMIT :limit", {
      replacements: replacements,
      type: sequelize.QueryTypes.SELECT,
      raw: true,
    })
    .then((pessoa) => {
      console.log("\n \n \n");
      console.log(pessoa);
    });
}

function encontrarUtilizandoOperadores(replacements) {
  //Select * from pessoas where id <= 5 or sobrenome = 'Harphan'
  sequelize
    .query("SELECT * from pessoas where id <= :id or sobrenome = :sobrenome;", {
      replacements,
      type: sequelize.QueryTypes.SELECT,
      raw: true,
    })
    .then((pessoa) => {
      console.log("\n \n \n");
      console.log(pessoa);
    });
}

// encontrarPorIdv2(500);
// encontrarPorNome("Jerrie");
// encontrarComIdIn([1, 2, 3, 4, 5]);
// encontrarComOffsetElimit();
// encontrarComLike({
//   nome: "Ro%",
//   limit: 10,
// });
encontrarUtilizandoOperadores({
  id: 5,
  sobrenome: "Harpham",
});
