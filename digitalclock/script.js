const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock)


// setInterval is a method that calls a function at specified intervals (in milliseconds)
setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); //two parameters - function & interval time
