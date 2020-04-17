const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))
//no render não precisa colocar .html pq essa linha já faz isso
server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    noCache: true
})

//routes
server.get('/', function(req, res){
    return res.render('about')
})
server.get('/aulas', function(req, res){
    return res.render('aulas')
})
server.use(function(req, res) {
    res.status(404).render("not-found");
  });

//porta onde o servidor está rodando
server.listen(5000, function(){
    console.log('server is running')
})