const nome = 'Roberta'
const idade = 30

const conc = `Roberta tem ${idade} anos`

console.log(conc)

const aluno01 = 'Roberta'
const notaAluno01 = 9.8

const aluno02 = 'Vanessa'
const notaAluno02 = 10

const aluno03 = 'Clarice'
const notaAluno03 = 3

const media = ((notaAluno01 + notaAluno02 + notaAluno03) / 3).toFixed(2)

if (media > 5){
    console.log(`A média foi de ${media}. Parabéns!!!`)
}else{
    console.log('A média é menor do que 5')
}