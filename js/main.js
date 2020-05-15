/*------ Constants ------*/
const accChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const tinArr = ['Hi', 'My', 'Name', 'Is', 'What', 'Slim', 'Eagle',];
const medArr = ['incredulous', 'phantom', 'medium', 'difficulty'];
const lonArr = ['superscope', 'incredible', 'ICantThinkOfVeryLongWords'];
const phrArr = ['General Assembly', 'Ben is Cool', 'Hall & Oats', 'Tenacious D', 'You Stay Classy San Diego', 'Thats So Fetch'];
const limbLookup = {
    '0': "url('../../assets/base.jpg')",//base picture
    '1': "url('../../assets/pcHead.jpg')",//head
    '2': "url('../../assets/pcBody.jpg')",//body
    '3': "url('../../assets/pcArm.jpg')",//arm
    '4': "url('../../assets/pcArms.jpg')",//arms
    '5': "url('../../assets/pcLeg.jpg')",//leg
    '6': "url('../../assets/pcLegs.jpg')",//legs
}


//const lettersGuessed = [];
//const lettersMatched = [];

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
    //render();
    
});


medDiff.addEventListener('click', function() {
    word = medArr[Math.floor(Math.random() * medArr.length)];
    letcnt = word.length;
    //render();
    
});


lonDiff.addEventListener('click', function() {
    word = lonArr[Math.floor(Math.random() * lonArr.length)];
    letcnt = word.length;
    //render();
    
});



phrDiff.addEventListener('click', function() {
    word = phrArr[Math.floor(Math.random() * phrArr.length)];
    letcnt = word.length;
    //render();
    
});



/*------Functions------*/
function init() {
    lettersGuessed, lettersMatched = '';
    matchCtn = 0;
    limbs = 0;
    document.getElement
}





function submitGuess() {
    

    guess = document.getElementById("letter-guess").value;
    


    if(accChars.includes(guess)){


            //if the guess hasn't been guessed before
            if(lettersMatched && lettersMatched.indexOf(guess) > -1 || lettersGuessed && lettersGuessed.indexOf(guess) > -1){
                
                console.log(guess, 'guess passed the letter twins');

                msg.innerText = `${guess} has been guessed before!`;

            }else if(word.indexOf(guess) > -1){
                //Reveal the character on its corresponding space

                for(let i=0; i < word.length; i++){
                    if(word.charAt(i) === guess) {
                        matchCtn += 1;
                    }
                }
                lettersMatch += guess;
                if(matchCtn === word.length) {
                    playAgain('1');
                }
            }else {
                lettersGuessed += guess;
                //limbs++;
                //stickRender(limbs);
                
            }
            
    }else { msg.innerText = "Guesses must be 1 letter!"; }
    //render();
}




/*function stickRender(limb) {
    if(limb < 7) {
      document.body.style.background = limbLookup[limb];
    }else if(limb == 7){
        playAgain('0');
    }


}*/


function render(){
    document.getElementById("letter-guess").value = '';

    //Tasks:
    //  display character spaces
    //  fill character spaces
    //  clear the h2 contents (timer?)
    //  clearBoard() -> might need to be a seperate function
}




function checkGuess(guess) {
    //if
    console.log(word, 'in checkGuess');

}


function spinWheel(arr) {
    
}




//>Player has the option (continous throughout current word) to either
//    a. (Re)Choose difficulty, this will find a new word(also scroll wheel effect)
//    b. Cheat, gives next empty spac according to index if(!0,!1,!2....) 
//    c. Guess
//        >Player inputs a letter and matches against the words char-array
//            >If wrong, background picture is updated to show next picture in line
//            >If right, the corresponding space(s) are filled
//    d. while(all_spaces != filled)^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    



