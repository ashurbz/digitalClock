let hours = document.getElementById('hours');   // hours span element from html
let mins = document.getElementById('mins');    // mins span element from html
let seconds = document.getElementById('seconds'); // seconds span element from html

document.getElementById("date").innerText = new Date().toDateString();   // Getting date from pre define function
setInterval(() => { hours.innerText = new Date().getHours() + " Hrs" });  // getting hours from date function
setInterval(() => { mins.innerText = new Date().getMinutes() + " Mins" });  // getting minutes from date function
setInterval(() => { seconds.innerText = new Date().getSeconds() + " Secs" }); // getting seconds from date function