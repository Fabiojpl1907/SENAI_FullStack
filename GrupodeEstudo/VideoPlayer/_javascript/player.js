// dimensionar tela do video
// recebe como parametro o tamanho do video

var changeSize = (w, h) => {

    var vid = document.getElementById("video1");

    vid.width = w;
    vid.height = h;
}

function telacheia() {
    var vid = document.getElementById("video1");
    vid.requestFullscreen();
  };



// Tocar / pausar video
var play_pause = () => {
    var vid = document.getElementById("video1");
    var but = document.getElementById("play_pause");
    
    // baseada em estado 
    // video esta parado ou esta tocando ? 


    if (vid.paused) {    
        vid.play();     // video toque 
        but.innerHTML = "PAUSE";

    } else {
        vid.pause();
        but.innerHTML = "PLAY";
    }
}

// aumentar volume
var aumentar_volume = () => {
    var vid = document.getElementById("video1");

    // se volume é menor 100% - 1
    // por favor aumente o volume em 10% - 0.1

    if( vid.volume < 1)  vid.volume += 0.1;
}

// diminuir volume
var diminir_volume = () => {
    var vid = document.getElementById("video1");

    // se volume é maior 0 
    // por favordiminuir o volume em 10% - 0.1

    if( vid.volume > 0)  vid.volume -= 0.1;
}


// Silenciar  / Som
var silenciar = () => {
    var vid = document.getElementById("video1");
    var but = document.getElementById("mute");

    if (vid.muted) {       // video calado ? sim 
        vid.muted = false;
        but.innerHTML = "MUTE";

    } else {
        vid.muted = true;
        but.innerHTML = "SOM";
    }
}


