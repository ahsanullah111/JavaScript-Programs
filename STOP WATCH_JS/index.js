//VARIABLES
let hr = 0, min = 0, sec = 0, count = 0, timer = false;

//START FUNCTION
function start() {
    timer = true;
    stopWatch();
}

//STOP FUNCTION
function stop() {
    timer = false;
}

//RESET FUNCTION
function reset() {
    timer = false;

    //SET VARIABLES = 0
    hr = 0, min = 0, sec = 0, count = 0;

    //CALLING & SET VALUES = 00
    document.getElementById("count").innerHTML = "00";

    document.getElementById("sec").innerHTML = "00";

    document.getElementById("min").innerHTML = "00";

    document.getElementById("hr").innerHTML = "00";
}

//STOP WATCH FUNCTION
function stopWatch() {
    if (timer == true) {
        count += 1;
    }
    if (count == 100) {
        sec += 1;
        count = 0;
    }
    if (sec == 60) {
        min += 1;
        sec = 0;
    }
    if (min == 60) {
        hr += 1;
        min = 0;
        sec = 0;
    }

    //TO SHOW DOUBLE ZERO 00
    let hrStr = hr, minStr = min, secStr = sec, countStr = count;

    if(hr<10){
        hrStr = "0" + hrStr;
    }

    if (min < 10) {
        minStr = "0" + minStr;
    }

    if (sec < 10) {
        secStr = "0" + secStr;
    }

    if (count < 10) {
        countStr = "0" + countStr;
    }


    //CALLING 
    document.getElementById("count").innerHTML = countStr;

    document.getElementById("sec").innerHTML = secStr;

    document.getElementById("min").innerHTML = minStr;

    document.getElementById("hr").innerHTML = hrStr;

    setTimeout("stopWatch()", 10);
}