const elDay = document.getElementById('day')
const elHour = document.getElementById('hour')
const elMinut = document.getElementById('minute')
const elSecond = document.getElementById('second')

const deadline = "17 Nov 2023";

function countdown() {
  const birthday = new Date(deadline)
  const today = new Date()

  const totalSeconds = (birthday - today) / 1000;


  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  elDay.innerHTML = days
  elHour.innerHTML = formatTime(hours)
  elMinut.innerHTML = formatTime(minutes)
  elSecond.innerHTML = formatTime(seconds)
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);