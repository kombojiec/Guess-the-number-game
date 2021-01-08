
const modal = document.querySelector('.modal');
const modalForm = document.querySelector('.modal__window');
const button = document.querySelector('.modal__button');
const inputName = document.querySelector('.modal__input');
const greeting = document.querySelector('.greeting');
const inputNumber = document.querySelector('.quiz__input');
const quizButton = document.querySelector('.quiz__button');
const quiz = document.querySelector('.quiz');
const leftMessage = document.querySelector('.small');
const rightMessage = document.querySelector('.big');
const congratulationModal = document.querySelector('.modal__congratulation');
const congratulationText = document.querySelector('.congratulation');
const quizForm = document.querySelector('.quiz__input-wrap');
const playButton = document.querySelector('.play__putton');
let number;
let counter;

modalForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    greeting.textContent = `Привет, ${inputName.value}. Отгадай число от 0 до 100`;
    modal.classList.add('hidden');
})

playButton.addEventListener('click', ()=>{
    number = Math.ceil(Math.random() * 101);
    counter = 0;
    quiz.classList.add('visible');
})


quizForm.addEventListener('submit', (event) => {
    event.preventDefault();
    leftMessage.textContent = '';
    rightMessage.textContent = ''; 
    let result = inputNumber.value;
    ++counter;
    if(result < number){
        leftMessage.textContent = `Маловато, попробуй больше`
    }else if(result > number){
        rightMessage.textContent = `Многовато, попробуй меньше`
    }else{
        congratulationText.textContent = `Молодец!!! Ты угадал(а)
         с ${counter}-го раза!!! Загаданное число  было ${number}.`
        congratulationModal.classList.add('visible');
    }
    quizForm.reset();
})

congratulationModal.addEventListener('click', event => {
    if(event.target == event.currentTarget){
        congratulationModal.classList.remove('visible');
        quiz.classList.remove('visible');
    }
})


