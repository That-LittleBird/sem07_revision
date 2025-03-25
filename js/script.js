/*
    const chemin = this.previousElementSibling.getAttribute("src");
    const image = document.createElement('img');
    image.setAttribute('src', chemin);
    image.classList.add('zoom');
    modale.appendChild(image);
 */

const boutons = document.querySelectorAll('.bouton');
const modale = document.querySelector('.modale');

for (let i = 0; i < boutons.length; i++) {
    boutons[i].addEventListener("click", openModale);
}

function openModale() {
    modale.classList.add('visible');
    modale.addEventListener("click", closeModale);
}

function closeModale() {
    modale.classList.remove('visible');
}