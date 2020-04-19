const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

server.use(express.static('public'))
server.use(routes)

//no render não precisa colocar .html pq essa linha já faz isso
server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    noCache: true,
    autoescape: false
})


//porta onde o servidor está rodando
server.listen(5000, function(){
    console.log('server is running')
})