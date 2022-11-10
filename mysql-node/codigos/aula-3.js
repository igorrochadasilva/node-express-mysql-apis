const db = require('../models/index')
const Pessoa = db.Pessoa

//criando registro pessoa
function criarPessoa(){
    Pessoa.create({
        nome: 'João',
        sobrenome: 'Silva',
        cpf: '111.111.111-11',
        email: 'joao@gmail.com',
        rg: '123456789'
    }).then(pessoaCriada => console.log(pessoaCriada))
}

function atualizarPessoa(id){
    Pessoa.update({
        cpf: '000.000.000-00',
        rg: '123.321321'        
    }, {
        where: {
            id
        }
    }).then(pessoa => console.log(pessoa))
}

function deletarPessoa(id){
    Pessoa.destroy({
        where:{
            id
        }
    })
}

// atualizarPessoa(1)
deletarPessoa(1)
// criarPessoa()