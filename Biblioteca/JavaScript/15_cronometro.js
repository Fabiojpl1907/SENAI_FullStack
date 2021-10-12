// temporizador --------------------------------------

var hour = 0;
var minute = 0;
var second = 0;
var millisecond = 0;

setInterval(timer, 10)


function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
   
  if( hour < 10 ){
    document.getElementById('hour').innerText = "0"+ hour;
  }else {
    document.getElementById('hour').innerText = hour;
  };

  if( minute < 10 ){
    document.getElementById('minute').innerText = "0"+ minute;
  }else {
    document.getElementById('minute').innerText = minute;
  };


  if( second < 10 ){
    document.getElementById('second').innerText = "0"+ second;
  }else {
    document.getElementById('second').innerText = second;
  };
  
}
