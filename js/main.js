/*------ Constants ------*/
const accChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const tinArr = ['Hi', 'My', 'Name', 'Is', 'What', 'Slim', 'Eagle',];
const medArr = ['incredulous', 'phantom', 'medium', 'difficulty'];
const lonArr = ['superscope', 'incredible', 'ICantThinkOfVeryLongWords'];
const phrArr = ['General Assembly', 'Ben is Cool', 'Hall & Oats', 'Tenacious D', 'You Stay Classy San Diego', 'Thats So Fetch'];

const guessedWrong = [];
//const guessedRight = [];



/*------ Variables ------*/
let word, guess, letcnt;

/*------Cached Elements------*/
//const diffEl = document.getElementById("difficulty");
const tinDiff = document.getElementById("tin");
const medDiff = document.getElementById("med");
const lonDiff = document.getElementById("lon");
const phrDiff = document.getElementById("phr");



/*------Event Listeners------*/
tinDiff.addEventListener('click', function() {

    word = tinArr[Math.floor(Math.random() * tinArr.length)];
    letcnt = word.length;
    
    console.log(word, "<-- is the chosen word from tin");

});


medDiff.addEventListener('click', function() {

    word = medArr[Math.floor(Math.random() * medArr.length)];
    letcnt = word.length;
    
    console.log(word, "<-- is the chosen word from med");
});


lonDiff.addEventListener('click', function() {

    word = lonArr[Math.floor(Math.random() * lonArr.length)];
    letcnt = word.length;
    
    console.log(word, "<-- is the chosen word from lon");
});



phrDiff.addEventListener('click', function() {

    word = phrArr[Math.floor(Math.random() * phrArr.length)];
    letcnt = word.length;
    
    console.log(word, "<-- is the chosen word from phr");
});



/*------Functions------*/
function submitGuess() {
    guess = document.getElementById("letter-guess").value;
    
    while(letcnt > 0) {
        if(guess.length !== 1){
            alert("Single letter guesses only!")
        }else { 
            for(let i=0; i < word.length; i++){
                if(guess === word[i]) {
                    charRender(i);
                    letcnt--;
                }else {
                    guessedWrong.push(word[i]);
                    if(guessedWrong.length === word.length){
                        //I could manipulate the image from here if I wanted to. 
                        stickRender();
                    }
                }
            }


            //checkGuess(guess);
        }
    }
    
}


function charRender(i) {
    //Takes index of the current word ang highlights the corresponding
    
}







function checkGuess(guess) {
    //if
    console.log(word, 'in checkGuess');

}


function spinWheel(arr) {
    
}


























/*
//>Player chooses difficulty
//    >difficulty starts scroll wheel effect for word randomizer and word is chosen
function chTinDiff(){
    //Difficulty is a tiny medium or long
    //tinArr, medArr, lonArr
    //call spinWheel('correct Array')
    console.log('in chTinDiff');    

}


function chMedDiff(){
    //Difficulty is a tiny medium or long
    //tinArr, medArr, lonArr
    //call spinWheel('correct Array')
    console.log('in chMedDiff');
}


function chLonDiff(){
    //Difficulty is a tiny medium or long
    //tinArr, medArr, lonArr
    //call spinWheel('correct Array')

}

function chPhrDiff(){
    //Difficulty is a tiny medium or long
    //tinArr, medArr, lonArr
    //call spinWheel('correct Array')

}
*/








//>Player has the option (continous throughout current word) to either
//    a. (Re)Choose difficulty, this will find a new word(also scroll wheel effect)
//    b. Cheat, gives next empty spac according to index if(!0,!1,!2....) 
//    c. Guess
//        >Player inputs a letter and matches against the words char-array
//            >If wrong, background picture is updated to show next picture in line
//            >If right, the corresponding space(s) are filled
//    d. while(all_spaces != filled)^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    



