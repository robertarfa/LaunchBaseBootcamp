
const classA = [
    {
        name: 'Roberta',
        grade: 10
    },
    {
        name: 'Vanessa',
        grade: 8
    },
    {
        name: 'Clarice',
        grade: 3
    }
]

const classB = [
    {
        name: 'Luigi',
        grade: 7
    },
    {
        name: 'Renata',
        grade: 8
    },
    {
        name: 'Gabriela',
        grade: 3
    }
]

function calculeAverage(students) { //Cálculo da média para número de alunos na classe - students recebe class A e class B
    let sum = 0
    for (let i = 0; i < students.length; i++) { // início ; teste ; incremento
        sum = sum + students[i].grade
    }
    const average = sum / students.length
    return average.toFixed(2) //retorna o valor para o parâmetro
}


//função para ler a mensagem no console, recebendo a média e a class
function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`The average of ${turma} was ${average}. Congratulations`)
    } else {
        console.log(`The average of ${turma} was less then 5.`)
    }
}



//Marcar student como failed
//E enviar como mensagem

function checkFailed(student) { //Função para marcar student como failed
    student.failed = false //Declaro como falso
    if (student.grade < 5) {
        student.failed = true // Guarda student como failed ou não
    }
}

function sendMessageFlunked(student) {
    if (student.failed == true) { //Se o student for guardado como failed na função inteiro...
        console.log(`The student ${student.name} failed`)
    }
}

function studentFlunked(students) { //junta as duas funções anteriores em uma só
    for (let student of students) { //procura por studentes failed (function checkFailed) dentro de classA e classB
        checkFailed(student) //executa as funções anteriores
        sendMessageFlunked(student) //executa as funções anteriores
    }
}


const average1 = calculeAverage(classA)
const average2 = calculeAverage(classB)

sendMessage(average1, 'Class A') //Passando parametros para dentro do bloco de código
sendMessage(average2, 'Class B') //Passando parametros para dentro do bloco de código

studentFlunked(classA)
studentFlunked(classB)