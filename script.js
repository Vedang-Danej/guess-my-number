'use strict';
// console.log(document.querySelector('.number'));
// document.querySelector('.between').textContent='between whatever';
// document.querySelector('.number').textContent='69';//this functon also returns the vallue of the current text content
// document.querySelector('.guess').value=69;//.value is used for buttons
// console.log(document.querySelector('.score').textContent);

let secretScore=Math.trunc(Math.random()*20)+1;
let displayMessage= function (message) {
    document.querySelector('.message').textContent=message;
}
let score=20;
let highScore=0;
document.querySelector('.highscore').textContent=highScore;
document.querySelector('.check').addEventListener('click',function()
{
    const guess=Number(document.querySelector('.guess').value);//always going to be a string . use number function to convert to string
    if(!guess){//if the check button is clicked without an input in the .guess then the variable guess wll be an empty string which is a fasley value
   document.querySelector('.message').textContent='No Number';
    // console.log(guess, typeof guess)
    }else if(guess!==secretScore){

        if(score>1){
            displayMessage(guess>secretScore?'Too High':'Too Low');
            score--;
            document.querySelector('.score').textContent=score;
        }else {
          score=0;
          document.querySelector('.score').textContent=score;
          displayMessage('You Lost The Game');
        }
    }
    
    else if(guess===secretScore){
        displayMessage('Correct!');
        //the below two commands wont change the css all the styles will be changed inline(inside the markup)
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem'; 
        document.querySelector('.number').textContent=secretScore; 
        if(highScore<score) highScore=score;
        document.querySelector('.highscore').textContent=highScore;
    }
})

document.querySelector('.again').addEventListener('click',function(){
    
    score=20;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    secretScore=Math.trunc(Math.random()*20)+1;

})