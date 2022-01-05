const loader = document.querySelector('.loader')
const links = document.querySelectorAll('.nav-a')
const modal = document.querySelector('.modal')
const modalTitle = document.querySelector('.modal-title')
const modalDescription = document.querySelector('.modal-description')
const modalCloseButton = document.querySelector('.modal-close')
let modalIsOpen = false

window.addEventListener('load', () => {
    loader.style.display = 'none'
    console.log('loaded');
})

links.forEach((link) => {
    link.onclick = () => {
        if(!modalIsOpen){
        console.log(link, 'clicked');
        modal.style.animation = 'modalOut .3s linear 0s alternate'
        modal.style.visibility = 'visible'
        modal.style.pointerEvents = 'all'
        modalTitle.innerText = link.innerText
        // modalDescription.innerText = link.innerText + link.innerText
        modalIsOpen = !modalIsOpen
        console.log(modalIsOpen);

        }
    }
})
modalCloseButton.onclick = () => {
    setTimeout(() => {
        modal.style.animation = 'modalIn .3s linear 0s alternate'
        modal.style.pointerEvents = 'none'
        modal.style.visibility = 'hidden'
        modalIsOpen = !modalIsOpen
        console.log(modalIsOpen);
    }, 100);
}
document.addEventListener('mouseup', (e) => {
    if(e.target != modal && modalIsOpen && e.target.parentNode != modal && e.target != modalTitle && e.target != modalDescription){
        setTimeout(() => {
            modal.style.animation = 'modalIn .3s linear 0s alternate'
            modal.style.pointerEvents = 'none'
            modal.style.visibility = 'hidden'
            modalIsOpen = !modalIsOpen
        }, 100);
    }
})