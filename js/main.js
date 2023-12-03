//  variables - buttons
const btnPlay = document.querySelector('.btn-play');
const btnPause = document.querySelector('.btn-pause');
const btnStop = document.querySelector('.btn-stop');
const btnDelete = document.querySelector('.btn-delete');
const btnArchives = document.querySelector('.btn-archives');

//  variables - text
const timeText = document.querySelector('.time-text');

//  variables - for calculating time
let seconds = 0;
let minutes = 0;

//  variables - for pausing timeEngine function
let myInterval;

// function is changing 'seconds' and 'minutes' variables value
const timeEngine = () => {
	seconds++;
	if (seconds === 60) {
		seconds = 0;
		minutes++;
	}
	timeText.textContent = `${minutes}:${seconds}`;
};

// calls timeEngine function in time interval every 1000ms(1s)
const startStoper = () => {
	myInterval = setInterval(timeEngine, 1000);
};

// pauses setInterval function inside startStoper function
const pauseStoper = () => {
	clearInterval(myInterval);
};


// listeners for buttons
btnPlay.addEventListener('click', startStoper);
btnPause.addEventListener('click', pauseStoper);
