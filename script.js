const canvas = document.querySelector('.matrix-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const letters = '01';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(0);
function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ff0000';
    ctx.font = `${fontSize}px monospace`;
    drops.forEach((y, i) => {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    });
}
setInterval(drawMatrix, 50);

function nextEvent() {
    document.querySelector('.popup-overlay').style.display = 'block';
    document.getElementById('event-popup').style.display = 'block';
    startCountdown("February 23, 2025 10:00:00");
}
function closePopup() {
    document.querySelector('.popup-overlay').style.display = 'none';
    document.getElementById('event-popup').style.display = 'none';
}
function startCountdown(eventDate) {
    const countDownDate = new Date(eventDate).getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

document.getElementById('participant').addEventListener('change', function() {
    let studentFields = document.getElementById('studentFields');
    let professionalFields = document.getElementById('professionalFields');
    
    if (this.value === 'student') {
        studentFields.style.display = 'block';
        professionalFields.style.display = 'none';
    } else {
        studentFields.style.display = 'none';
        professionalFields.style.display = 'block';
    }
});

document.getElementById('close').addEventListener('click', function() {
    document.getElementById('rsvp-popup').style.display = 'none';
  });
  
  
