const user = {
  name: "Roberta",
  transactions: [],
  balance: 0
};

//var transaction = 'credit'


function createTransaction(type, value){
     //adicionar uma nova transação no array de transações de um usuário
             var valor = {type: type,value: value} 
             user.transactions.push(valor)
             //console.log(valor)//{ type: 'credit', value: 10 }
            
            if(valor.type == "credit"){
                user.balance = user.balance + valor.value
            }else{
                user.balance = user.balance - valor.value
            }
            //console.log(user.balance)/// value inserido acima
            return user.balance
}         

function getHigherTransactionByType (type){
        var higherTransation
        var higherValue = 0
        for(let value of user.transactions)
        
        if (value.type == type && value.value > higherValue){
                higherValue = value.value
                higherTransation = value
        }
        return higherTransation
}

function getAverageTransactionValue(){
        var sum = 0
        for(let average of user.transactions){
            sum = sum + average.value
        }
        return sum / user.transactions.length
}

function getTransactionsCount() {
        let count = {
            credit: 0,
            debit: 0
        }
        for(let value of user.transactions){
        if (value.type === 'credit')
                count.credit++
        else
                count.debit++
        }
        return count
}

//Começa Programa

//transações
createTransaction('credit', 50)
createTransaction('credit', 120)
createTransaction('debit', 80)
createTransaction('debit', 30)

console.log('Final balance: '  + user.balance)

console.log(getHigherTransactionByType ('credit'))
console.log(getHigherTransactionByType ('debit'))

console.log(`Average value: ${getAverageTransactionValue()}`)

console.log(getTransactionsCount())


