// let startTime, updatedTime, difference, tInterval;
// let running = false;
// const display = document.getElementById('display');
// const startPauseBtn = document.getElementById('startPauseBtn');
// const resetBtn = document.getElementById('resetBtn');
// const lapBtn = document.getElementById('lapBtn');
// const laps = document.getElementById('laps');

// function startPause() {
//     if (!running) {
//         startTime = new Date().getTime();
//         tInterval = setInterval(getShowTime, 1);
//         running = true;
//         startPauseBtn.textContent = 'Pause';
//     } else {
//         clearInterval(tInterval);
//         running = false;
//         startPauseBtn.textContent = 'Start';
//     }
// }

// function reset() {
//     clearInterval(tInterval);
//     running = false;
//     difference = 0;
//     display.textContent = '00:00:00';
//     startPauseBtn.textContent = 'Start';
//     laps.innerHTML = '';
// }

// function lap() {
//     const lapTime = display.textContent;
//     const lapItem = document.createElement('li');
//     lapItem.textContent = lapTime;
//     laps.appendChild(lapItem);
// }

// function getShowTime() {
//     updatedTime = new Date().getTime();
//     difference = updatedTime - startTime;

//     const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//     display.textContent = 
//         (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + 
//         (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + 
//         (seconds > 9 ? seconds : "0" + seconds);
// }

// startPauseBtn.addEventListener('click', startPause);
// resetBtn.addEventListener('click', reset);
// lapBtn.addEventListener('click', lap);


let startTime, updatedTime, difference, tInterval;
let running = false;
const display = document.getElementById('display');
const startPauseBtn = document.getElementById('startPauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

function startPause() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(getShowTime, 1);
        running = true;
        startPauseBtn.textContent = 'Pause';
    } else {
        clearInterval(tInterval);
        running = false;
        startPauseBtn.textContent = 'Start';
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    difference = 0;
    display.textContent = '00:00:00.000';
    startPauseBtn.textContent = 'Start';
    laps.innerHTML = '';
}

function lap() {
    const lapTime = display.textContent;
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    laps.appendChild(lapItem);
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = difference % 1000;

    display.textContent =
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
        (seconds > 9 ? seconds : "0" + seconds) + "." +
        (milliseconds > 99 ? milliseconds : milliseconds > 9 ? "0" + milliseconds : "00" + milliseconds);
}

startPauseBtn.addEventListener('click', startPause);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);
