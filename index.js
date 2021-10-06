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
    
    var myTimer = setInterval(timer,100);
    
    setTimeout(function (){
        
        clearInterval(myTimer)

        myChoice = choice
    
        var choiceRandom = randomChoice(); 
        
        compare(myChoice,choiceRandom)
        
        createElement('p',`Score : IA ${heCount} - ${myCount} Me`, 'result')    
    },2000)
        
    return myChoice;
}


var heCount = 0
var myCount = 0

function compare (a,b){
    
    if(a === "cissors" && b === "rock" || a === "paper" && b === "cissors" || a === "rock" && b === "paper"){
        console.log('U lose hard my dude, try again')
        console.log(a);
        console.log(b);
        heCount+= 1
        console.log(heCount);
    }
    else if (a === b){
        console.log('Not even close baby')
        console.log(a);
        console.log(b);
    }
    else{
        console.log('U win that, Well Played !')
        console.log(a);
        console.log(b);
        myCount+=1
        console.log(myCount);
    }
    
    // Counter score 
    
    if(heCount === 3 && myCount < heCount){
        createElement('p',`Score : IA ${heCount} - ${myCount} Me`, 'result')
        alert('IA Won my dude, u s***')
        heCount = 0
        myCount = 0
    }
    else if (myCount === 3 && heCount < myCount){
        createElement('p',`Score : IA ${heCount} - ${myCount} Me`, 'result')
        alert('U won that easyyy')
        myCount = 0
        heCount = 0
    }
    
    return;
}

function createElement (element,text,getId){
    
    var newElement = document.createElement(element)
    
    var txt = document.createTextNode(text)
    
    newElement.appendChild(txt)
    
    var gotElement = document.getElementById(getId)
    
    gotElement.appendChild(newElement)
}

var i = 0

function timer (){    

    if(i === 0){
        document.getElementById('ia-result').setAttribute('src','./assets/paper.png')
        i++
    }
    else if(i === 1){
        i++
        document.getElementById('ia-result').setAttribute('src','./assets/cissors.png')
    }
    else if (i === 2){
        document.getElementById('ia-result').setAttribute('src','./assets/rock.png')
        i++
        i = 0
    }
    return timer;
}