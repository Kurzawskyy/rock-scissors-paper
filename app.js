 // TODO:
// loader - hints
// 1) element html 'loader' ukryty
// 2) w momencie kliknięcia submit loader się pokazuje, a ukrycie loadera wylosowanie i pokazanie łapki komputera ma być w setTimeoucie


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

const playerElements = {
    paperBtn: document.getElementById('paper'),
    rockBtn: document.getElementById('rock'),
    scissorsBtn: document.getElementById('scissors')
}

const playerChosenElements = {
    paperElement: document.getElementById('chosen-paper'),
    rockElement: document.getElementById('chosen-rock'),
    scissorsElement: document.getElementById('chosen-scissors')
}

const computerElements = {
    paperElement: document.getElementById('computer-paper'),
    rockElement: document.getElementById('computer-rock'),
    scissorsElement: document.getElementById('computer-scissors')
}

const givenName = document.getElementById('user-name');
const submitPlayerSelectionBtn = document.getElementById('submit-player-selection-button');
const nameForm = document.getElementById('name-form');

const paper = 'Paper';
const rock = 'Rock';
const scissors = 'Scissors';

// Modal running
nameForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if(!inputName.value) {
        errorMsg.classList.remove('invisible');
    } else {
        appState.userName = inputName.value;
        givenName.innerHTML = appState.userName;

        modal.classList.add('invisible');
    }
});

// After modal
function showButton() {
    submitPlayerSelectionBtn.classList.add('show-button');
}

submitPlayerSelectionBtn.addEventListener('click', () => {
    getComputerValue();
})

function getComputerValue() {  
    const randomNumber = getRandom();

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
