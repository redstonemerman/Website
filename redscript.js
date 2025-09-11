const texas = document.querySelector('#texasbox');
const tximg = document.querySelector('.texas');
const tx = document.querySelector('#tx');

document.querySelector('.bgvid').playbackRate = 0.5;

tx.addEventListener('click', () => {
    texas.classList.add('active')
})

texas.addEventListener('click', (e) => {
    if (e.target === tximg){
        return;
    }
    texas.classList.remove('active')
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && texas.classList.contains('active')){
        texas.classList.remove('active')
    }
})