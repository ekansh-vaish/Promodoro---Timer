var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var workmin = document.getElementById('workminutes');
var worksec = document.getElementById('workseconds');

var breakmin = document.getElementById('breakmin');
var  breaksec = document.getElementById('workseconds');

var startTimer;

start.addEventListener('click', function(){
if(startTimer === undefined)
{
startTimer = setInterval(timer,1000)
  {
else
    {
alert("Timer is already running');
      }
  });
reset.addEventListener('click',function()
{
  workmin.innerText = 25;
  worksec.innerText = 00;

  breakmin.innerText = 5;
  breaksec.innerText = "00;

  document.getElementById('counter').innerText = 0;
  stopInterval()
  startTimer = undefined;
})

stop.addEventListener('click',function()
{
 stopInterval()
  startTimer = undefined;
})

function timer()
{
if(worksec.innerText != 0)
{
worksec.innerText --;  
}
else if(workmin.innerText != 0 && worksec.innerText == 0)
  {
  worksec.innerText = 59;
  workmin.innerText --;
  }

 if(workmin.innerText == 0 && worksec.innerText == 0)
  {
  if(bs.innerText !=0 )
  {
  bs.innerText --;
  }
  else if(breakmin.innerText !=0 && breaksec.innerText == 0)
  {
breaksec.innerText = 59;
    breakmin.innerText--;
  }
  }

  if(workmin.innerText == 0 && worksec.innerText == 0 && breakmin.innerText && breaksec.innerText == 0)
  {
  workmin.innerText = 25;
  worksec.innerText = "00";

    breakmin.innerText = 5;
    breaksec.innerText = "00";
     document.getElementById('counter').innerText ++ ;
  }
}

function stopInterval()
  {
  clearInterval(startTimer);
  }
