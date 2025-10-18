// CONSTANTS
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
  a: b1vlogs,
  k: fcvlogs,
  f: b2vlogs
}
const wvlogs = document.querySelector('#w')
const pvlogs = document.querySelector('#p')
const travelMap = {
  a: wvlogs,
  f: pvlogs
}

// ACTIVATE MENU
document.addEventListener('keydown', (e) => {
  if(e.key === 'Control' && menuOn === false) {
    menuOn = true;
    menuKey.forEach(key => key.classList.add('menukey'))
  }
  else if((e.key === 'Control' || (e.key === 'Escape' && subMenu === false)) && menuOn === true) {
    menuOn = false;
    menuKey.forEach(key => key.classList.remove('menukey'))
  }
})

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

document.addEventListener('keydown', (e) => {
  if(e.key === 'm'){
    mmenu.click();
  }
  if(menuMap[e.key]){
    Object.values(menuMap).forEach(closeSubmenu);
    openSubmenu(menuMap[e.key]);
  }
  if(hvlogs.classList.contains('menuactive') && homeMap[e.key]){
    homeMap[e.key].click();
  }
  if(e.key === 'Escape'){
    vlogmenu.forEach(menuitem => closeSubmenu(menuitem))
  }
})