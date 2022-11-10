const db = require("../models/index");
const Pessoa = db.Pessoa;
const Telefone = db.Telefone;
const Endereco = db.Endereco;

async function adicionarTelefone(telefone) {
  const telefoneCriado = await Telefone.create(telefone);
  console.log(telefoneCriado);
}

async function encontrarPessoaComTelefone(idPessoa, idTelefone) {
  const pessoa = await Pessoa.findOne({
    where: { id: idPessoa },
    include: [
      {
        model: Telefone,
        where: { id: idTelefone },
      },
      { model: Endereco },
    ],
  });

  console.log(JSON.parse(JSON.stringify(pessoa)));
}

// adicionarTelefone({
//   numero: "912345678",
//   pessoaId: 2,
// });
encontrarPessoaComTelefone(2, 3);
