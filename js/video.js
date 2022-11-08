var video = document.getElementById("player1");
var lastVolume = 0;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	console.log(video);
	video['autoplay'] = false;
	video['loop'] = false;
});


document.getElementById("play").addEventListener("click", function(){ 
	video.play();
	document.getElementById("volume").innerHTML = document.getElementById("slider").value;
});

document.getElementById("pause").addEventListener("click", function(){ 
	video.pause();
});

document.getElementById("slower").addEventListener("click", function(){ 
	video.playbackRate *=  0.9; 
	console.log("speed is: " + video.playbackRate);
});

document.getElementById("faster").addEventListener("click", function(){ 
	video.playbackRate /= 0.9; 
	console.log("speed is: " + video.playbackRate);
	//console.log(video.currentTime);
});

document.getElementById("skip").addEventListener("click", function(){ 
	if(video.currentTime + 10 < video.duration){
		video.currentTime += 10;
	}
	else{
		video.currentTime = 0;
	}
	console.log("time is: " + video.currentTime);
});

document.getElementById("mute").addEventListener("click", function(){ 
	if( video.muted == true){
		//console.log("last volume is: " + lastVolume );
		document.getElementById("mute").innerHTML = "Mute";
		video.volume = lastVolume;
		video.muted = false;
		
	}
	else if( video.muted == false){
		document.getElementById("mute").innerHTML = "Unmute";
		lastVolume = video.volume;
		video.volume = 0;
		video.muted = true;
	}
});

document.getElementById("slider").addEventListener("change", function(){ 
	video.volume =  document.getElementById("slider").value / 100;
	document.getElementById("volume").innerHTML = document.getElementById("slider").value + '%';
});

document.getElementById("vintage").addEventListener("click", function(){ 
	console.log(video['class']);
	video['class'] = "oldSchool";
});
document.getElementById("orig").addEventListener("click", function(){ 
	console.log(video["class"]);
	video['class'] = "video";
});
