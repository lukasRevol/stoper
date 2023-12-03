//  variables - buttons
const btnPlay = document.querySelector('.btn-play');
const btnPause = document.querySelector('.btn-pause');
const btnStop = document.querySelector('.btn-stop');
const btnDelete = document.querySelector('.btn-delete');
const btnArchives = document.querySelector('.btn-archives');
let root = document.documentElement

console.log(root);


//  variables - text
const timeText = document.querySelector('.time-text');
const lastTimeText = document.querySelector('.last-time-number');
const recordContainer = document.querySelector('.history');

//  variables - for calculating time
let seconds = 0;
let thSeconds = 0;
let minutes = 0;
let thMinutes = 0;
// variables - addons
let stoperActive = false;
let countRecord = 0;

//  variables - for pausing timeEngine function
let myInterval;

// function is changing 'seconds' and 'minutes' variables value
const timeEngine = () => {
	seconds++;
	if (seconds === 10) {
		seconds = 0
		thSeconds++;
		if (thSeconds === 6) {
			thSeconds = 0
			minutes++
			if (minutes === 10) {
				minutes = 0
				thMinutes++ 
				if (thMinutes === 6) {
					pauseStoper();
				}
			}
		}
		
	}
	timeText.textContent = `${thMinutes}${minutes}:${thSeconds}${seconds}`;
};

// calls timeEngine function in time interval every 1000ms(1s)
const startStoper = () => {
	if (stoperActive === false) {
		myInterval = setInterval(timeEngine, 1000);
		stoperActive = true;
	}
};

// pauses setInterval function inside startStoper function
const pauseStoper = () => {
	stoperActive = false;
	clearInterval(myInterval);
};

const stopStoper = () => {
	lastTimeText.textContent = timeText.textContent;
	timeText.textContent = '00:00';
	clearInterval(myInterval);
	stoperActive = false;
	seconds = 0;
	minutes = 0;
	thMinutes = 0;
	thSeconds = 0;
	countRecord++;
	createNewRecord();
};

const createNewRecord = () => {
	// creates 3 new elements
	const measurmentContainer = document.createElement('div');
	const newMeasurmentText = document.createElement('p');
	const newMeasurmentTime = document.createElement('p');
	// nowo stworzonym elementom dodaje odpowiednie klasy z css
	measurmentContainer.classList.add('measurement');
	newMeasurmentText.classList.add('measurement_heading');
	newMeasurmentTime.classList.add('measurement_time');
	// adds text conent to paragraphs
	newMeasurmentText.textContent = `Measurement #${countRecord}:`;
	newMeasurmentTime.textContent = lastTimeText.textContent;
	// adds new elements to HTML
	recordContainer.append(measurmentContainer);
	measurmentContainer.append(newMeasurmentText);
	measurmentContainer.append(newMeasurmentTime);
};


const deleteMeasurements = () => {
	const allMeasurements = document.querySelectorAll('.measurement');
	allMeasurements.forEach((element) => {
		element.remove();
		lastTimeText.textContent = '00:00';
		timeText.textContent = '00:00';
	});
};

const recordVisibility = () => {
	recordContainer.classList.toggle('hide')
}

// listeners for buttons
btnPlay.addEventListener('click', startStoper);
btnPause.addEventListener('click', pauseStoper);
btnStop.addEventListener('click', stopStoper);
btnDelete.addEventListener('click', deleteMeasurements);
btnArchives.addEventListener('click', recordVisibility)