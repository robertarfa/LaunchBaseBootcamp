
const alunosTurmaA =  [
                    {nome: 'Roberta', nota: 8},
                    {nome: 'Vanessa', nota: 9},
                    {nome: 'Renata', nota: 7},
                    ]

const alunosTurmaB =  [
                    {nome: 'Jessica', nota: 2},
                    {nome: 'Clarice', nota: 4},
                    {nome: 'Luigi', nota: 9},
                    ]

function calculaMedia(alunosDaTurma){
                        let soma = 0;
                        
                        for (let qty = 0; qty < alunosDaTurma.length; qty++){
                            soma = soma + alunosDaTurma[qty].nota
                        }

                        let media = soma / alunosDaTurma.length
                        
                        return media.toFixed(1)
                                    }

var media1 = calculaMedia(alunosTurmaA);
var media2 = calculaMedia(alunosTurmaB);

function mensagem (media, turma)  {

                        if (media > 5)  {
                                        console.log(`A média da ${turma} foi de ${media}. Parabéns!!!`)
                                        }else{
                                        console.log(`A média da ${turma} é menor do que 5.`)
                                        }
                                }

var mensagemA = mensagem(media1, "turma A");
var mensagemB = mensagem(media2, "turma B");