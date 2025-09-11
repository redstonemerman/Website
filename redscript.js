const texas = document.querySelector('#texasbox');
const tx = document.querySelector('#tx');

document.querySelector('.bgvid').playbackRate = 0.5;

const openTexas = () => {
    texas.classList.add('active')
};

tx.addEventListener('click', openTexas);
tx.addEventListener('touchstart', openTexas);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && texas.classList.contains('active')){
        texas.classList.remove('active')
    }
})