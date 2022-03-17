## Lessons learned from here

- document.querySelector(".timer") >>> ekhane dot dite vule jai >>> but document.getElementById("start")>>> eita te ei jhamela nei
- I need a fn that will continuously change I will use setInterval
- how setInterval & clearInterval works
- setInterval(run,10) >>> run namer fn ta 10ms por por run hobe
- ekhane run namer fn er moddhe textContent set kore time change hocche
- if(!counter){
  counter = setInterval(run,10);
  }
  eita evabe lekhar karon holo ami jodi start e ek er beshi click kori tahole time fast hote thakbe , joto click korbo toto fast hobe
  - if counter is not true I will play setInterval but if true I don't need it to happen
  - need clearInterval(counter) to stop the timer
- Stop & Reset button e click er pore >> counter =false; kora lagbe nahole pore jodi start e click kora hoi tokhon arr start hobe na
