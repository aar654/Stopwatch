//buttons
const start = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const reset = document.querySelector("#reset")

//initialize seconds and minutes
let min = 0;
let sec = 0;


//function to start timer
function startTimer() {
    if (sec < 10) {
        document.getElementById("sec").innerHTML = "0" + sec;
        sec++;
    } else if (sec < 60) {
        document.getElementById("sec").innerHTML = sec;
        sec++;
    } else if (sec === 60) {
            min = min + 1;
            document.getElementById("min").innerHTML = min;
            sec = 00;
    }
}

//event to start timer
start.addEventListener("click", () => {
    myInterval = setInterval(startTimer, 1000);
})

//event to stop timer
stopBtn.addEventListener("click", () => {
    clearInterval(myInterval);
    myInterval = null
})

//event to reset timer
reset.addEventListener("click", () => {
    clearInterval(myInterval);
    myInterval = null
    min = 00;
    sec = 00;
    document.getElementById("sec").innerHTML = "0" + sec;
    document.getElementById("min").innerHTML = min;

})