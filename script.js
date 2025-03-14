const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour % 12) / 12) * 360 + ((mins / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  // Fix for transition jump when reaching 0s
  if (seconds === 0) {
    secondHand.style.transition = "none";
  } else {
    secondHand.style.transition = "transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)";
  }
}

// Run immediately and every second
setDate();
setInterval(setDate, 1000);
