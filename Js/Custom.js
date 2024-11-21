// // المتغيرات الاساسيه
// let hours = 0;
// let minutes = 0;
// let seconds = 0;
// let interval;



// // updateScreen for User 
// function updateScreen() {
//   let displayHours = hours < 10 ? `0${hours}` : hours;
//   let displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
//   let diplaySeconds = seconds < 10 ? `0${seconds}` : seconds;

//   document.getElementById("display").textContent = `${displayHours}:${displayMinutes}:${diplaySeconds}`;
// }


// // StartStopWatch
// function StartStopWatch(){
//   interval = setInterval(( ) => {
//     seconds++;
//     if ( seconds === 60 ){
//       seconds = 0;
//       minutes++;
//     }
//     if ( minutes === 60 ){
//       minutes = 0;
//       hours++;
//     }
//     updateScreen();
//   } , 1000 )
// }


// // stopStopWatch
// function stopStopWatch() {
//   clearInterval(interval);
// }

// // resetStopWatch
// function resetStopWatch() {
//   clearInterval(interval);
//   hours = 0;
//   minutes = 0;
//   seconds = 0;
//   updateScreen();
// }


// // connect functions to buttons
// document.getElementById("start").addEventListener("click" , StartStopWatch);
// document.getElementById("stop").addEventListener("click" , stopStopWatch);
// document.getElementById("reset").addEventListener("click" , resetStopWatch);


// المتغيرات
let hours = 0;
let mints = 0;
let secs = 0;
let interval;

// update
function updateDisplay(){

  let dishours = hours < 10 ? `0${hours}` : hours ;
  let dismints = mints < 10 ? `0${mints}`: mints;
  let dissecs =secs < 10 ? `0${secs}` : secs;
  document.getElementById("display").textContent= `${dishours}:${dismints}:${dissecs}`;
}



// start
function StartDisplay(){
  interval = setInterval(() => {
    secs++;
    if(secs === 60 ){
      secs = 0;
      mints++; 
    }
    if (mints === 60) {
      mints = 0;
      hours++; 
    }
    updateDisplay()
  }, 1000);
  }
  

// end
function stopDisplay(){
  clearInterval(interval);
}

// reset
 function resetDisplay() {
  clearInterval(interval);
    hours = 0;
    mints = 0;
    secs = 0;
    updateDisplay()
 }

// contact
document.getElementById("start").addEventListener("click", StartDisplay);
document.getElementById("stop").addEventListener("click", stopDisplay);
document.getElementById("reset").addEventListener("click", resetDisplay);