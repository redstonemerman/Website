// VIDEO 0.5
window.addEventListener('load',() =>{
  const video = [document.querySelector('.bgvid'),document.querySelector('.bgfvid')];
  video.forEach(video => {
    video.play();
    video.playbackRate = 0.5;
  })
})


// YT VIDEO
ytVids = Array.from(document.querySelectorAll('.montbox'));
function ytPlay(vid) {
  vid.forEach(vid => {
    const iframe = vid.querySelector('.ytvid');
    const img = vid.querySelector('.montn');
    iframe.addEventListener('click',() => {
      iframe.style.opacity = 1;
      iframe.style.zIndex = 1;
      img.style.opacity = 0;
      img.style.zIndex = 0;
    })
  })
}
ytPlay(ytVids);


// BACKGROUND CHANGE
const divider = document.querySelector('.montages');
const bg = document.querySelector('.vidbox');
function bgChange() {
  const dividerHeight = divider.offsetHeight;
  const crop1 = bg.offsetHeight;
  const crop2 = divider.getBoundingClientRect().top;
  const crop = crop1 - crop2 - (dividerHeight/2);
  bg.style.clipPath = `inset(0 0 ${crop}px 0)`;
}
bgChange();
document.addEventListener('scroll', () => {
  window.requestAnimationFrame(bgChange());
  bgChange();
});


// CALCULATE SCROLLING DISTANCE
function updateScroll() {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY*0.1 - 75;
  document.documentElement.style.setProperty('--scrollHeight', `${scrolled}%`);
}
window.addEventListener('load', updateScroll);
window.addEventListener('resize', () => {
  requestAnimationFrame(updateScroll());
});
window.addEventListener('scroll', () => {
  updateScroll();
  requestAnimationFrame(updateScroll());
});


