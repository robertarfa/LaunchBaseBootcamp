
var alunosTurmaA =  [
                    {nome: 'Roberta', nota: 8},
                    {nome: 'Vanessa', nota: 9},
                    {nome: 'Renata', nota: 7},
                    ]

var alunosTurmaB =  [
                    {nome: 'Jessica', nota: 2},
                    {nome: 'Clarice', nota: 5},
                    {nome: 'Luigi', nota: 10},
                    ]

function calculaMedia(alunosDaTurma){
                       return ((alunosDaTurma[0].nota + alunosDaTurma[1].nota + alunosDaTurma[1].nota) / alunosDaTurma.length).toFixed(1)
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