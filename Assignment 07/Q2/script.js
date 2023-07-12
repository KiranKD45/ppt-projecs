const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")


function getTimeEverySecond(){
    const today = new Date()

    hours.innerHTML = formatTime(today.getHours());
    
    minutes.innerHTML = formatTime(today.getMinutes()) ;
    
    seconds.innerHTML = formatTime(today.getSeconds()) ;


    function formatTime (time){
        return time < 10 ? `0${time}` :  time;
    }
     
}

setInterval(()=>{getTimeEverySecond()},1000)
