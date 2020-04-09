var Empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereço:   {rua: "Rua Guilherme Gembala", 
                numero: 260,
                }
}

console.log(`A empresa ${Empresa.nome} está localizada em ${Empresa.endereço.rua}, ${Empresa.endereço.numero}`);

var Programador = {
    nome: "Roberta",
    idade: 33,
    tecnologias:[
                {nome: "JavaScript", especialidade: "Front-end"},
                {nome: "CSS", especialidade: "Front-end"},
                ]
};

console.log(`O usuário ${Programador.nome} tem ${Programador.idade} anos e usa tecnologia ${Programador.tecnologias[0].nome} com especialidade em ${Programador.tecnologias[0].especialidade}`)