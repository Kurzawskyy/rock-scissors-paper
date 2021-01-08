const appState = {
    userName: '',
    userSelectedItem: '',
    computerSelectedItem: '',
    round: 1,
    points: {
        user: 0,
        computer: 0
    }
};

const modal = document.getElementById('modal');
const submitNameBtn = document.getElementById('submit-name-btn');
const inputName = document.getElementById('given-user-name');
const errorMsg = document.getElementById('error-msg');

const roundModal = {
    modal: document.getElementById('statment-modal'),
    msg: document.getElementById('msg-to-user'),
    btn: document.getElementById('sumbit-round-btn')
}

const endGameModal = {
    modal: document.getElementById('end-game-modal'),
    msg: document.getElementById('who-won-msg'),
    playAgain: document.getElementById('end-game-refresh'),
    playAgainSwitchName: document.getElementById('end-game-change-name'),
    closeGame: document.getElementById('end-game-close')
}

const playerElements = {
    paperBtn: document.getElementById('paper'),
    rockBtn: document.getElementById('rock'),
    scissorsBtn: document.getElementById('scissors')
}

const userPoints = document.getElementById('user-points');
const computerPoints = document.getElementById('computer-points');
const round = document.getElementById('round-counter');

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
const loader = document.getElementById('loader');

const paper = 'Paper';
const rock = 'Rock';
const scissors = 'Scissors';

// Modal running
nameForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if(!inputName.value) {
        errorMsg.classList.remove('invisible');
        errorMsg.innerHTML = 'You must enter your name there.';
    } else {
        if(inputName.value === ' ') {
            errorMsg.innerHTML = 'You can`t just enter a blank space there.';
            errorMsg.classList.remove('invisible');
        } else {
            appState.userName = inputName.value;
            givenName.innerHTML = appState.userName;

            modal.classList.add('invisible');
        }
    }
});

// After modal
function showButton() {
    submitPlayerSelectionBtn.classList.add('show-button');
}

submitPlayerSelectionBtn.addEventListener('click', getComputerValue);
function getComputerValue() {  
    switchBooleanValue()
    loader.classList.add('item-visible');

    setTimeout(() => {
        loader.classList.remove('item-visible');

        const randomNumber = getRandom();
        switch(randomNumber) {
            case 0:
                appState.computerSelectedItem = paper;
                computerElements.paperElement.classList.add('item-visible');

                if(appState.userSelectedItem === paper) {
                    getRoundWinner('No one won this round...');
                } else if(appState.userSelectedItem === rock) {
                    appState.points.computer++;
                    computerPoints.innerHTML = appState.points.computer;
                   getRoundWinner('Computer won this round...');
                } else {
                    appState.points.user++;
                    userPoints.innerHTML = appState.points.user;
                   getRoundWinner('You won this round...');
                }
                break;
            case 1:
                appState.computerSelectedItem = rock;
                computerElements.rockElement.classList.add('item-visible')

                if(appState.userSelectedItem === rock) {
                    getRoundWinner('No one won this round...');
                } else if(appState.userSelectedItem === paper) {
                    appState.points.user++;
                    userPoints.innerHTML = appState.points.user;
                   getRoundWinner('You won this round...');
                } else {
                    appState.points.computer++;
                    computerPoints.innerHTML = appState.points.computer;
                   getRoundWinner('Computer won this round...');
                }
                break;
            default:
                appState.computerSelectedItem = scissors;
                computerElements.scissorsElement.classList.add('item-visible');

                if(appState.userSelectedItem === scissors) {
                    getRoundWinner('No one won this round...');
                } else if(appState.userSelectedItem === rock) {
                    appState.points.user++;
                    userPoints.innerHTML = appState.points.user;
                   getRoundWinner('You won this round...');
                } else {
                    appState.points.computer++;
                    computerPoints.innerHTML = appState.points.computer;
                   getRoundWinner('Computer won this round...');
                }
        }
        
    }, 1500);
}

function showNextRoundStatement(msg) {
    roundModal.modal.classList.remove('invisible');
    roundModal.msg.innerHTML = msg;
}

function getRoundWinner(msg) { 
    setTimeout(() => {
        showNextRoundStatement(msg);
        nextRound();
    }, 2000);
}

roundModal.btn.addEventListener('click', () => {
    roundModal.modal.classList.add('invisible');
})

function switchBooleanValue() {
    const btnsToClick = [
        playerElements.paperBtn,
        playerElements.rockBtn,
        playerElements.scissorsBtn,

        submitPlayerSelectionBtn
    ]

    btnsToClick.forEach(function(btnToClick) {
        btnToClick.disabled = !btnToClick.disabled;
    });
}

function nextRound() {
        appState.round++;
        round.innerHTML = appState.round

        clearSelections();
        hideElements();

        switchBooleanValue();
        
        if(appState.points.computer === 3 || appState.points.user === 3) {
            endGameModal.modal.classList.remove('invisible');
            getWonMsg(getWinner());
            endGameModal.playAgain.addEventListener('click', () => {
                clearAppStateWithoutName();
                endGameModal.modal.classList.add('invisible');
                roundModal.modal.classList.add('invisible');
                modal.classList.remove('invisisble');
                
            });
            endGameModal.playAgainSwitchName.addEventListener('click', () => {
                location.reload();
            });
            endGameModal.closeGame.addEventListener('click', () => {
                window.close(); 
            });
        }
}

function getWonMsg(msg) {
    endGameModal.modal.classList.remove('invisible');
    endGameModal.msg.innerHTML = msg;
}

function getWinner() {
        if(appState.points.computer === 3) {
            return 'This time computer has won. Would you like to play again?';
        } else {
            return 'You`ve won! Congratulations! Would you like to play again?';
        }
}

function clearSelections() {
    appState.userSelectedItem = null;
    appState.computerSelectedItem = null;
}

function clearAppState() {
    appState.computerSelectedItem = '';
    appState.points = {
        user: 0,
        computer: 0
    };
    appState.round = 1;
    appState.userName = '';
    appState.userSelectedItem = '';
}

function clearAppStateWithoutName() {
    appState.computerSelectedItem = '';
    appState.points = {
        user: 0,
        computer: 0
    };
    appState.round = 1;
    appState.userSelectedItem = '';

    computerPoints.innerHTML = appState.points.computer;
    userPoints.innerHTML = appState.points.user;
    round.innerHTML = appState.round
}

function hideElements() {
    submitPlayerSelectionBtn.classList.remove('show-button');

    playerChosenElements.rockElement.classList.remove('item-visible');
    playerChosenElements.scissorsElement.classList.remove('item-visible');
    playerChosenElements.paperElement.classList.remove('item-visible');

    computerElements.paperElement.classList.remove('item-visible');
    computerElements.rockElement.classList.remove('item-visible');
    computerElements.scissorsElement.classList.remove('item-visible');
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
