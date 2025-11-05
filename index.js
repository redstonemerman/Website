// VIDEO 0.5
document.querySelector('.bgvid').playbackRate = 0.5;

// MAP CONSTANTS
const world = document.querySelector('#world');
const usa = document.querySelector('#usa');
const usab = document.querySelector('#usab');
const worldb = document.querySelector('#worldb');

const texas = document.querySelector('#texasbox');
const cali = document.querySelector('#calibox');
const stateKey = {
  t: texas,
  c: cali
}
const sx = document.querySelectorAll('.sx');
const cx = document.querySelectorAll('.cx');
const hou = document.getElementById('houston');
const tem = document.getElementById('temple');
let openTXcity = false;
const texasKey = {
  h: hou,
  t: tem
}
const states = [texas, cali];
const txcities = [tem, hou];
const cities = [... txcities];

// MENU CONSTANTS
let menuOn = false;
let subOpen = false;
const menuKey = document.querySelectorAll('#menukey');

const mmenu = document.querySelector('#m')
const shorts = document.querySelector('#s')
const directsMap = {
  m: mmenu,
  s: shorts
}
const hvlogs = document.querySelector('.hmenu');
const cvlogs = document.querySelector('.cmenu');
const tvlogs = document.querySelector('.tmenu');
const vlogmenu = [tvlogs, hvlogs, cvlogs];
const menuMap = {
  h: hvlogs,
  c: cvlogs,
  t: tvlogs
};
const avlogs = document.querySelector('#a')
const kvlogs = document.querySelector('#k')
const fhvlogs = document.querySelector('#fh')
const homeMap = {
  a: avlogs,
  k: kvlogs,
  f: fhvlogs
}
const b1vlogs = document.querySelector('#b1')
const fcvlogs = document.querySelector('#fc')
const b2vlogs = document.querySelector('#b2')
const collegeMap = {
  b: b1vlogs,
  f: fcvlogs,
  a: b2vlogs
}
const wvlogs = document.querySelector('#w')
const pvlogs = document.querySelector('#p')
const travelMap = {
  w: wvlogs,
  p: pvlogs
}

// LOADING SCREEN
window.addEventListener('load', () => {
  const loading = document.querySelector('.loading');
  const video = document.querySelector('.bgvid');
  loading.classList.add('fadeaway');
  video.play();
  setTimeout(() => {
    loading.style.display = 'none';
  }, 500);
})

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
const openCity = (city, state) => {
  city.classList.add('active')
  sx.forEach(x => x.classList.remove('active'));
  if(state === texas){
    openTXcity = true;
  }
}

ho.addEventListener('click', () => openCity(houston, texas));
tp.addEventListener('click', () => openCity(temple, texas));


// CLOSE LIGHTBOXES
const closeState = () => {
  states.forEach(state => state.classList.remove('active'));
};

const closeCity = () => {
  cities.forEach(city => city.classList.remove('active'));
  sx.forEach(x => x.classList.add('active'));
  openTXcity = false;
};

sx.forEach(ex => ex.addEventListener('click',closeState));
cx.forEach(ex => ex.addEventListener('click',closeCity));


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


// OPEN/CLOSE SUBMENUS
const openSubmenu = (menu) => {
  if(menuOn === true) {
    menu.classList.add('menuactive')
    subMenu = true;
  }
}

const closeSubmenu = (menu) => {
  menu.classList.remove('menuactive')
  subMenu = false;
}

vlogmenu.forEach(menuitem =>
  menuitem.addEventListener('click', () => openSubmenu(menuitem))
);


// VIA KEYS
['click', 'touchstart'].forEach(activator => {
  document.addEventListener(activator, (e) => {
    vlogmenu.forEach(menuitem => {
      if (!menuitem.contains(e.target)) {
        closeSubmenu(menuitem);
      }})
  });
})


// KEY SHORTCUTS
document.addEventListener('keydown', (e) => {
  if(openTXcity === true) {
    if(e.key === 'Escape') {
      return closeCity();
    }
  }
  else if(texas.classList.contains('active')){
    if(e.key === 'Escape') {
      return closeState();
    }
    else if(texasKey[e.key]) {
      return openCity(texasKey[e.key], texas);
    }
  }
  else if(cali.classList.contains('active')){
    if(e.key === 'Escape') {
      return closeState();
    }
    else if(texasKey[e.key]) {
      return openCity(texasKey[e.key], texas);
    }
  }
  else if(e.key === 'Control' && menuOn === false) {
    menuOn = true;
    return menuKey.forEach(key => key.classList.add('menukey'))
  }
  else if((e.key === 'Control' || (e.key === 'Escape' && subMenu === false)) && menuOn === true) {
    menuOn = false;
    return menuKey.forEach(key => key.classList.remove('menukey'))
  }
  else if(menuOn === true){
    if(directsMap[e.key]){
      return directsMap[e.key].click();
    }
    else if(menuMap[e.key]){
      Object.values(menuMap).forEach(closeSubmenu);
      return openSubmenu(menuMap[e.key]);
    }
    else if(hvlogs.classList.contains('menuactive') && homeMap[e.key]){
      return homeMap[e.key].click();
    }
    else if(cvlogs.classList.contains('menuactive') && collegeMap[e.key]){
      return collegeMap[e.key].click();
    }
    else if(tvlogs.classList.contains('menuactive') && travelMap[e.key]){
      return travelMap[e.key].click();
    }
    else if(e.key === 'Escape'){
      return vlogmenu.forEach(menuitem => closeSubmenu(menuitem))
    }
  }
  else if(usa.classList.contains('active')) {
    if(stateKey[e.key]) {
      return openState(stateKey[e.key]);
    }
    if(e.key === 'w' || e.key === 'Escape') {
      return openMap(world, usa)
    }
  }
  else if(world.classList.contains('active')) {
    if(e.key === 'u') {
      return openMap(usa, world)
    }
  }
});