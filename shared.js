// LOADING SCREEN
window.addEventListener('load', () => {
  const loading = document.querySelector('.loading');
  loading.classList.add('fadeaway');
  setTimeout(() => {
    loading.style.display = 'none';
  }, 500);
})


// YT VIDEO
function videoOn(video) {
  const player = video.querySelector('.btncircle');
  const playBtn = video.querySelector('.playbtn');
  const ytVid = video.querySelector('.vvid');
  if (!playBtn || !ytVid) return;
  player.addEventListener('click', () => {
    ytVid.classList.add('vvidon');
    playBtn.style.opacity = 0;
    playBtn.style.pointerEvents = 'none';
  })
}
function videoOff(video) {
  const playBtn = video.querySelector('.playbtn');
  const ytVid = video.querySelector('.vvid');
  if (!playBtn || !ytVid) return;
  if(ytVid.classList.contains('vvidon')){
    ytVid.classList.add('vvidoff');
    setTimeout(() => {
      ytVid.classList.remove('vvidon');
      ytVid.classList.remove('vvidoff');
      playBtn.style.opacity = 1;
      playBtn.style.pointerEvents = 'all';
    }, 300);
  }
}
const videos = Array.from(document.querySelectorAll('.vvlogbox'));
videos.forEach(video => {
  videoOn(video);
})
document.addEventListener('click', (e) =>{
  if(e.target.classList.contains('btncircle')) {
    return
  }
  else videos.forEach(video => {
    videoOff(video);
  })
})


// CLICKED VLOG
const selects = Array.from(document.querySelectorAll('.vitem'))
const selected = localStorage.getItem('selected')
const isSelected = (blink, vlog) => {
  if(blink === vlog.id){
    window.onload = () => {
      window.scrollBy(0, -575);
      setTimeout(() => {
        vlog.classList.add('blink');
        localStorage.removeItem('selected')
      }, 300);
    }
  }
}
selects.forEach(sel => isSelected(selected, sel));


// MENU
let menuOn = false;
let subOpen = false;
const menuKey = document.querySelectorAll('#menukey');
const mmenu = document.querySelector('#m')
const shorts = document.querySelector('#s')
const directsMap = {
  m: mmenu,
  s: shorts
}
// menu items
const hvlogs = document.querySelector('.hmenu');
const cvlogs = document.querySelector('.cmenu');
const tvlogs = document.querySelector('.tmenu');
const menuMap = {
  h: hvlogs,
  c: cvlogs,
  t: tvlogs
};
const menuItems = Object.values(menuMap);
// home vlogs
const avlogs = document.querySelector('#a')
const kvlogs = document.querySelector('#k')
const fhvlogs = document.querySelector('#fh')
const homeMap = {
  a: avlogs,
  k: kvlogs,
  f: fhvlogs
}
// college items
const b1vlogs = document.querySelector('#b1')
const fcvlogs = document.querySelector('#fc')
const b2vlogs = document.querySelector('#b2')
const collegeMap = {
  b: b1vlogs,
  f: fcvlogs,
  a: b2vlogs
}
// travel items
const wvlogs = document.querySelector('#w')
const pvlogs = document.querySelector('#p')
const travelMap = {
  w: wvlogs,
  p: pvlogs
}
// close submenus
const closeSubmenu = (menu) => {
  menu.classList.remove('menuactive')
  subMenu = false;
}
document.addEventListener('click', (e) =>{
  if(e.target.classList.contains('menubutton')) {
    return
  }
  else menuItems.forEach(item => closeSubmenu(item))
})
// open submenu
const openSubmenu = (menu) => {
  if(menuOn === true) {
    menuItems.forEach(item =>closeSubmenu(item))
    menu.classList.add('menuactive')
    subMenu = true;
  }
}
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuOn = true;
    openSubmenu(item);
  })
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
      return menuItems.forEach(item => closeSubmenu(item))
    }
  }
  else if(e.key === 'Escape'){
      return videos.forEach(video => videoOff(video))
  }
});