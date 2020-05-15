/*------ Constants ------*/
const accChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const tinArr = ['Hi', 'My', 'Name', 'Is', 'What', 'Slim', 'Eagle',];
const medArr = ['incredulous', 'phantom', 'medium', 'difficulty'];
const lonArr = ['superscope', 'incredible', 'ICantThinkOfVeryLongWords'];
const phrArr = ['General Assembly', 'Ben is Cool', 'Hall & Oats', 'Tenacious D', 'You Stay Classy San Diego', 'Thats So Fetch'];
const limbLookup = {
    '0': "url('../../assets/base.jpg') center center fixed",//base picture
    '1': "url('../../assets/pcHead.jpg') center center fixed",//head
    '2': "url('../../assets/pcBody.jpg') center center fixed",//body
    '3': "url('../../assets/pcLeg.jpg') center center fixed",//leg
    '4': "url('../../assets/pcLegs.jpg') center center fixed",//legs
    '5': "url('../../assets/pcArm.jpg') center center fixed",//arm
    '6': "url('../../assets/pcArms.jpg') center center fixed",//arms
}


/*------ Variables ------*/
let word, guess, letCnt, matchCtn, lettersGuessed, lettersMatched, limbs;

/*------Cached Elements------*/
//const diffEl = document.getElementById("difficulty");
const tinDiff = document.getElementById("tin");
const medDiff = document.getElementById("med");
const lonDiff = document.getElementById("lon");
const phrDiff = document.getElementById("phr");
const msg     = document.getElementById("msg");
const lets    = document.getElementById("letters");
const letGss  = document.getElementById("letter-guess");



/*------Event Listeners------*/
tinDiff.addEventListener('click', function() {
    word = tinArr[Math.floor(Math.random() * tinArr.length)];
    letcnt = word.length;
    init();
});


medDiff.addEventListener('click', function() {
    word = medArr[Math.floor(Math.random() * medArr.length)];
    letcnt = word.length;
    init();
});


lonDiff.addEventListener('click', function() {
    word = lonArr[Math.floor(Math.random() * lonArr.length)];
    letcnt = word.length;
    init(); 
});


/*~~~~~~~~~~~~~~ TO BE ADDED
phrDiff.addEventListener('click', function() {
    word = phrArr[Math.floor(Math.random() * phrArr.length)];
    letcnt = word.length;
    init();
});
*/


/*------Functions------*/
init();




function submitGuess() {
    

    guess = document.getElementById("letter-guess").value;
    let lowWord = word.toLowerCase();
    

    if(accChars.includes(guess)){

        //If the guess has been guessed before
        if(lettersMatched && lettersMatched.indexOf(guess) > -1 || lettersGuessed && lettersGuessed.indexOf(guess) > -1){
            
            console.log(lettersMatched, 'lettersMatched after letter twins if');
            console.log(lettersGuessed, 'lettersGuessed after letter twins if');

            msg.innerText = `${guess} has been guessed before!`;

        //If the guess is correct, add to matched and end game if word is finished
        }else if(lowWord.indexOf(guess) > -1){
            
            render(); 

            //searches for more than one of a character
            for(let i=0; i < lowWord.length; i++){
                if(lowWord.charAt(i) === guess) { matchCtn += 1; }
            }
            lettersMatched += guess;
            if(matchCtn === lowWord.length) {
                console.log("Ive won");
                playAgain('1');
            }
        //If the guess hasn't been guessed and is incorrect
        }else {
            lettersGuessed += guess;
            limbs++;
            stickRender();
            render();
        }
            
    }else { msg.innerText = "Guesses must be 1 letter!"; }
    
}




function stickRender() {
    console.log(limbs, "limbs in stickRender()");
    if(limbs < 7) {
        console.log(limbs, "limbs < 7")
      document.body.style.background = "grey";  
      document.body.style.background = limbLookup[limbs];
    }else {
        console.log("limbs == 7");
        playAgain('0');
    }


}

function playAgain(outcome){
    console.log("in playAgain");
    if(outcome === '1'){
        console.log(outcome, "outcome in playAgain");
        console.log(msg, "msg in outcome");
        msg.innerHTML = "Congratulations!!!";
        console.log(msg, "msg in outcome after congrats");
        init();
    }else{
        console.log(outcome, "outcome in playAgain");
        msg.innerText = "Look what you did!";
        init();
    }
}


function render(){
    console.log(word, "word from render()");
    document.getElementById("letter-guess").value = '';
}

function init() {
    
    msg.innerText = "";
    lettersGuessed = ''; 
    lettersMatched = '';
    matchCtn = 0;
    limbs = 0;
    console.log(word, ": is the word");
    
}

    



