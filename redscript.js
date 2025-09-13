// VIDEO 0.5
document.querySelector('.bgvid').playbackRate = 0.5;

// CONSTANTS
const world = document.querySelector('#world');
const usa = document.querySelector('#usa');
const usab = document.querySelector('#usab');
const worldb = document.querySelector('#worldb');
const texas = document.querySelector('#texasbox');
const cali = document.querySelector('#calibox');
const ca = document.querySelector('#ca');
const x = document.querySelectorAll('.x');
const states = [texas, cali];

// SWITCH BETWEEN WORLD/USA
const openMap = (mapon, mapoff) => {
  mapon.classList.add('active')
  mapoff.classList.remove('active')
}

usab.addEventListener('click', () => openMap(usa, world));
usab.addEventListener('touchstart', () => openMap(usa, world));
worldb.addEventListener('click', () => openMap(world, usa));
worldb.addEventListener('touchstart', () => openMap(world, usa));

// OPEN STATE LIGHTBOXES
const openState = (state) => {
  state.classList.add('active')
}

tx.addEventListener('click', () => openState(texas));
tx.addEventListener('touchstart', () => openState(texas));
ca.addEventListener('click', () => openState(cali));
ca.addEventListener('touchstart', () => openState(cali));

// CLOSE STATE LIGHTBOXES
const closeState = () => {
  states.forEach(states => states.classList.remove('active'));
};

x.forEach(x => x.addEventListener('click',closeState));

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape'){
  states.forEach(states => states.classList.remove('active'));
  }
});

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
