// CONSTANTS
const tvlogs = document.querySelector('.tmenu');
const hvlogs = document.querySelector('.hmenu');
const cvlogs = document.querySelector('.cmenu');
const vlogmenu = [tvlogs, hvlogs, cvlogs];


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