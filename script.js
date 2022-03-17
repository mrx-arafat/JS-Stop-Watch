let ms = 0;
s = 0;
m = 0;

let counter;

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let time = document.querySelector(".time");

// start btn er fn er moddhe baki 2ta

start.addEventListener("click", function () {
  if (!counter) {
    counter = setInterval(run, 10);
  }

  function run() {
    time.textContent = timeFormat();
    ms++;

    if (ms == 100) {
      ms = 0;
      s++;
    }
    if (s == 60) {
      s = 0;
      m++;
    }
  }

  stop.addEventListener("click", function () {
    clearInterval(counter);
    counter = false;
  });

  reset.addEventListener("click", function () {
    clearInterval(counter);
    counter = false;
    // ms = 00;
    // s = 00;
    // m = 00;
    // time.textContent = timeFormat();
    time.innerHTML = "00:00:00";
  });
});

function timeFormat() {
  return m + ":" + s + ":" + ms;
}
