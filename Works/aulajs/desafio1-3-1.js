const usuarios = [
    { nome: "Roberta", tecnologias: ["HTML", "CSS", "JavaScript"] },
    { nome: "Vanessa", tecnologias: ["Java", "C#"] },
    { nome: "Renata", tecnologias: ["React", "Node.js"] }
  ];

  for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}
