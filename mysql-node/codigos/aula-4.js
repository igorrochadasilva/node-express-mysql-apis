const db = require('../models/index')
const Pessoa = db.Pessoa

const pessoas = [
    {
        nome: 'João',
        sobrenome: 'Silva',
        cpf: '222.222.222-22',
        email: 'joao@gmail.com',
        rg: '2222222'
    },
    {
        nome: 'Victor',
        sobrenome: 'Silva',
        cpf: '111.111.111-11',
        email: 'victor@gmail.com',
        rg: '111111111'
    },
    {
        nome: 'Yuri',
        sobrenome: 'Silva',
        cpf: '333.333.333-33',
        email: 'yuri@gmail.com',
        rg: '333333333'
    }
]

function criarPessoa(){
    Pessoa.bulkCreate(pessoas).then(pessoas => console.log(pessoas))
}

criarPessoa()