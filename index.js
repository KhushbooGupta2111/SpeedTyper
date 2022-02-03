

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
    const startButton = document.querySelector("btn-level");
    document.body.removeChild(startButton);
}


{/* <div class="level-1"><button>Level 1</button></div>
<span><div class="level-2"><button>Level 2</button></div></span>
<span><div class="level-3"><button>Level 3</button></div></span> */}