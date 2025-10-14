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
const hou = document.getElementById('houston');
const tem = document.getElementById('temple');
const states = [texas, cali];
const txcities = [tem, hou];
const cities = [... txcities];
const citn2A1 = document.querySelectorAll('.citn2a1');
const citn2A2 = document.querySelectorAll('.citn2a2');
const citn5A1 = document.querySelectorAll('.citn5a1');
const citn5A2 = document.querySelectorAll('.citn5a2');
const citn5A3 = document.querySelectorAll('.citn5a3');
const citn5A4 = document.querySelectorAll('.citn5a4');
const citn5A5 = document.querySelectorAll('.citn5a5');

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


// DELAY ANIMATION
// function animDelay(ele, delay, duration){
//   setTimeout(()=>{
//     ele.style.zIndex = '1';
//     ele.classList.remove('up', 'down');
//     ele.classList.add('down');
//   }, delay)
//   setTimeout(() => {
//     ele.classList.remove('down');
//     ele.classList.add('up');
//     ele.style.zIndex = '-1';
//   }, delay + 1000);
//   setTimeout(() => {
//     ele.style.zIndex = '1';
//   }, delay + duration - 2000);
// }

// function loopAnim(ele, delay, duration){
//   ele.forEach(citn=>{
//     animDelay(citn, delay, duration);
//   });
// }

// setInterval(()=>{
//   loopAnim (citn2A1, 0, 6000);
//   loopAnim (citn2A2, 3000, 6000);
// }, 6000);

// setInterval(()=>{
//   loopAnim (citn5A1, 0, 15000);
//   loopAnim (citn5A2, 3000, 15000);
//   loopAnim (citn5A3, 6000, 15000);
//   loopAnim (citn5A4, 9000, 15000);
//   loopAnim (citn5A5, 12000, 15000);
// }, 15000);