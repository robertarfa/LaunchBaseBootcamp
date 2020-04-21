const fs = require('fs')
const data = require('./data.json')
//create

exports.postTeachers = function(req, res){
    
    const keys = Object.keys(req.body)
    // Vai retornar um array ["avatar_url","name","birth","services"]
        
    for(key of keys){
            if (req.body[key] == "")
                return res.send('Please, fill in all the required fields.')
        }

    let { avatar_url, name, birth, selectDegree, classType, services} = req.body
    
        // Vamos transformar o birth para o numérico igual do Date.now
    birth = Date.parse(birth)
    //inserir a data de hoje
    const created_at = Date.now()
    //criar id único
    const id = Number(data.teachers.length + 1)
        
    // {[vazio]}
    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        selectDegree,
        classType,
        services,
        created_at
    }) //{[preencher o array]}

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
            if (err) return res.send("Error writing file!")

            return res.redirect('/instructors')
    })

    //return res.send(req.body)
    //Vai retornar um objeto {"avatar_url":"","name":"","birth":"","services":""}
}
