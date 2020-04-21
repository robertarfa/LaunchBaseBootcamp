const express = require('express')
const routes = express.Router()
const teachers = require('./teachers')

routes.get('/', function(req, res){
    return res.redirect('/instructors')
})

routes.get('/instructors', function(req, res){
    return res.render('instructors/index')
})

routes.get('/instructors/create', function(req, res){
    return res.render('instructors/create')
})

routes.get('/members', function(req, res){
    return res.render('members')
})

routes.post('/instructors', teachers.postTeachers)

module.exports = routes



// server.get('/', function(req, res){
//     const about = {
//         avatar_url: "https://avatars2.githubusercontent.com/u/22533625?s=400&u=2ea5d05adbc2847fbeeecd7358bbecedcc431d6a&v=4",
//         name: "Roberta Aguilar",
//         role: "Estudante de HTML, CSS e JavaScript",
//         description1: "Continuamente trabalhando para melhorar as habilidades em HTML, CSS e JavaScript.",
//         description2: 'Atualmente estudante do bootcamp LaunchBase da <a href="https://rocketseat.com.br/" target="blank">Rocketseat</a>',
//         link: [
//             {name:"Linkedin", url: "https://www.linkedin.com/in/robertarfa/"},
//             {name:"GitHub", url:"https://github.com/robertarfa"},
//             {name:"Sourcerer" , url:"https://sourcerer.io/robertarfa"},
//             {name:"Twiter" , url: "https://twitter.com/roberta_rfa"}
//         ]

//     }
//     return res.render('about', {about})
// })

// server.get('/aulas', function(req, res){
//     return res.render('aulas', {items: videos})
// })

// server.get('/video', function(req, res){
//     const id = req.query.id

//     const video = videos.find(function(video){
//         return video.id == id
    
//     })

//     if (!video){
//         return res.send("Video not found")
//     }

//     return res.render("video", {item: video})
// })

// server.use(function(req, res) {
//     res.status(404).render("not-found");
//   });