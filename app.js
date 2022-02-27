//Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//UI
const game = document.querySelector('#game')
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Event Listener
guess.Btn.addEventListener('click', function(){
  let guess = parseInt('guessInput.value');

//Validate
  if(guess === Nan || guess === < min || guess > max){

  }

});

