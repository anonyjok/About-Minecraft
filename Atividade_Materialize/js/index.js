document.querySelector('#bgaudio').volume = 1;
const backgroundSlide = document.querySelector('#background-slide');
const backgroundImg = document.querySelectorAll('#background-slide img');

const size = backgroundImg[0].clientWidth;

function transicao() {
    backgroundSlide.style.transition = "transform 120s linear";
    backgroundSlide.style.transform = 'translateX(' + (-size) + 'px)';
}

function transicionado() {
    backgroundSlide.style.transition = "none";
    backgroundSlide.style.transform = 'translateX(0px)';
}

transicao();

setInterval(()=>{
    transicao();
}, 1000);

backgroundSlide.addEventListener('transitionend',()=>{
    backgroundSlide.style.transition = "none";
    backgroundSlide.style.transform = 'translateX(0px)';
});

document.body.addEventListener('mouseover',() => {
    document.querySelector('#bgaudio').play();
});

document.querySelector('#volume').addEventListener('input', (e) => {
    document.querySelector('#bgaudio').volume = (e.target.value) / 100;
    document.querySelector('#vol').innerText = e.target.value;
});

document.querySelector('#mute').addEventListener('click', () => {
    if (document.querySelector('#bgaudio').volume === 0) {
        document.querySelector('#bgaudio').volume = (document.querySelector('#volume').value / 100);
        document.querySelector('#vol').innerText = document.querySelector('#volume').value;
    } else {
        document.querySelector('#bgaudio').volume = 0;
    }
});

document.querySelector('.dropdown-trigger').addEventListener('click', ()=>{
    M.Dropdown._dropdowns[0].options.closeOnClick = false;
});