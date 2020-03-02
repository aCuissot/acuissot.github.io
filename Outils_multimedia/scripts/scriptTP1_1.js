var myVideo = document.getElementById("video1"); 

function playPause() { 
  if (myVideo.paused) {
    myVideo.play();
	document.getElementById("playBtn").className = "glyphicon glyphicon-play"
  } else { 
    myVideo.pause(); 
	document.getElementById("playBtn").className = "glyphicon glyphicon-pause"
  }
} 

function fullscreen(){
	myVideo.requestFullscreen();
}

function mute() {
	if (myVideo.muted === false){
		myVideo.muted = true;
		document.getElementById("muteBtn").style.color = "red";

	} else {
		myVideo.muted = false;
		document.getElementById("muteBtn").style.color = "black";
	}			
}

function restart() {
	myVideo.currentTime = 0;
}

function soundUp() {
	myVideo.volume += 0.1;
}

function soundDown() {	
	myVideo.volume -= 0.1;
}

function duree(){
	var t = myVideo.duration;
	if (t<60){
		document.getElementById("time").innerHTML = Math.round(t) + "s";
	} else if (t<3600){
		document.getElementById("time").innerHTML = Math.round(t/60) + "m " + Math.round(t)%60 + "s";
	} else {
		document.getElementById("time").innerHTML = Math.round(t/3600) + "h " + Math.round(t/60)%60 + "m " + Math.round(t)%60 + "s";
	}
}

function temps(){
	var t = myVideo.currentTime;
	if (t<60){
		document.getElementById("time").innerHTML = Math.round(t) + "s";
	} else if (t<3600){
		document.getElementById("time").innerHTML = Math.round(t/60) + "m " + Math.round(t)%60 + "s";
	} else {
		document.getElementById("time").innerHTML = Math.round(t/3600) + "h " + Math.round(t/60)%60 + "m " + Math.round(t)%60 + "s";
	}
		
}