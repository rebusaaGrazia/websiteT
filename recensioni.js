const track = document.getElementById('rv-track');
const dotsEl = document.getElementById('rv-dots');
const cards = track.querySelectorAll('.rv-card');
const total = cards.length;
let current = 0;
let perView = window.innerWidth < 768 ? 1 : 3;

function setup() {
    perView = window.innerWidth < 768 ? 1 : 3;
    cards.forEach(c => { c.style.width = (100 / perView) + '%'; });
    dotsEl.innerHTML = '';
    const steps = total - perView + 1;
    for (let i = 0; i < steps; i++) {
        const d = document.createElement('button');
        d.className = 'rv-dot' + (i === current ? ' active' : '');
        d.addEventListener('click', () => goTo(i));
        dotsEl.appendChild(d);
    }
    goTo(Math.min(current, steps - 1));
}

function goTo(idx) {
    const steps = total - perView + 1;
    current = Math.max(0, Math.min(idx, steps - 1));
    track.style.transform = 'translateX(-' + (current * (100 / perView)) + '%)';
    document.querySelectorAll('.rv-dot').forEach((d, i) => d.classList.toggle('active', i === current));
    document.getElementById('rv-prev').disabled = current === 0;
    document.getElementById('rv-next').disabled = current === steps - 1;
}

document.getElementById('rv-prev').addEventListener('click', () => goTo(current - 1));
document.getElementById('rv-next').addEventListener('click', () => goTo(current + 1));
window.addEventListener('resize', setup);
setup();