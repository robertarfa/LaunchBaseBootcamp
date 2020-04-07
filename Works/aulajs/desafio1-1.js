/* 🚀 Sobre o desafio
Desafios para fortalecer alguns conceitos, entre eles:

- Variáveis;
- Condicionais;
- Operadores.

Cálculo de IMC

Crie um programa para calcular o IMC e nível de obesidade de uma pessoa. */

/* const nome = "Roberta";
const peso = 60;
const altura = 1.60;
const sexo = "F";

const imc = (peso / (altura * altura)).toFixed(2);

/* SE o IMC maior ou igual a 30: Carlos você está acima do peso;
SE o IMC menor que 29.9: Carlos você não está acima do peso; 

console.log(imc)
if (imc >= 30){
    console.log(`${nome} você está acima do peso`)
}else{
    console.log(`${nome} você não está acima do peso`)
} */

/* 

Cálculo de aposentadoria

Crie um programa para calcular a aposentadoria de uma pessoa.

Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :) 
 
- O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
- Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;

Com base nas regras acima imprima na tela as mensagens:

- SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
- SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!; 
*/

const nome = "Roberta";
const sexo = "F";
const idade = 33;
const contribuicao = 8;

const calculoContribuicao = idade + contribuicao

const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

if ( homemPodeAposentar || mulherPodeAposentar) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}