const medArr = ['incredulous', 'phantom', 'medium', 'difficulty'];


let answer = '';
let maxLimbs = 6;
let mistakes = 0; 
let guessed = [];
let wordStatus = null;




function randomWord() {
    answer = medArr[Math.floor(Math.random() * medArr.length)];

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
        renderMistakes();
        gameStateLoss();
        renderMrStick(); 
    }
}

function renderMrStick() {
    document.getElementById('mrStick').src = './assets/' + mistakes + '.jpg';
}

function gameStateWin() {
    if (wordStatus === answer) {
        document.getElementById('alphaBtns').innerHTML = '!!!WINNER!!!';
    }
}

function gameStateLoss() {
    if (mistakes === maxLimbs) {
        document.getElementById('currentWord').innerHTML = 'The answer is: ' + answer;
        document.getElementById('alphaBtns').innerHTML = 'Look what you have done!!';
    }
}

function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById('currentWord').innerHTML = wordStatus;
}

function renderMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
    mistakes = 0;
    guessed = [];
    document.getElementById('mrStick').src = './assets/0.jpg';

    randomWord();
    guessedWord();
    renderMistakes();
    generateBtns();
}


document.getElementById('maxLimbs').innerHTML = maxLimbs;
randomWord();
generateBtns();
guessedWord();
