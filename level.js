var countDownDate = new Date("December 31, 2024 15:37:25").getTime();
var x = setInterval(function() {
  now = new Date().getTime();
  distance = countDownDate - now;
  seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML =  seconds + "s ";
})


const words = ['hello', 'world'];

function isCorrect() {
    const input1 = document.body.querySelector("word-input").target.value;
    if(input1 == words[0])
    {
      document.body.querySelector("text").innerHTML = "Hello"
    }
    
}