// LOADING SCREEN
window.addEventListener('load', () => {
  const loading = document.querySelector('.loading');
  loading.classList.add('fadeaway');
  setTimeout(() => {
    loading.style.display = 'none';
  }, 500);
})


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
const vlogmenu = [tvlogs, hvlogs, cvlogs];
const menuMap = {
  h: hvlogs,
  c: cvlogs,
  t: tvlogs
};
const menuItems = Object.values(menuMap);
// home items
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
function closeSubmenu(menu) {
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
function openSubmenu(menu) {
  if(menuOn === true) {
    menuItems.forEach(item => {
      closeSubmenu(item);
    })
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


// WORLD/USA
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
// toggle World/USA
const openMap = (mapon, mapoff) => {
  mapon.classList.add('active')
  mapoff.classList.remove('active')
}
usab.addEventListener('click', () => openMap(usa, world));
worldb.addEventListener('click', () => openMap(world, usa));


// STATES
const states = [texas, cali];
const sx = document.querySelectorAll('.sx');

// open states
function openState(state) {
  state.classList.add('active')
  sx.forEach(x => x.classList.add('active'));
}
tx.addEventListener('click', () => openState(texas));
ca.addEventListener('click', () => openState(cali));

// close states
function closeState() {
  states.forEach(state => state.classList.remove('active'));
};
sx.forEach(ex => ex.addEventListener('click',closeState));


// CITIES
const cx = document.querySelectorAll('.cx');
// city buttons
// TX
const au = document.getElementById('au');
const cs = document.getElementById('cs');
const df = document.getElementById('df');
const ho = document.getElementById('ho');
const tp = document.getElementById('tp');
const wa = document.getElementById('wa');
// CA
const an = document.getElementById('an');
const la = document.getElementById('la');
const sf = document.getElementById('sf');
// city lightboxes
// TX
const aus = document.getElementById('austin');
const cst = document.getElementById('college');
const dfw = document.getElementById('dfw');
const hou = document.getElementById('houston');
const tem = document.getElementById('temple');
const wac = document.getElementById('waco');
// CA
const ana = document.getElementById('anaheim');
const los = document.getElementById('losangeles');
const saf = document.getElementById('sanfran');
// city key maps
const TXcityMap = [
  {button: au, city: aus},
  {button: cs, city: cst},
  {button: df, city: dfw},
  {button: ho, city: hou},
  {button: tp, city: tem},
  {button: wa, city: wac}
]
const CAcityMap = [
  {button: an, city: ana},
  {button: la, city: los},
  {button: sf, city: saf}
  
]
const cityMaps = [
  {map: TXcityMap, state: texas},
  {map: CAcityMap, state: cali}
]
const txCities = TXcityMap.map(({city}) => city);
const caCities = CAcityMap.map(({city}) => city);
const cities = [... txCities, ... caCities];
// key shortcuts
let cityOpen = false;
const texasKey = {
  a: aus,
  c: cst,
  d: dfw,
  h: hou,
  t: tem,
  w: wac
}
const caliKey = {
  a: ana,
  l: los,
  s: saf
}

// open cities
function openCity (city, state) {
  state.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  const stateImgage = state.querySelector('svg')
  stateImgage.classList.add('disappear')
  const title = city.querySelector('.citytitle')
  title.classList.add('titleflip')
  city.classList.add('active')
  console.log(title);
  sx.forEach(x => x.classList.remove('active'));
  cityOpen = true;
  loopOn = true;
  slideShow(city);
}
cityMaps.forEach(({map, state}) => {
  map.forEach(({button, city}) => {
    button.addEventListener('click', () => {
      openCity(city, state);
      state.style.backdropFilter = 'none';
    });
  })
})
// close cities
function closeCity() {
  states.forEach(state => {
    if(state.classList.contains('active')){
      state.style.backdropFilter = 'blur(5px)';
      state.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      const stateImgage = state.querySelector('svg')
      stateImgage.classList.remove('disappear')
    }
  })
  cities.forEach(city => {
    const title = city.querySelector('.citytitle')
    title.classList.remove('titleflip')
    city.classList.remove('active');
    loopOn = false;
    slideOff(city);
  });
  sx.forEach(x => x.classList.add('active'));
  cityOpen = false;
};
cx.forEach(ex => ex.addEventListener('click', closeCity));


// TN ANIMATION
// animation on
let loopOn = false;
const animateTime = 4000;
function slideShow(city) {
  // loop animation
  function slideLoop(tns, tnCount, circle) {
    let endedAt = performance.now();
    const duration = animateTime * tnCount;
    function loop(timestamp){
      if (!loopOn) return;
      if (timestamp - endedAt >= duration){
        endedAt = timestamp;
        slides(tns, tnCount, circle);
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }
  // add cycle animation to each tn
  function slides(tns, tnCount, circle){
    circle.forEach(circle => circle.classList.remove('circleon'));
    tns.slice().reverse().forEach((tn, index) => {
      // slideshow animation
      tn.classList.remove('tncycle');
      void tn.offsetWidth;
      tn.classList.add('tncycle');
      tn.style.animationDelay = `${index * animateTime}ms`;
      // circle animation
      circle[index].classList.add('circleon');
      circle[index].style.animationDelay = `${index * animateTime}ms`;      
    });
  }
  // apply animation to each slideshow
  const tnBoxes = city.querySelectorAll('.slideshow');
  tnBoxes.forEach(box => {
    const circle = Array.from(box.querySelectorAll('.circles>svg'));
    circle[0].classList.add('fcircleon');
    const tns = Array.from(box.querySelectorAll('img'));
    const tnCount = tns.length;
      circle[0].classList.remove('fcircleon');
      slides(tns, tnCount, circle);
      slideLoop(tns, tnCount, circle);
  });
}
// animation off
function slideOff(city) {
  const tnBoxes = city.querySelectorAll('.slideshow');
  tnBoxes.forEach(box => {
    const circle = Array.from(box.querySelectorAll('.circles>svg'));
    circle.forEach(circle => circle.classList.remove('circleon'));
    circle[0].classList.remove('fcircleon');
    circle[0].style.animationDelay = `0ms`;
    const tns = Array.from(box.querySelectorAll('img'));
    tns.slice().reverse().forEach((tn) => {
      void tn.offsetWidth;
      tn.classList.remove('tncycle');
    });
  });
}


// KEY SHORTCUTS
document.addEventListener('keydown', (e) => {
  // city open
  if(cityOpen === true) {
    if(e.key === 'Escape') {
      return closeCity();
    }
  }
  // TX open
  else if(texas.classList.contains('active')){
    if(e.key === 'Escape') {
      return closeState();
    }
    else if(texasKey[e.key]) {
      return openCity(texasKey[e.key], texas);
    }
  }
  // CA open
  else if(cali.classList.contains('active')){
    if(e.key === 'Escape') {
      return closeState();
    }
    else if(caliKey[e.key]) {
      return openCity(caliKey[e.key], cali);
    }
  }
  // menu shortcuts
  else if(e.key === 'Control' && menuOn === false) {
    menuOn = true;
    return menuKey.forEach(key => key.classList.add('menukey'))
  }
  else if((e.key === 'Control' || (e.key === 'Escape' && subMenu === false)) && menuOn === true) {
    menuOn = false;
    return menuKey.forEach(key => key.classList.remove('menukey'))
  }
  // open menu items
  else if(menuOn === true){
    if(directsMap[e.key]){
      return directsMap[e.key].click();
    }
    // open submenus
    else if(menuMap[e.key]){
      Object.values(menuMap).forEach(closeSubmenu);
      return openSubmenu(menuMap[e.key]);
    }
    // open submenu items
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
  // toggle world/USA
  else if(usa.classList.contains('active')) {
    if(stateKey[e.key]) {
      return openState(stateKey[e.key]);
    }
    if(e.key === 'w') {
      return openMap(world, usa)
    }
  }
  else if(world.classList.contains('active')) {
    if(e.key === 'u') {
      return openMap(usa, world)
    }
  }
});