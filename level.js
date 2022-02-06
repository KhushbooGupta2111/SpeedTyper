var countDownDate = new Date("December 31, 2024 15:37:25").getTime();
var x = setInterval(function() {
  now = new Date().getTime();
  distance = countDownDate - now;
  seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML =  seconds + "s ";
},1000);


const words = ['hello', 'world','apple','nice','school','git'];

function isCorrect() {
     input1 = document.body.querySelector("word-input").value;
    if(input1 == words[0])
    {
      document.body.querySelector("text").innerHTML = "Hello"
    }
    
}

