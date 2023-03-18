const timerDayEl = document.querySelector(".timer__day");
const timerHourEl = document.querySelector(".timer__hour");
const timerMinEl = document.querySelector(".timer__min");
const timerSecEl = document.querySelector(".timer__sec");

function getTimeDifference(start,end) {
  let ms = Math.floor( end - start );
  let sec = Math.floor(ms/1000);
  let min = Math.floor(sec/60);
  let hour = Math.floor(min/60);
  let day = Math.floor(hour/24);
  hour = hour - (day * 24)
  min = min - (hour * 60) - (day * 24 * 60);
  sec = sec - (min * 60) - (day * 24 * 60 * 60) - (hour * 60 * 60);
  return {
    "day": day,
    "hour": hour,
    "min": min,
    "sec": sec
  }
  // return `${day} days ${hour} hours ${min} minutes ${sec} seconds`;
  // return `${day} days ${hour%24} hours ${min%60} minutes ${sec%60} seconds ${ms%1000} milliseconds`;
}

// const differedTime = getTimeDifference(startDate,endDate);
// console.log(differedTime)

let timer = setInterval(function(){
  const startDate = new Date();
  const endDate = new Date('3/19/2024');
  const differedTime = getTimeDifference(startDate,endDate);

  differedTime.day>10? `${timerDayEl.textContent = differedTime.day}` : timerDayEl.textContent = '0' + differedTime.day;
  differedTime.hour>10? `${timerHourEl.textContent = differedTime.hour}` : timerHourEl.textContent = '0' + differedTime.hour;
  differedTime.min>10? `${timerMinEl.textContent = differedTime.min}` : timerMinEl.textContent = '0' + differedTime.min;
  differedTime.sec>10? `${timerSecEl.textContent = differedTime.sec}` : timerSecEl.textContent = '0' + differedTime.sec;

  if(differedTime.sec <= 0 && differedTime.min <= 0 && differedTime.hour <= 0 && differedTime.day <= 0){
    timerDayEl.textContent = "00";
    timerHourEl.textContent = "00";
    timerMinEl.textContent = "00";
    timerSecEl.textContent = "00";
  }
}, 1000)