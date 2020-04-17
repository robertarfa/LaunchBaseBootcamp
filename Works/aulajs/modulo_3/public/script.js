//abrir o modal quando clica em cada card
var onOffModal = document.querySelector('.opacity-modal')
var cards = document.querySelectorAll('.card')
 

for (let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute('id');
        onOffModal.classList.add('active');
        onOffModal.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`
    })
}

//botão fechar do modal
document.querySelector('.close-modal').addEventListener("click",function(){
        onOffModal.classList.remove('active');
        onOffModal.querySelector('iframe').src = "";
})



