

var randomNumber1=Math.floor(Math.random()*6 +1);

switch (randomNumber1)
 {case 1: document.querySelector("img").src="images/dice1.png";
            break;
 case 2: document.querySelector("img").src="images/dice2.png";
            break;
 case 3: document.querySelector("img").src="images/dice3.png";
            break;
 case 4: document.querySelector("img").src="images/dice4.png";
            break;
 case 5: document.querySelector("img").src="images/dice5.png";
            break;
 case 6: document.querySelector("img").src="images/dice6.png";
            break;
 }
var randomNumber2=Math.floor(Math.random()*6 +1);

switch (randomNumber2)
 {case 1: document.getElementById("2").src="images/dice1.png";
            break;
 case 2: document.getElementById("2").src="images/dice2.png";
            break;
 case 3: document.getElementById("2").src="images/dice3.png";
            break;
 case 4: document.getElementById("2").src="images/dice4.png";
            break;
 case 5: document.getElementById("2").src="images/dice5.png";
            break;
 case 6: document.getElementById("2").src="images/dice6.png";
            break;
 }

 if (randomNumber1===randomNumber2) {
     document.querySelector("h1").innerHTML="🚩Draw🚩";
    }
 else if(randomNumber2>randomNumber1) {
     document.querySelector("h1").innerHTML="Player 2 Wins🚩";
     }
 else{
     document.querySelector("h1").innerHTML="🚩Player 1 Wins ";
     }