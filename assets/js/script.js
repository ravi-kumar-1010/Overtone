var currentPlaylist = [];
var mouseDown = false;
function formatTime(seconds) {
	var time = Math.round(seconds);
	var minuites = Math.floor(time/60);  //round down
	var seconds = time-(minuites*60);
	var extraZero;
	if(seconds<10){
		extraZero ="0";
	}
	else{
		extraZero = "";
	}
	return minuites+":"+extraZero+seconds;
}
function updateTimeProgressBar(audio){
	$(".progressTime.current").text(formatTime(audio.currentTime));
	$(".progressTime.remaining").text(formatTime(audio.duration - audio.currentTime));
	var progress = audio.currentTime /audio.duration * 100;
	$(".playbackBar .progress").css("width",progress + "%");
	
}

function Audio() {
    console.log("Inside the Audio class of script js");
	this.currentlyPlaying;
	this.audio = document.createElement('audio');
	this.audio.addEventListener("canplay",function(){
		//this here refers to the object that the event was called on.
		var duration = formatTime(this.duration);  
		$(".progressTime.remaining").text(duration);
	});
	this.audio.addEventListener("timeupdate",function(){
		if(this.duration){
			updateTimeProgressBar(this);
		}
	});
	this.setTrack = function(track) {
        this.currentlyPlaying = track;
		this.audio.src = track.path;
		console.log("setTrack function called and completed");
	}

	this.play = function() {
		this.audio.play();
		console.log("Inside the play function ");
	}

	this.pause = function() {
		this.audio.pause();
		console.log("Inside the pause function");
	}
}