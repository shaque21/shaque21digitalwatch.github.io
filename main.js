function digitalClock(){
	let date = new Date();

	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	let timeFormate = 'AM';

	
	if(hours === 0){
		hours = 12;
	}
	if(hours > 12){
		hours = hours - 12;
		timeFormate = 'PM';
	}
	if(minutes < 10){
		minutes = '0' + minutes;
	}
	if(hours < 10){
		hours = '0' + hours;
	}
	if(seconds < 10){
		seconds = '0' + seconds;
	}
	let finalTime = `${hours}:${minutes}:${seconds}`;


	document.getElementById('time').innerText = finalTime;
	document.querySelector('small').innerText = timeFormate;

	setInterval(digitalClock, 1000);
}
digitalClock();