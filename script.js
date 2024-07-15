
let startTime = 0;
let updatedTime = 0;
let difference = 0;
let timerInterval;
let running = false;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

document.getElementById('start').addEventListener('click', start);
document.getElementById('pause').addEventListener('click', pause);
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('lap').addEventListener('click', recordLap);

function start() {
    if (!running) {
        startTime = Date.now() - difference;
        timerInterval = setInterval(updateDisplay, 1000);
        running = true;
    }
}

function pause() {
    if (running) {
        clearInterval(timerInterval);
        difference = Date.now() - startTime;
        running = false;
    }
}

function reset() {
    clearInterval(timerInterval);
    startTime = 0;
    difference = 0;
    running = false;
    display.textContent = '00:00:00';
    laps.innerHTML = '';
}

function updateDisplay() {
    updatedTime = Date.now() - startTime;
    let hours = Math.floor((updatedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((updatedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((updatedTime % (1000 * 60)) / 1000);
    
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    display.textContent = `${hours}:${minutes}:${seconds}`;
}

function recordLap() {
    const lapTime = display.textContent;
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    laps.appendChild(lapItem);
}
