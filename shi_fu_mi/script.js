let scorePlayer = 0;
let scoreBot = 0;
let showResult = document.getElementById("resultat");
let showScore = document.getElementById("score");
function resetGame(){
    scorePlayer = 0;
    scoreBot = 0;
    showResult.innerHTML = " ";
    showScore.innerHTML = " ";
}

function randomizer(){
    let random = Math.floor(Math.random()* 3)+1;
    return random;
}

function ShiFuMi(){
    let stringResult = " ";
    let result = randomizer();
    console.log(result);
    if(result === 1){
        stringResult = "Pierre";
    }else if(result === 2){
        stringResult = "Papier";
    }else{
        stringResult = "Ciseau";
    }
    console.log(stringResult);
    return stringResult;
}

function startGame(choix){
    let playerChoice = choix;
    let random = ShiFuMi();
    if(playerChoice === random){
        showResult.innerHTML = "<h2>Ex-aequo</h2>";
    }else if(playerChoice === "Pierre" && random === "Ciseau" || 
             playerChoice === "Papier" && random === "Pierre" || 
             playerChoice === "Ciseau" && random === "Papier"){
        showResult.innerHTML = "<h2>You Win</h2>";
        scorePlayer += 1;
        showScore.innerHTML = "<h3>" + scorePlayer + " - " + scoreBot + "</h3>";
    }else{
        showResult.innerHTML = "<h2>You lose</h2>";
        scoreBot += 1;
        showScore.innerHTML = "<h3>" + scorePlayer + " - " + scoreBot + "</h3>";
    }
}


function test(){
    
}