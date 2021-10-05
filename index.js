function randomChoice(){

    var choice = ["paper","cissors","rock"]

    var totallyRandom = choice[Math.floor(Math.random() * choice.length)];

    if(totallyRandom === "paper"){
        document.getElementById('ia-result').setAttribute('src','./assets/paper.png')
        // console.log('paper');
    }
    else if (totallyRandom === "rock"){
        document.getElementById('ia-result').setAttribute('src','./assets/rock.png')
        // console.log('rock');
    }
    else{
        document.getElementById('ia-result').setAttribute('src','./assets/cissors.png')
        // console.log('cissors');
    }

    return totallyRandom;
}

var myChoice = ''

function iChoose (choice){

    myChoice = choice

    var choiceRandom = randomChoice(); 

    compare(myChoice,choiceRandom)

    newElement('p',`Score : IA ${heCount} - ${myCount} Me `, 'result')

    return myChoice, newElement;
}


var heCount = 0
var myCount = 0

function compare (a,b){

    if(a === "cissors" && b === "rock" || a === "paper" && b === "cissors" || a === "rock" && b === "paper"){
        alert('U lose hard my dude, try again')
        console.log(a);
        console.log(b);
        heCount+= 1
        console.log(heCount);
    }
    else if (a === b){
        alert('Damn egality')
        console.log(a);
        console.log(b);
    }
    else{
        alert('U WIN THAT SO FAR !')
        console.log(a);
        console.log(b);
        myCount+=1
        console.log(myCount);
    }

    // Counter score 
    
    if(heCount === 3 && myCount < heCount){
        alert('Ia Won my dude, u s***')
        heCount = 0
        myCount = 0
    }
    else if (myCount === 3 && heCount < myCount){
        alert('I won that easyyy')
        myCount = 0
        heCount = 0
    }
    
    return;
}

var newElement = function createElement (element,text,getId){

    var newElement = document.createElement(element)

    var txt = document.createTextNode(text)

    newElement = newElement.appendChild(txt)

    var gotElemnt = document.getElementById(getId)

    return gotElemnt.appendChild(newElement)
}
