function calculator(){
    let a = parseFloat(prompt("Entrez un nombre: "));
    let operator = prompt("Entrez un operateur: ");
    let b = parseFloat(prompt("Entrez un deuxième nombre: "));
    let result = document.getElementById("result");

    if(operator === "+"){
        result.textContent = a + b;
    }else if(operator === "-"){
        result.textContent = a - b;
    }else if(operator === "*"){
        result.textContent = a * b;
    }else if(operator === "/"){
        if(b === 0){
            result.textContent = "division impossible ! ";
        }else{
            result.textContent = a / b;
        }
    }
}

function pairImpair(){
    let a = parseFloat(prompt("Entrez un nombre: "));
    let result = document.getElementById("result");

    if(a % 2 === 0){
        result.textContent = "c'est un nombre pair";
    }else{
        result.textContent = "c'est un nombre impair";
    }
}

function comparator(){
    let a = parseFloat(prompt("Entrez un nombre: "));
    let b = parseFloat(prompt("Entrez un deuxième nombre: "));
    let result = document.getElementById("result");

    if(a > b){
        result.textContent = a + " est supérieur a " + b;
    }else if(a === b){
        result.textContent = a + " est égal a " + b;
    }else if(a < b){
        result.textContent = a + " est inférieur a " + b;
    }
}

function noteAvis(){
    let note = parseFloat(prompt("Entrez une note entre 0 et 100: "));
    let result = document.getElementById("result");

    if(note >= 90 && note <= 100){
        result.textContent="Excellent avec une note de " + note;
    }else if(note >= 70 && note < 90){
        result.textContent="Bien avec une note de " + note;
    }else if(note >=50 && note < 70){
        result.textContent = "Passable avec une note de " + note;
    }else if(note > 0 && note < 50){
        result.textContent = "Echec avec une note de " + note;
    }else{
        result.textContent="Fait pas l'malin gourgandine !";
    }
}

function multiple3et5(){
    let a = parseFloat(prompt("Entrez un nombre : "));
    let result = document.getElementById("result");

    if(a%3 === 0 || a%5 === 0){
        result.textContent = `le nombre ${a} est un multiple de 3 ou de 5`;
    }else{
        result.textContent = `${a} n'est pas un multiple de 3 ou de 5`;
    }
}

function justePrix(){
    const SECRET_NUMBER= 69;
    let guess=parseFloat(prompt("Entrer votre guess: "));
    let result = document.getElementById("result");

    if(guess === SECRET_NUMBER){
        result.innerHTML = "<img src='images/nice-click-nice.gif'>";
    }else if(guess > SECRET_NUMBER){
        result.innerHTML = "<h3>C'est moins</h3>";
    }else if(guess < SECRET_NUMBER){
        result.innerHTML="<img src='images/kaamelott-arthur.gif'>";
    }
}