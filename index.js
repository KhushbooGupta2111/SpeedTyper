

function appendButtons(){
    for(var i = 1; i < 4; i++)
    {
    const levelButton = document.createElement("button");
    levelButton.innerHTML = "Level" + i;
    document.body.appendChild(levelButton);
    document.body.appendChild(document.createElement("p"));
    }
    
}
function removeStart(){
    const startButton = document.body.querySelector("btn-level");
    document.body.remove(startButton);
}

{/* <button class = "btn-level" onclick="appendButtons(); removeStart()">START</button> */}

function level(){
    const level1Para  = document.createElement("p");
    document.body.querySelector("demo").innerHTML = ""
}