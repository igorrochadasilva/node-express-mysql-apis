const db = require("../models/index");
const Pessoa = db.Pessoa;

async function criarPessoas() {
  const t = await db.sequelize.transaction();
  try {
    await Pessoa.create(
      {
        nome: "Gabriel",
        sobrenome: "test",
        cpf: "1234567",
        email: "Gabriel@gmail.com",
        rg: "123456",
      },
      { transaction: t }
    );
    await Pessoa.create(
      {
        nome: "Dorgival",
        sobrenome: "test",
        cpf: "1234567",
        email: "Dorgival@gmail.com",
        rg: "123456",
      },
      { transaction: t }
    );

    await t.commit();
    console.log("cadastrou");
  } catch (error) {
    await t.rollback();
    console.log("erro ocorreu");
  }
}

async function criarPessoasTransaction() {
  try {
    const result = await db.sequelize.transaction(async (t) => {
      await Pessoa.create(
        {
          nome: "Roberto",
          sobrenome: "test",
          cpf: "1234567",
          email: "roberto@gmail.com",
          rg: "123456",
        },
        { transaction: t }
      );

      await Pessoa.create(
        {
          nome: "Anna",
          sobrenome: "test",
          cpf: "1234567",
          email: "anna@gmail.com",
          rg: "123456",
        },
        { transaction: t }
      );

      return true;
    });
    console.log("usuários cadastrados");
  } catch (error) {
    console.log(error);
  }
}

criarPessoas();
