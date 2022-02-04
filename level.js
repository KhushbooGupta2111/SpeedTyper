var countDownDate = new Date("December 31, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  now = new Date().getTime();
  distance = countDownDate - now;
  seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML =  seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


const words = ['hello','world'];

function isCorrect() {
    const input = document.body.querySelector("word-input").value;
    if(input == words[0])
    {
      document.body.querySelector("demo").innerHTML = "Hello"
    }

}

