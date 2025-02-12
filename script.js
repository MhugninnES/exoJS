// --- 1. Exercise Bryan ---    
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
    let somme=0;
    for(let i=0; i<arguments.length; i++){
        somme += arguments[i]
    }
    return somme /= arguments.length;
    
    console.log(moyenneNoArg(10,20,16,25,69));
}

function exoFunction2(){
    // let nombre = parseFloat(prompt("Entrez le nombre: "));
    
    function estPaire(a){
        return a%2===0;
    }
    console.log(estPaire(parseFloat(prompt("Entrez un nombre: "))));
}

function exoFunction3(){
    function tableMult(a, affichage){
        let resultat = 0;
        let calcul = 0;

        for(let i=1; i<=10; i++){
            resultat = a*i;
            calcul = console.log(a + "x" + i + " = " + resultat);
            affichage.innerHTML+=a + "x" + i + " = " + resultat + "<br>";
        }
        return calcul + " = " + resultat;
    }
    tableMult(parseFloat(prompt("Entrez un nombre: ")), document.getElementById("result"));
}

function exoTableau1(){
    let animaux=["Chien", "Chat", "Lapin"];

        //solution 1
    // for(let i=0; i<animaux.length; i++){
    //     console.log(animaux[i]);
    // }
    
        //solution 2
    for(const pet of animaux){
        console.log(pet);
    }
}

function removeArrayElement(){
    let animaux=["Chien", "Chat", "Lapin"];
    
    animaux.push("Oiseau");
    animaux.splice(1, 1);

    let index = animaux.indexOf("Lapin"); //retourne l'index de l'éléments rechercher

    for(const p of animaux){
        console.log(p);
    }
}

function findElement(){
    let array = ["chien", "chat", "lapin", "oiseau"];
    function trouverElement(array, element, affichage){
        affichage.innerHTML=array.includes(element);
    }
    
    trouverElement(array, prompt("Entrez un animal: "), document.getElementById("result"));
}

function resultArray(){
    let numberArray = [5, 4, 7];
    function resultatTableau(array){
        let sum = 0;
        // for(let nombre of array){
        //     sum += nombre;
        // }
        // console.log(sum);
        // return sum;

        sum = array.reduce((acc, x) => acc + x, 0);
        console.log(sum);
    }
    resultatTableau(numberArray);
}

function reverseArray(){
    let tableau1 = [5,3,6,54];
    let tableau2 = ["oiseau", "cheval", "Dragon"];
    function retournerTableau(array,affichage){
        affichage.innerHTML = array.reverse();
    }
    retournerTableau(tableau2, document.getElementById("result"));
}

function AnalyzingNote(){
    function analyserNote(note){
        let noteMin = Math.min(note);
        let noteMax = Math.max(note);
        // let moyenne = note.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);

        console.log(noteMin);
        console.log(noteMax);
        console.log(moyenne);

    }
    analyserNote();
}

// --- 2. Exercise WayToLearnX ---

function exo1_part1_WTLX(){    
    function addition(a, b, affichage){
        let c = a+b;
        affichage.innerHTML = a + "+" + b + "= " + c;
    }
    console.log(addition(parseFloat(prompt("Entrez un nombre: ")), parseFloat(prompt("Entrez un deuxième nombre: ")), document.getElementById("result2")));
}

function exo2_part1_WTLX(){
    function MinuteToSecond(minutes, affichage){
        let seconde = minutes*60;
        affichage.innerHTML = minutes + " vaut " + seconde + " secondes";
    }
    console.log(MinuteToSecond(parseFloat(prompt("Entrez un nombre de minutes: ")), document.getElementById("result2")));
}

function exo3_part1_WTLX(){
    function Incrementation(a, affichage){
        affichage.innerHTML= a+1;
    }
    console.log(Incrementation(parseFloat(prompt("Entrez un nombre: ")), document.getElementById("result2")));
}

function exo4_part1_WTLX(){
    function airTriangle(base, hauteur, affichage){
        affichage.innerHTML = (base*hauteur)/2;
    }
    airTriangle(parseFloat(prompt("Entrez la base du triangle: ")), parseFloat(prompt("Entrez la hauteur du triangle: ")), document.getElementById("result2"));
}

function exo5_part1_WTLX(){
    function reverseString(mot, affichage){
        affichage.innerHTML= mot.split("").reverse().join("");
    }
    reverseString(prompt("Entrez un mot: "), document.getElementById("result2"));
}


function resetResult(){
    let result = document.getElementById("result");
    result.innerHTML = "";
    let result2 = document.getElementById("result2");
    result2.innerHTML = "";
}