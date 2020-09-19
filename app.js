window.addEventListener('mousemove', (e) => {
    let ratio = 100 - e.clientX / window.innerWidth * 100;
    document.querySelector('.sun').style.clipPath = `inset(0 ${ratio}% 0 0)`;
});