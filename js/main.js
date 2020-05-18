const tinArr = ['Hi', 'My', 'Name', 'Is', 'Slim', 'Pluto', 'Daffy', 'Duck']
const medArr = ['incredulous', 'phantom', 'medium', 'difficulty', 'BenIsCool', 'Complete', 'Mission', 'Hilarious'];
const lonArr = ['HardModeHasNoRules', 'HAHAHAYouThoughtIWasJustOneWord', 'Supercalifragilisticexpialidocious'];


let answer = '';
let maxLimbs = 6;
let mistakes = 0; 
let guessed = [];
let wordStatus = null;
let myDiff = 0;



function randomWord(diff) {
    if(diff === 3){
        myDiff = 3;
        document.getElementById('cheatMsg').innerHTML = '';
<<<<<<< HEAD
        answer = lonArr[Math.floor(Math.random() * lonArr.length)];
=======
        answer = lonArr[Math.floor(Math.random() * lonArr.length)].toLowerCase();
>>>>>>> master
        guessedWord();
        generateBtns();
    }else if(diff === 2){
        myDiff = 2;
        document.getElementById('cheatMsg').innerHTML = '';
<<<<<<< HEAD
        answer = medArr[Math.floor(Math.random() * medArr.length)];
=======
        answer = medArr[Math.floor(Math.random() * medArr.length)].toLowerCase();
>>>>>>> master
        guessedWord();
        generateBtns();
    }else if(diff === 1){
        myDiff = 1;
        document.getElementById('cheatMsg').innerHTML = '';
<<<<<<< HEAD
        answer = tinArr[Math.floor(Math.random() * tinArr.length)];
=======
        answer = tinArr[Math.floor(Math.random() * tinArr.length)].toLowerCase();
>>>>>>> master
        guessedWord();
        generateBtns();
    }
    
}



function generateBtns() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => 
        `
            <button
              class="btn btn-lg btn-primary m-2"
              id='` + letter + `'
              onClick="handleGuess('` + letter + `')"
            >
              ` + letter + `
            </button>
        `).join('');

    document.getElementById('alphaBtns').innerHTML = buttonsHTML;
}

function handleGuess(letPick) {
    guessed.indexOf(letPick) === -1 ? guessed.push(letPick) : null;
    document.getElementById(letPick).setAttribute('disabled', true);

    if(answer.indexOf(letPick) >= 0) {
        guessedWord();
        gameStateWin();
    } else if (answer.indexOf(letPick) === -1) {
        mistakes++;
        gameStateLoss();
        renderMrStick(); 
    }
}

function renderMrStick() {
    document.getElementById('mrStick').src = './assets/' + mistakes + '.jpg';
}

function gameStateWin() {
    if (wordStatus === answer) {
        document.getElementById('mrStick').src = './assets/win.jpg';
        document.getElementById('alphaBtns').innerHTML = '!!!WINNER!!!';
    }
}

function gameStateLoss() {
    if (mistakes === maxLimbs) {
        document.getElementById('currentWord').innerHTML = 'The answer is: ' + answer;
        document.getElementById('alphaBtns').innerHTML = 'Look at what you have done!!';
    }
}

function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById('currentWord').innerHTML = wordStatus;
}


function reset() {
    mistakes = 0;
    guessed = [];
    myDiff = 0;
    document.getElementById('mrStick').src = './assets/0.jpg';

    randomWord();
    guessedWord();
    generateBtns();
}

function cheat() {
    console.log(myDiff, "in cheat!");
    if(myDiff === 3){
        let hint = answer.slice(0, 8);
        document.getElementById('cheatMsg').innerHTML = 'Hint : ' + hint + '';
    }else if(myDiff === 2){
        let hint = answer.slice(0, 4);
        document.getElementById('cheatMsg').innerHTML = 'Hint : ' + hint + '';
    }else if(myDiff === 1){
        let hint = answer.slice(0, 1);
        document.getElementById('cheatMsg').innerHTML = 'Hint : ' + hint + '';
    }
}




//document.getElementById('maxLimbs').innerHTML = maxLimbs;
randomWord();
generateBtns();
guessedWord();
