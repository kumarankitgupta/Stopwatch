var start = document.getElementById("start");
var hour = document.getElementById("minute");
var minute = document.getElementById("second");
var second = document.getElementById("msecond");
var lap = document.getElementById("lap");
var lc = document.getElementById("lc");
var stops = document.getElementById("stop");
var resets = document.getElementById("reset");
var hr = 0;
var min = 0;
var s = 0;
var l = 1;
var suruhuakinahi = false;
start.addEventListener('click',function(){
    startTheTimer();
    swapstart();
    suruhuakinahi = true;
    swapreset();
})
var timer;
function startTheTimer(){
    timer = setInterval(function(){
        s++;
        if(s === 100){
            s = 00;
            min = min +1;
        }
        if(min === 59){
            min = 0;
            hr++;
        }
        diplayTheTime(hr,min,s)
    },10)
}
lap.addEventListener('click',function(){
    if(suruhuakinahi){
        createLaps();
    }
})
function diplayTheTime(hr,min,s){
    hour.innerHTML = String(hr).padStart(2, '0');
    minute.innerHTML = String(min).padStart(2, '0');
    second.innerHTML = String(s).padStart(2, '0');
}
function createLaps(){
    console.log(document.getElementById("timeConatiner").innerText);
    var di = document.createElement("div");
    di.setAttribute("class","lapscon");
    var sl = document.createElement("span");
    sl.setAttribute("style","float:left");
    sl.innerText = "Lap" + l;
    var sr = document.createElement("span");
    sr.setAttribute("style","float:right");
    sr.innerText = document.getElementById("timeConatiner").innerText;
    di.appendChild(sl);
    di.appendChild(sr);
    lc.appendChild(di);
    l++;
}
function swapstart(){
    start.style.display ="none";
    stops.style.display="inline";
}
function swapstop(){
    start.style.display ="inline";
    stops.style.display="none";
}
var stop = true;
stops.addEventListener('click',function(){
    swapLap();
    clearInterval(timer);
    swapstop();

})
function swapLap(){
    lap.style.display="none";
    resets.style.display="inline";
}
function swapreset(){
    lap.style.display="inline";
    resets.style.display="none";
}
resets.addEventListener('click',function(){
    location.reload();
})