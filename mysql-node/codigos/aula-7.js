const db = require("../models/index");
const Pessoa = db.Pessoa;
const Endereco = db.Endereco;

async function adicionarEndereco(endereco) {
  const enderecoCriaddo = await Endereco.create(endereco);
  console.log("\n\n\n");
  console.log(enderecoCriaddo);
}

async function procurarEnderecoPorId(enderecoId) {
  const endereco = await Endereco.findOne({
    where: { id: enderecoId },
    raw: true,
    nest: true,
    logging: true,
    include: [
      {
        model: Pessoa,
      },
    ],
  });
  console.log(endereco);
}

async function procurarPessoasComEndereco() {
  const pessoa = await Pessoa.findOne({
    raw: true,
    nest: true,
    include: [
      {
        model: Endereco,
        required: true,
      },
    ],
  });
  console.log(pessoa);
}

// adicionarEndereco({
//   bairro: "Jardim esmeralda",
//   estado: "estado do teste",
//   cidade: "Sao paulo",
//   rua: "Rua Anibal Pedro Godinho",
//   numero: "235",
//   pessoaId: 2,
// });

// procurarEnderecoPorId(1);
procurarPessoasComEndereco();
