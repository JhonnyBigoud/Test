// Fonction Caroussel

const items = document.querySelectorAll('img.eleanor');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');

let count = 0;

function nextSlide() {
    items[count].classList.remove('active');
    
    if (count < nbSlide -1) {
        count++;
    }
    else {
        count = 0;
    }
    
    items[count].classList.add('active');
    console.log(count);
}

suivant.addEventListener('click', nextSlide)

function previousSlide() {
    items[count].classList.remove('active');

    if (count >0) {
        count--;
        console.log(count);

    }
    else {
        count = nbSlide -1;
        console.log(count);
    }

    items[count].classList.add('active');
}

precedent.addEventListener('click', previousSlide)

//Changement input = date au clic

function changeInputType(input) {
    input.type = "date";
}

let inputs = document.getElementsByClassName("inputana");
for(let i = 0; i<inputs.length; i++) {
    inputs[i].addEventListener("focus",function(){changeInputType(this);});
}

changeInputType();