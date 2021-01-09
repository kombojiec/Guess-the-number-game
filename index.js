
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
const error = document.querySelector('.error');
const body = document.querySelector('.body');
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
    inputNumber.focus();
    // console.log(number);
})

quizForm.addEventListener('submit', (event) => {
    event.preventDefault();
    error.textContent = '';
    leftMessage.textContent = '';
    rightMessage.textContent = ''; 
    let result = inputNumber.value;
    ++counter;
    if(isNaN(+result)  || result < 0 || result > 100){
        error.textContent = `Некорректное значение. 
        Введи число от 0 до 100`;
        --counter;
    }else if(result < number){
        leftMessage.textContent = `Маловато, попробуй больше`
    }else if(result > number){
        rightMessage.textContent = `Многовато, попробуй меньше`
    }else if(result == number){
        congratulationText.textContent = `Молодец!!! Ты угадал(а)
         с ${counter}-го раза!!! Загаданное число  было ${number}.`
         inputNumber.blur();
        congratulationModal.classList.add('visible');        
    }
    quizForm.reset();
})

congratulationModal.addEventListener('click', event => {
        congratulationModal.classList.remove('visible');
        quiz.classList.remove('visible');
})
