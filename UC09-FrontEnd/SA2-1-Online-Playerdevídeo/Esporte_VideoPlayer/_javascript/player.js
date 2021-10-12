// dimensionar tela do video
var changeSize = (w, h) => {
    var vid = document.getElementById("video1");
    vid.width = w;
    vid.height = h;
}


// Tocar / pausar video
var play_pause = () => {
    var vid = document.getElementById("video1");
    var but = document.getElementById("play_pause");
    if (vid.paused) {
        vid.play();
        but.innerHTML = "PAUSE";
    } else {
        vid.pause();
        but.innerHTML = "PLAY";
    }
}

// aumentar volume
var aumentar_volume = () => {
    var vid = document.getElementById("video1");
    if( vid.volume < 1)  vid.volume += 0.1;
}

// diminuir volume
var diminir_volume = () => {
    var vid = document.getElementById("video1");
    if( vid.volume > 0)  vid.volume -= 0.1;
}


// Silenciar  / Som
var silenciar = () => {
    var vid = document.getElementById("video1");
    var but = document.getElementById("mute");

    if (vid.muted) {
        vid.muted = false;
        but.innerHTML = "MUTE";

    } else {
        vid.muted = true;
        but.innerHTML = "SOM";
    }
}


function fullScreen() {
    var vid = document.getElementById("video1");
    vid.requestFullscreen();
  };