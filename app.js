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


// Modal getting elements
const modal = document.getElementById('modal');
const submitNameBtn = document.getElementById('submit-name-btn');
const inputName = document.getElementById('first-user-name');

// game getting elements
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
    appState.userName = inputName.value;
    givenName.innerHTML = appState.userName;

    modal.classList.add('invisible');
})

// After modal
function showButton() {
    submitButton.classList.add('show-button');
}

function startPlaying() {
    // Computer's turn
    console.log(appState);
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
