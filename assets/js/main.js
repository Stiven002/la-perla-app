let days = 16;
let hours = 16;
let minutes = 0;
let seconds = 0;

showSeconds();

function showSeconds(){
    let txtsSeconds;

    if(seconds < 0){
        seconds = 59;
    }

    if(seconds < 10){
        txtsSeconds = `0${seconds}`;
    }
    else{
        txtsSeconds = seconds;
    }

    document.getElementById('segundos').innerHTML = txtsSeconds;
    seconds--;

    showMinutes(seconds);
}

function showMinutes(seconds){
    let txtsMinutes;

    if(seconds == -1 && minutes !== 0){
        setTimeout(()=>{
            minutes--;
        }, 500);
    }
    else if( seconds == -1 && minutes == 0){
        setTimeout(()=>{
            minutes = 59;
        }, 500)
    }

    if(minutes < 10){
        txtsMinutes = `0${minutes}`;
    }
    else{
        txtsMinutes = minutes;
    }

    document.getElementById('minutos').innerHTML = txtsMinutes;
    showHours(seconds,minutes);
}

function showHours(seconds,minutes){
    let txtsHours;

    if(seconds == -1 && minutes == 0 && hours !== 0){
        setTimeout(()=>{
            hours --;
        }, 500)
    }
    else if(seconds == -1 && minutes == 0 &&  hours == 0){
        setTimeout(()=>{
            hours = 2;
        }, 500)
    }

    if( hours < 10){
        txtsHours = `0${hours}`
    }
    else{
        txtsHours = hours;
    }

    document.getElementById('horas').innerHTML = txtsHours;
}

setInterval(showSeconds, 1000);