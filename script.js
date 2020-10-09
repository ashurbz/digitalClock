let hours = document.getElementById('hours');
let mins = document.getElementById('mins');
let seconds = document.getElementById('seconds');

 document.getElementById("date").innerText=new Date().toDateString();
setInterval(()=>{hours.innerText=new Date().getHours()+" Hrs"});
setInterval(()=>{mins.innerText=new Date().getMinutes()+" Mins"});
setInterval(()=>{seconds.innerText=new Date().getSeconds()+" Secs"});