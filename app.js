// const appState = {
//     userName,
//     userSelectedItem,
//     computerSelectedItem,
//     round,
//     points: [user, computer]
// };

const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');

const choosenPaper = document.getElementById('choosen-paper');
const choosenRock = document.getElementById('choosen-rock');
const choosenScissors = document.getElementById('choosen-scissors');

paper.addEventListener('click', () => {
    choosenRock.classList.remove('item-visible');
    choosenScissors.classList.remove('item-visible');
    choosenPaper.classList.add('item-visible');
})

rock.addEventListener('click', () => {
    choosenPaper.classList.remove('item-visible');
    choosenScissors.classList.remove('item-visible');
    choosenRock.classList.add('item-visible');
})

scissors.addEventListener('click', () => {
    choosenPaper.classList.remove('item-visible');
    choosenRock.classList.remove('item-visible');
    choosenScissors.classList.add('item-visible');
})
