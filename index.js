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
const cx = document.querySelectorAll('.cx');
const tvlogs = document.querySelectorAll('.tmenu');
const hvlogs = document.querySelectorAll('.hmenu');
const cvlogs = document.querySelectorAll('.cmenu');
const vlogmenu = [... tvlogs, ... hvlogs, ... cvlogs];
const hou = document.getElementById('houston');
const tem = document.getElementById('temple');
const states = [texas, cali];
const txcities = [tem, hou];
const cities = [... txcities];

console.log(vlogmenu);

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

ho.addEventListener('click', () => openCity(houston));
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
cx.forEach(ex => ex.addEventListener('click',closeCity));

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape'){
    if (!txcities.some(city => city.classList.contains('active'))){
      closeState();
    }
    else closeCity();
  }
});


// REVEAL SUBMENUS
const openSubmenu = (menu) => {
  menu.classList.add('menuactive')
}

vlogmenu.forEach(menuitem =>
  menuitem.addEventListener('click', () => openSubmenu(menuitem))
);

document.addEventListener('click', (e) => {
  vlogmenu.forEach(menuitem => {
    if (!menuitem.contains(e.target)) {
      menuitem.classList.remove('menuactive');
    }})
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