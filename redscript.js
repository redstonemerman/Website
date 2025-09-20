// VIDEO 0.5
document.querySelector('.bgvid').playbackRate = 0.5;


// CONSTANTS
const world = document.querySelector('#world');
const usa = document.querySelector('#usa');
const usab = document.querySelector('#usab');
const worldb = document.querySelector('#worldb');
const texas = document.querySelector('#texasbox');
const cali = document.querySelector('#calibox');
const sx = document.querySelectorAll('.sx');
const states = [texas, cali];
const txcities = [temple];
const cities = [... txcities];


// SWITCH BETWEEN WORLD/USA
const openMap = (mapon, mapoff) => {
  mapon.classList.add('active')
  mapoff.classList.remove('active')
}

usab.addEventListener('click', () => openMap(usa, world));
worldb.addEventListener('click', () => openMap(world, usa));


// OPEN STATE LIGHTBOXES
const openState = (state) => {
  state.classList.add('active')
  sx.forEach(x => x.classList.add('active'));
}

tx.addEventListener('click', () => openState(texas));
ca.addEventListener('click', () => openState(cali));


// OPEN CITY LIGHTBOXES
const openCity = (city) => {
  city.classList.add('active')
  sx.forEach(x => x.classList.remove('active'));
}

tp.addEventListener('click', () => openCity(temple));


// CLOSE LIGHTBOXES
const closeState = () => {
  states.forEach(state => state.classList.remove('active'));
};

const closeCity = () => {
  cities.forEach(city => city.classList.remove('active'));
  sx.forEach(x => x.classList.add('active'));
};

sx.forEach(ex => ex.addEventListener('click',closeState));

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape'){
    if (txcities.every(city => city.classList.contains('active')) === false){
      closeState();
    }
    else closeCity();
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
