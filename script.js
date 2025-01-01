const targetDate = new Date('August 15, 2026 00:00:00').getTime();

function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

    document.getElementById('display').innerHTML = `${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`;

    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById('display').innerHTML = "EXPIRED";
    }
}

const timerInterval = setInterval(updateTimer, 1000);

const images = [
    'url("assets/bg.jpg")',
    'url("assets/bg 2.jpg")',
    'url("assets/bg4.jpg")'
];

document.getElementById('background').style.backgroundImage = images[Math.floor(Math.random() * images.length)];
