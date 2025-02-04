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

function firstBoucle(){
    let result = document.getElementById("result");
    for(let i=0; i<=20; i += 2) {
        result.textContent += i + " / ";
    }
}

function boucleWhile(){
    let mot = "";
    let result= document.getElementById("result");

    while(mot !== "stop"){
        mot = prompt("Entrez un mot (stop pour arréter): ");
        result.textContent += mot + "  ";
    }

    alert("fin de boucle");
}

function boucleDoWhile(){
    let nombre = 0;
    do{
        nombre = prompt("Donner un nombre entre 0 et 10: ");
    }while(nombre < 0 || nombre > 10 || isNaN(nombre));
}

function exoBoucle(){
    for(i=1; i<=10; i++){
        console.log(i);
    }
}

function exoBoucleSomme(){
    let resultat = 0;
    for(let i =1; i<101; i++){
        resultat += i;
    }
    console.log(resultat);
}

function countVoyelle(){
    const VOYELLES = ["a", "e", "i", "o", "u", "y"];
    let mot = prompt("Entrez un mot: ");
    let compteur = 0;

    // for(let i=0; i< mot.length; i++){
    //     for(let j=0; j < voyelles.length; j++){
    //         if(mot[i] === voyelles[j]){
    //             compteur++;
    //         }
    //     }
    // }

    for(let i=0; i<mot.length; i++){
        if(VOYELLES.includes(mot[i])){
            compteur++;
        }
    }

    console.log(compteur);
}

function pyramide(){
    let star= "*";
    let space=" ";
    let result=document.getElementById("result");

    for(let i=1; i<6; i++){
        console.log(star.repeat(i));
        result.innerHTML+=star.repeat(i) + "<br>";
    }
}

function multiplicativeTable(){
    let numberUser=parseFloat(prompt("Entrez un nombre: "));
    let resultat = 0;
    let affichage= document.getElementById("result");

    for(let i=1; i<=10; i++){
        resultat = numberUser*i;
        console.log(numberUser + "x" + i + "=" + resultat);
        affichage.innerHTML+=numberUser + "x" + i + "=" + resultat + "<br>";
    }
}

function divisible(){
    for(let i=1; i<=50; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log(i);
        }
    }
}

function multiplication(a, b){
    return a*b;
}

function direBonjour(nom){
    console.log("bonjour", nom);
    const direBonjour2=(nom) => console.log("bonjour " + nom);
}
    
function moyenne(a, b, c){
    return (a+b+c)/3;
    console.log(moyenne(5,16,11));
}

function moyenneNoArg(){
    let moyenne=0;
    for(let i=0; i<arguments.length; i++){
        moyenne += arguments[i]
    }
    return moyenne /= arguments.length;
}

console.log(moyenneNoArg(10,20,16,25,69,85));