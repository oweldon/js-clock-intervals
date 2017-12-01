var secondDegrees = 6;
var minuteDegrees = 6;
var hourDegrees = 30;

var currentSecond = 0;
var currentMinute = 0;
var currentHour = 0;

var secondTick = function() {
    console.log('tick');
    currentSecond += secondDegrees;
    var el = document.getElementById("second");
    el.style.transform = "rotate(" + currentSecond + "deg)";
}

var minuteTick = function() {
    console.log('tick');
    currentMinute += minuteDegrees;
    var el = document.getElementById("minute");
    el.style.transform = "rotate(" + currentMinute + "deg)";
}

var hourTick = function() {
    console.log('tick');
    currentHour += hourDegrees;
    var el = document.getElementById("hour");
    el.style.transform = "rotate(" + currentHour + "deg)";
}

setInterval(secondTick, 1000);
setInterval(minuteTick, 60000);
setInterval(hourTick, 3600000);
