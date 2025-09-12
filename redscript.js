document.querySelector('.bgvid').playbackRate = 0.5;
// CONSTANTS
const texas = document.querySelector('#texasbox');
const cali = document.querySelector('#calibox');
const ca = document.querySelector('#ca');
const x = document.querySelectorAll('.x');
const states = [texas, cali];

// OPEN/CLOSE STATE LIGHTBOXES
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
// CLICK LISTENERS TO OPEN STATE LIGHTBOXES
tx.addEventListener('click', openTexas);
tx.addEventListener('touchstart', openTexas);

ca.addEventListener('click', openCali);
ca.addEventListener('touchstart', openCali);

x.forEach(x => x.addEventListener('click',closeState));

// CALCULATE SCROLLING DISTANCE
function updateScrollVariable() {
  const scroll = document.documentElement.scrollHeight - window.innerHeight;
  document.documentElement.style.setProperty('--scroll', `${scroll}%`);
}

window.addEventListener('load', updateScrollVariable);

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(updateScrollVariable, 100);
});
