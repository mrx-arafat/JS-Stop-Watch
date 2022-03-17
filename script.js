let ms = 0;
s = 0;
m = 0;

let counter;

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let time = document.querySelector(".time");

// start btn

start.addEventListener("click", function () {
  //setInterval ei fn er vitore dei nai first e

  counter = setInterval(run, 10);
  function run() {
    time.textContent = m + ":" + s + ":" + ms;
    ms++;

    if (ms == 100) {
      ms = 0;
      s++;
    }
  }
});
