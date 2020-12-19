 // TODO:
 // Computer's turn at 53 line
 // values
 
 const appState = {
    userName: '',
    userSelectedItem: '',
    computerSelectedItem: '',
    round: 1,
    points: [
        {user: 0},
        {computer: 0}
    ]
};


// Modal elements
const modal = document.getElementById('modal');
const submitNameBtn = document.getElementById('submit-name-btn');
const inputName = document.getElementById('given-user-name');
const errorMsg = document.getElementById('error-msg');

// Game elements
const selectedPaper = document.getElementById('paper');
const selectedRock = document.getElementById('rock');
const selectedScissors = document.getElementById('scissors');

const chosenPaper = document.getElementById('chosen-paper');
const chosenRock = document.getElementById('chosen-rock');
const chosenScissors = document.getElementById('chosen-scissors');

const submitButton = document.getElementById('submit-button');

const givenName = document.getElementById('user-name');

const paper = 'Paper';
const rock = 'Rock';
const scissors = 'Scissors';

const randomNumber = getRandom();

// Modal running
submitNameBtn.addEventListener('click', () => {
    if(!inputName.value) {
        errorMsg.classList.add('item-visible');
    } else {
        appState.userName = inputName.value;
        givenName.innerHTML = appState.userName;

        modal.classList.add('invisible');
    }
})

// After modal
function showButton() {
    submitButton.classList.add('show-button');
}

function startPlaying() {     
    if(randomNumber === 0) {
        appState.computerSelectedItem = paper;
    } else if (randomNumber === 1) {
        appState.computerSelectedItem = rock;
    } else {
        appState.computerSelectedItem = scissors;
    }
}

function getRandom(min, max) {
    min = Math.ceil(0);
    max = Math.ceil(2);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

selectedPaper.addEventListener('click', () => {
    appState.userSelectedItem = paper;

    chosenRock.classList.remove('item-visible');
    chosenScissors.classList.remove('item-visible');
    chosenPaper.classList.add('item-visible');

    showButton();
})

selectedRock.addEventListener('click', () => {
    appState.userSelectedItem = rock;

    chosenPaper.classList.remove('item-visible');
    chosenScissors.classList.remove('item-visible');
    chosenRock.classList.add('item-visible');

    showButton();
})

selectedScissors.addEventListener('click', () => {
    appState.userSelectedItem = scissors;

    chosenPaper.classList.remove('item-visible');
    chosenRock.classList.remove('item-visible');
    chosenScissors.classList.add('item-visible');

    showButton();
})
