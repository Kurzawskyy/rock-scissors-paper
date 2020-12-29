 // TODO:
 // 
 
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
const playerElements = {
    paperButton: document.getElementById('paper'),
    rockButton: document.getElementById('rock'),
    scissorsButton: document.getElementById('scissors')
}

// Chosen by user
const chosen = {
    chosenPaperElement: document.getElementById('chosen-paper'),
    chosenRockElement: document.getElementById('chosen-rock'),
    chosenScissorsElement: document.getElementById('chosen-scissors')
}

const submitButton = document.getElementById('submit-button');

// Computer elements
const computerElements = {
    drawnPaper: document.getElementById('computer-paper'),
    drawnRock: document.getElementById('computer-rock'),
    drawnScissors: document.getElementById('computer-scissors')
}

// Values
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
            computerElements.drawnPaper.classList.add('item-visible');
            break;
        case 1:
            appState.computerSelectedItem = rock;
            computerElements.drawnRock.classList.add('item-visible')
            break;
        default:
            appState.computerSelectedItem = scissors;
            computerElements.drawnScissors.classList.add('item-visible');
    }
}

function getRandom() {  
    return Math.floor(Math.random() * 3);
}

playerElements.paperButton.addEventListener('click', () => {
    appState.userSelectedItem = paper;

    chosen.chosenRockElement.classList.remove('item-visible');
    chosen.chosenScissorsElement.classList.remove('item-visible');
    chosen.chosenPaperElement.classList.add('item-visible');

    showButton();
})

playerElements.rockButton.addEventListener('click', () => {
    appState.userSelectedItem = rock;

    chosen.chosenPaperElement.classList.remove('item-visible');
    chosen.chosenScissorsElement.classList.remove('item-visible');
    chosen.chosenRockElement.classList.add('item-visible');

    showButton();
})

playerElements.scissorsButton.addEventListener('click', () => {
    appState.userSelectedItem = scissors;

    chosen.chosenPaperElement.classList.remove('item-visible');
    chosen.chosenRockElement.classList.remove('item-visible');
    chosen.chosenScissorsElement.classList.add('item-visible');

    showButton();
})
