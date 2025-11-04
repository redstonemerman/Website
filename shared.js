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
const selects = Array.from(document.querySelectorAll('.vitem'))
const selected = localStorage.getItem('selected')

// LOADING SCREEN
window.addEventListener('load', () => {
  const loading = document.querySelector('.loading');
  loading.classList.add('fadeaway');
  setTimeout(() => {
    loading.style.display = 'none';
  }, 500);
})

// HIGHLIGHT CLICKED ITEM
const isSelected = (blink, vlog) => {
  if(blink === vlog.id){
    window.onload = () => {
      window.scrollBy(0, -50);
      setTimeout(() => {
        vlog.classList.add('blink');
        localStorage.removeItem('selected')
      }, 250);
    }
  }
}

selects.forEach(sel => isSelected(selected, sel));

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
  if(e.key === 'Control' && menuOn === false) {
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
});