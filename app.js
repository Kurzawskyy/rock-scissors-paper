 // TODO:
 
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

const modal = document.getElementById('modal');
const submitNameBtn = document.getElementById('submit-name-btn');
const inputName = document.getElementById('given-user-name');
const errorMsg = document.getElementById('error-msg');

// Game elements
const playerElements = {
    paperBtn: document.getElementById('paper'),
    rockBtn: document.getElementById('rock'),
    scissorsBtn: document.getElementById('scissors')
}

// Chosen by user
const playerChosenElements = {
    paperElement: document.getElementById('chosen-paper'),
    rockElement: document.getElementById('chosen-rock'),
    scissorsElement: document.getElementById('chosen-scissors')
}

const submitBtn = document.getElementById('submit-button');

// Computer elements
const computerElements = {
    paperElement: document.getElementById('computer-paper'),
    rockElement: document.getElementById('computer-rock'),
    scissorsElement: document.getElementById('computer-scissors')
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
        errorMsg.classList.remove('invisible');
    } else {
        appState.userName = inputName.value;
        givenName.innerHTML = appState.userName;

        modal.classList.add('invisible');
    }
})

// After modal
function showButton() {
    submitBtn.classList.add('show-button');
}

function getComputerValue() {  
    switch(randomNumber) {
        case 0:
            appState.computerSelectedItem = paper;
            computerElements.paperElement.classList.add('item-visible');
            break;
        case 1:
            appState.computerSelectedItem = rock;
            computerElements.rockElement.classList.add('item-visible')
            break;
        default:
            appState.computerSelectedItem = scissors;
            computerElements.scissorsElement.classList.add('item-visible');
    }
}

function getRandom() {  
    return Math.floor(Math.random() * 3);
}

playerElements.paperBtn.addEventListener('click', () => {
    appState.userSelectedItem = paper;

    playerChosenElements.rockElement.classList.remove('item-visible');
    playerChosenElements.scissorsElement.classList.remove('item-visible');
    playerChosenElements.paperElement.classList.add('item-visible');

    showButton();
});

playerElements.rockBtn.addEventListener('click', () => {
    appState.userSelectedItem = rock;

    playerChosenElements.paperElement.classList.remove('item-visible');
    playerChosenElements.scissorsElement.classList.remove('item-visible');
    playerChosenElements.rockElement.classList.add('item-visible');

    showButton();
});

playerElements.scissorsBtn.addEventListener('click', () => {
    appState.userSelectedItem = scissors;

    playerChosenElements.paperElement.classList.remove('item-visible');
    playerChosenElements.rockElement.classList.remove('item-visible');
    playerChosenElements.scissorsElement.classList.add('item-visible');

    showButton();
});
