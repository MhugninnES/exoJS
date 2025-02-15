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
}

function startGame(){
    ShiFuMi();
}

function resetGame(){

}