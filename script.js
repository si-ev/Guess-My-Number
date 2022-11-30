'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
     document.querySelector('.message').textContent = message;
}

const displaySecretNumber = function(number){
     document.querySelector('.number').textContent = number;
}

const displayScore = function(score){
     document.querySelector('.score').textContent = score;
}

const displayHighscore = function(hightscore){
     document.querySelector('.highscore').textContent = highscore;
}


document.querySelector('.check').addEventListener('click',
     function(){
         const guess = Number(document.querySelector('.guess').value);

         if (!guess) {
               displayMessage('⛔ No number!'); 
         } else if (guess === secretNumber){

               displayMessage('🎉 Correct Number!'); 
               displaySecretNumber(secretNumber);

               document.querySelector('body').style.backgroundColor = '#60b347';
               document.querySelector('.number').style.width = '30rem';

               if (score > highscore) {
                    highscore = score;
               };

               displayHighscore(highscore);

         } else if (guess !== secretNumber) {
               if (score > 1){ 
                       displayMessage(guess > secretNumber ? '📈 Too high!': '📉 Too low!');
                       score--;
                       displayScore(score);
               } else {
                       displayMessage('💥 You lost the game!'); 
                       displayScore(0);
               };
         };
     });

document.querySelector('.again').addEventListener('click',
     function(){
         score = 20;
         secretNumber = Math.trunc(Math.random()*20) + 1;

         displayMessage('Start guessing...');
         displayScore(score);
         displaySecretNumber('?');
         document.querySelector('.guess').value = '';

         document.querySelector('body').style.backgroundColor = '#222';
         document.querySelector('.number').style.width = '15rem';
     }
);
