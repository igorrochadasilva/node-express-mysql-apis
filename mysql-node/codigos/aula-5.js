const { sequelize } = require("../models/index");
const db = require("../models/index");
const Pessoa = db.Pessoa;
const Op = db.Sequelize.Op;

function encontrarPorId(id) {
  //Select pessoa form pessoas where id = id
  Pessoa.findByPk(id).then((pessoa) => {
    console.log("\n \n \n");
    console.log(pessoa);
  });
}

function encontrarPorNome(nome) {
  //Select nome, sobrenome from pessoas where nome = 'Jerrie'
  Pessoa.findOne({
    attributes: ["nome", "sobrenome"],
    where: {
      nome: nome,
    },
    raw: true,
  }).then((pessoa) => {
    console.log("\n \n \n");
    console.log(pessoa);
  });
}

function encontrarComIdIn(arrayIds) {
  //Select * from pessoas where id in (1, 2, 3, 4)
  Pessoa.findAll({
    where: {
      id: arrayIds,
    },
    raw: true,
  }).then((pessoa) => {
    console.log("\n \n \n");
    console.log(pessoa);
  });
}

function encontrarComOffsetElimit() {
  //Select * from pessoas LIMIT 10 offset 990
  Pessoa.findAll({
    offset: 990,
    limit: 10,
    raw: true,
  }).then((pessoa) => {
    console.log("\n \n \n");
    console.log(pessoa);
  });
}

function encontrarComLike() {
  //Select * from pessoas where nome LIKE 'Ro%' LIMIT 10
  Pessoa.findAll({
    where: {
      nome: {
        [Op.like]: "Ro%",
      },
    },
    limit: 10,
    raw: true,
  }).then((pessoa) => {
    console.log("\n \n \n");
    console.log(pessoa);
  });
}

function encontrarUtilizandoOperadores() {
  //Select * from pessoas where id <= 5 or sobrenome = 'Harphan'
  Pessoa.findAll({
    where: {
      [Op.or]: [
        {
          id: {
            [Op.lte]: 5,
          },
        },
        {
          sobrenome: "Harpham",
        },
      ],
    },
    raw: true,
  }).then((pessoa) => {
    console.log("\n \n \n");
    console.log(pessoa);
  });
}

// encontrarUtilizandoOperadores();
// encontrarComLike();
// encontrarComOffsetElimit();
// encontrarComIdIn([2, 3, 4]);
// encontrarPorId(2);
// encontrarPorNome("Yuri");
