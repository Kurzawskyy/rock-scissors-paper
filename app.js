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
const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');

const choosenPaper = document.getElementById('choosen-paper');
const choosenRock = document.getElementById('choosen-rock');
const choosenScissors = document.getElementById('choosen-scissors');

const submitButton = document.getElementById('submit-button');

const givenName = document.getElementById('user-name');


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
    
}

paper.addEventListener('click', () => {
    appState.userSelectedItem = 'Paper';

    choosenRock.classList.remove('item-visible');
    choosenScissors.classList.remove('item-visible');
    choosenPaper.classList.add('item-visible');

    showButton();
})

rock.addEventListener('click', () => {
    appState.userSelectedItem = 'Rock';

    choosenPaper.classList.remove('item-visible');
    choosenScissors.classList.remove('item-visible');
    choosenRock.classList.add('item-visible');

    showButton();
})

scissors.addEventListener('click', () => {
    appState.userSelectedItem = 'Scissors';

    choosenPaper.classList.remove('item-visible');
    choosenRock.classList.remove('item-visible');
    choosenScissors.classList.add('item-visible');

    showButton();
})
