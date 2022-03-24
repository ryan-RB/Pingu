document.addEventListener("DOMContentLoaded", () =>{
console.log("JS Loaded")

const items = document.querySelectorAll('li img');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;
let btnPingu = document.getElementById("Noot");
const music = new Audio('./assets/nootnoot.m4a')
//cliquez sur la tête du Pingu
const JouerSon = () => {
    music.play();
}

btnPingu.addEventListener('click',JouerSon)

let sliderApp = ({
    
    slideSuivante () {
    items[count].classList.remove('active');

    count < nbSlide - 1 ? count++ : count = 0;

    items[count].classList.add('active')
    console.log(count);
    
},

slidePrecedente () {
    items[count].classList.remove('active');

    count > 0 ? count-- : count = nbSlide - 1;

    items[count].classList.add('active')
    
},

keyPress (e) {
    console.log(e);
    
    if(e.keyCode === 37){
        sliderApp.slidePrecedente();
    } else if(e.keyCode === 39){
        sliderApp.slideSuivante();
    }}


})

suivant.addEventListener('click', sliderApp.slideSuivante)
precedent.addEventListener('click', sliderApp.slidePrecedente)
document.addEventListener('keydown', sliderApp.keyPress)

})