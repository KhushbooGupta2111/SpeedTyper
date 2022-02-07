window.addEventListener('load',startGame);
const words = ["hello", "world","apple","nice","school","doughnut","daring","fearless"];
var score = 0;
var count = 10;
let intervalId;

function setTimer() {
 intervalId = setInterval(countDown,1000);
}

function startGame()
{
    setTimer();
    Word();
    const word1 = document.querySelector("#word-input").addEventListener('change',isCorrect);
}

const time = document.querySelector(".time-score-number");

function countDown(){
    if(count === 0)
{
    alert("Game is over");
    if(intervalId)
    clearInterval(intervalId);
}

time.innerText = count;
count--;


}


function Word(){
    var wordNumber = Math.floor(Math.random() * words.length)
    var typeWord = words[wordNumber];
    document.getElementById("word").innerText = typeWord;
    


}


function isCorrect() {
    
    const word = document.querySelector("#word").innerText;
    const input = document.querySelector("#word-input").value;
    if(word === input){
         Word();
        score += 10;
        count += 10;
        document.querySelector(".time-score").innerText = count;
    }
     //document.querySelector("text").innerHTML = "Hello";
}



