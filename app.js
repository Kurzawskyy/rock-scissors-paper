 // TODO:
 // Computer's turn at 53 line
 
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
const paperButton = document.getElementById('paper');
const rockButton = document.getElementById('rock');
const scissorsButton = document.getElementById('scissors');

const chosenPaperElement = document.getElementById('chosen-paper');
const chosenRockElement = document.getElementById('chosen-rock');
const chosenScissorsElement = document.getElementById('chosen-scissors');

const submitButton = document.getElementById('submit-button');

// values
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

function getComputerValue() {  
    switch(randomNumber) {
        case 0:
            appState.computerSelectedItem = paper;
            break;
        case 1:
            appState.computerSelectedItem = rock;
            break;
        default:
            appState.computerSelectedItem = scissors;
    }
}

function getRandom() {  
    return Math.floor(Math.random() * (3));
}

paperButton.addEventListener('click', () => {
    appState.userSelectedItem = paper;

    chosenRockElement.classList.remove('item-visible');
    chosenScissorsElement.classList.remove('item-visible');
    chosenPaperElement.classList.add('item-visible');

    showButton();
})

rockButton.addEventListener('click', () => {
    appState.userSelectedItem = rock;

    chosenPaperElement.classList.remove('item-visible');
    chosenScissorsElement.classList.remove('item-visible');
    chosenRockElement.classList.add('item-visible');

    showButton();
})

scissorsButton.addEventListener('click', () => {
    appState.userSelectedItem = scissors;

    chosenPaperElement.classList.remove('item-visible');
    chosenRockElement.classList.remove('item-visible');
    chosenScissorsElement.classList.add('item-visible');

    showButton();
})
