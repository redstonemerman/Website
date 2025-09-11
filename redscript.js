document.querySelector('.bgvid').playbackRate = 0.5;

const texas = document.querySelector('#texasbox');
const cali = document.querySelector('#calibox');
const ca = document.querySelector('#ca');
const x = document.querySelectorAll('.x');

const states = [texas, cali];

const openTexas = () => {
    texas.classList.add('active')
};

const openCali = () => {
    cali.classList.add('active')
};

const closeState = () => {
    states.forEach(states => states.classList.remove('active'));
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape'){
    states.forEach(states => states.classList.remove('active'));
    }
});

tx.addEventListener('click', openTexas);
tx.addEventListener('touchstart', openTexas);

ca.addEventListener('click', openCali);
ca.addEventListener('touchstart', openCali);

x.forEach(x => x.addEventListener('click',closeState));