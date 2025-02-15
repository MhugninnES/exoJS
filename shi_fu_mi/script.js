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

function startGame(){
    let playerChoice = prompt("Pierre, Papier, Ciseau");
    let showResult = document.getElementById("resultat");
    let random = ShiFuMi();
    if(playerChoice === random){
        showResult.innerHTML = "Egailité";
        score("bot");
    }
}

function resetGame(){

}

function score(who){
    let scoreP = 0;
    let scoreB = 0;

    if(who === "bot"){
        scoreB =+ 1;
    }

    console.log("score " + scoreB);
}