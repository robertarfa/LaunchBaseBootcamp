/* ============================================

OPERADORES DE COMPARAÇÃO

> Maior
< Menor
>= Maior igual a
<= Menor igual a
== Igual a
===Igual e do mesmo tipo
!= Diferente de
!== Diferente, inclusive do tipo

=================================================*/

// true or false - boolean
/* console.log("Primeira parte")
console.log(5 > 4) //true
console.log(5 < 4) //false
console.log(5 >= 4) //true
console.log(4 <= 4) //true

console.log("Segunda parte")
console.log(4 == "4") //true
console.log(4 === "4") //false
console.log(4 != "4") //false
console.log(4 !== "5") //true
 */
//DESAFIO 1

/* console.log("- Verificar se a pessoa tem 18 anos ou mais");
console.log("- Se sim, deixar entrar, se não, bloquear a entrada");

const idade = 17

if(idade >= 18){
    console.log("*Deixar entrar*")
}else{
    console.log("*Bloquear a entrada*")
}

console.log("- Se a pessoa tem 17 anos");
console.log("- Avisa para voltar quando fizer 18 anos");

if (idade === 17){
    console.log("*Volte quando fizer 18 anos*")
} */


/* ============================================

OPERADORES LÓGICOS

&&  "E" As duas condições devem ser verdadeiras para que a condição final seja verdadeira.
||  "OU" Uma das condições deve ser verdadeira para que a condição final seja verdadeira.
!   "NÂO" Nega uma condição

=================================================*/

/* console.log(5 == 5 && 6 == 6) //true
console.log(5 == 5 && 6 != 6) //false

console.log(5 != 5 || 6 == 6) //true
console.log(5 == 5 || 6 != 6) //true

console.log(!(5 > 6)) //true
console.log(!(5 < 6)) //false */

console.log("- Verificar se a pessoa tem 18 anos ou mais");
console.log("- Se sim, deixar entrar, se não, bloquear a entrada");
console.log("- Se a pessoa tem 17 anos");
console.log("- Avisa para voltar quando fizer 18 anos");

const idade = 16

if(idade < 18 || idade === 17){
    console.log("*Bloquear a entrada*")
    console.log("*Volte quando fizer 18 anos*")
}else{
    console.log("*Deixar entrar*")
}

if(!(idade >= 18) || idade === 17){
    console.log("*2 - Bloquear a entrada*")
    console.log("*2 - Volte quando fizer 18 anos*")
}else{
    console.log("*2 - Deixar entrar*")
}


/* ============================================

OPERADORES ARITMÉTICOS

* Multiplicação
/ Divisão
% Resto da divisão
+ Adição
- Subtração

=================================================*/
