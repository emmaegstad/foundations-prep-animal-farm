const catImage = document.getElementById('cat-image');
const dogImage = document.getElementById('dog-image');
const horseImage = document.getElementById('horse-image');
const meow = new Audio('assets/meow.wav');
const bark = new Audio('assets/bark.wav');
const neigh = new Audio('assets/neigh.wav');

catImage.addEventListener('click', () => {
    meow.currentTime = 0;
    meow.play();
    catImage.classList.add('selected');
});

dogImage.addEventListener('click', () => {
    bark.currentTime = 0;
    bark.play();
    dogImage.classList.add('selected');
});

horseImage.addEventListener('click', () => {
    neigh.currentTime = 0;
    neigh.play();
    horseImage.classList.add('selected');
});

document.addEventListener('keyup', event => {
    if (event.key === 'c') {
        meow.currentTime = 0;
        meow.play();
        catImage.classList.add('selected');
    } else if
        (event.key === 'd') {
        bark.currentTime = 0;
        bark.play();
        dogImage.classList.add('selected');
    } else if
        (event.key === 'h') {
        neigh.currentTime = 0;
        neigh.play();
        horseImage.classList.add('selected');
    }
}
);

const onAnimationEnd = (ev) => {
    ev.target.classList.remove('selected');
};

catImage.addEventListener('animationend', onAnimationEnd);
dogImage.addEventListener('animationend', onAnimationEnd);
horseImage.addEventListener('animationend', onAnimationEnd);