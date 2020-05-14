/*------ Constants ------*/
const accChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const tinArr = ['Hi', 'My', 'Name', 'Is', 'What', 'Slim', 'Eagle',];
const medArr = ['incredulous', 'phantom', 'medium', 'difficulty'];
const lonArr = ['superscope', 'incredible', 'ICantThinkOfVeryLongWords'];
const phrArr = ['General Assembly', 'Ben is Cool', 'Hall & Oats', 'Tenacious D', 'You Stay Classy San Diego', 'Thats So Fetch'];


//const lettersGuessed = [];
//const lettersMatched = [];

/*------ Variables ------*/
let word, guess, letCnt, matchCtn, lettersGuessed, lettersMatched;

/*------Cached Elements------*/
//const diffEl = document.getElementById("difficulty");
const tinDiff = document.getElementById("tin");
const medDiff = document.getElementById("med");
const lonDiff = document.getElementById("lon");
const phrDiff = document.getElementById("phr");
const msg     = document.getElementById("msg");


/*------Event Listeners------*/
tinDiff.addEventListener('click', function() {
    word = tinArr[Math.floor(Math.random() * tinArr.length)];
    letcnt = word.length;
    displayLetterList();
});


medDiff.addEventListener('click', function() {
    word = medArr[Math.floor(Math.random() * medArr.length)];
    letcnt = word.length;
    displayLetterList();
});


lonDiff.addEventListener('click', function() {
    word = lonArr[Math.floor(Math.random() * lonArr.length)];
    letcnt = word.length;
    displayLetterList();
});



phrDiff.addEventListener('click', function() {
    word = phrArr[Math.floor(Math.random() * phrArr.length)];
    letcnt = word.length;
    displayLetterList();
});



/*------Functions------*/
function init() {
    lettersGuessed, lettersMatched = '';
    matchCtn = 0;
}





function submitGuess() {
    

    guess = document.getElementById("letter-guess").value;
    let lowCase = word.toLowerCase();


    if(accChars.includes(guess)){


            //if the guess hasn't been guessed before
            if(lettersMatched && lettersMatched.indexOf(guess) > -1 || lettersGuessed && lettersGuessed.indexOf(guess) > -1){
                
                for(let i=0; i < lowCase.length; i++){
                    if(lowCase[i] == guess){
                                               
                        //call the charspace updater
                    }
                }
            }else if(word.indexOf(guess) > -1){
                //Reveal the character on its corresponding space

                for(let i=0; i < word.length; i++){
                    if(word.charAt(i) === guess) {
                        matchCtn 
                    }
                }




            }else {
                //guessedWrong.push(guess);
            }
            
    }else { msg.innerText = "Guesses can only be 1 letter!"; }
    
}

function displayLetterList() {
    //Take currentWord, count the characters, generate HTML 
    console.log(word, "word from displayLetterList");
    
}


function charRender(i) {
    //Takes index of the current word ang highlights the corresponding




}


function render(){
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







/*for(let i=0; i < lowCase.length; i++){
                //console.log(lowCase[i], "word[i] in for");
                if(lowCase[i] == guess) {
                    console.log(guess, "guessed right");
                    guessedRight.push(word[i]);                        
                    letcnt--;
                    lettersGuessed.push(guess);

                    if(guessedRight.length == word.length){
                        console.log(guessedRight, "winner!");
                        //winner()
                    }
                }else if(lowCase[i] !== guess && lettersGuessed.indexOf(guess) > -1){
                    console.log(guess, "guessed wrong");
                    console.log(lettersGuessed, "lettersGuessed");
                        
                }
            }*/
            //checkGuess(guess)
       // }
        //document.getElementById("letter-guess").value = ''; 
        msg.innerText = "";   
        // render function to refresh the screen

























//>Player has the option (continous throughout current word) to either
//    a. (Re)Choose difficulty, this will find a new word(also scroll wheel effect)
//    b. Cheat, gives next empty spac according to index if(!0,!1,!2....) 
//    c. Guess
//        >Player inputs a letter and matches against the words char-array
//            >If wrong, background picture is updated to show next picture in line
//            >If right, the corresponding space(s) are filled
//    d. while(all_spaces != filled)^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    



