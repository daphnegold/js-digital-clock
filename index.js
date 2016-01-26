// Your code here
var clock = document.getElementById("clock");
var happyTime = document.getElementById("happyhour");
var intervalID = window.setInterval(displayClock, 1000);

function ampm(hour) {
  return (hour <= 12) ? "AM" : "PM";
}

function happyHour(hour) {
  return (hour >= 17 && hour < 22) ? "IT'S HAPPY HOUR TIME!" : "It's Happy Hour somewhere!";
}

function formatTime(unit) {
  return (unit > 9) ? unit : "0" + unit;
}

function noMilitary(hours) {
  return ((hours + 11) % 12) + 1;
}

function displayClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours(), minutes = currentTime.getMinutes(), seconds = currentTime.getSeconds();


  clock.innerHTML = noMilitary(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds) + " " + ampm(hours);
  happyTime.innerHTML = happyHour(hours);
}
