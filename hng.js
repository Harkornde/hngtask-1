const todayInput = document.getElementById("dow");
const timeInput = document.getElementById("ct");

//Getting the day
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = new Date();
const day = today.getDay();
const name = weekday[day];

todayInput.textContent = name;

// Getting the current UTC time

const updateTime = () => {
  const date = new Date();
  const dateMili = date.toISOString().substr(12, 8);
  timeInput.textContent = dateMili;
};

setInterval(updateTime,1000)
timeInput.textContent = dateMili;