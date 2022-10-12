// displays scores
let userScoreSpan = document.getElementById('userScoreSpan');
let compScoreSpan = document.getElementById('compScoreSpan');

// displays chosen type
let userChoiceSpan = document.getElementById('user-choice');
let compChoiceSpan = document.getElementById('comp-choice');
let result = document.getElementById('textWinner');
// default string when game starts.. *used when toggling reset button
let initialString = document.getElementById('textWinner').innerHTML;
let btn = document.getElementsByClassName('btn');
// 3 choices for comp. to randomize through
let choices = ['rock', 'paper', 'scissors'];
 //initialize score to 0 
let userScore = 0;
let compScore = 0;
// Random index choosing 1 out of the 3 for computer                
const getChoice = () => {
  return choices[Math.floor(Math.random() * 3)];
}

//updates text when user wins 
const updateTextWin = (c1, c2) => {
  result.innerText = c1 + ' beats ' + c2;
}
//updates text when comp wins 
const updateTextLose = (c1, c2) => {
  result.innerText = c1 + ' loses to ' + c2;
}
//updates text when its a draw -> ===
const updateIfDraw = (c1, c2) => {
  result.innerText = c1 + ' equals '  + c2;
}
//logic of the game 
const game = (userChoice) => {
   // get a random comp choice from choices[]
    let compChoice = getChoice();
    // Every state of the game in if statements
    if (userChoice === 'rock' && compChoice === 'scissors') {
      userScore++;
      userWin();
      updateTextWin(userChoice, compChoice);
      return "User wins! CPU loses...";
    } 
    else if (userChoice === 'paper' && compChoice === 'rock') {
      userScore++;
      userWin();
      updateTextWin(userChoice, compChoice);
      return 'User wins! CPU loses...';
    }
    else if (userChoice === 'scissors' && compChoice === 'paper') {
      userScore++;
      userWin();
      updateTextWin(userChoice, compChoice);
      return 'User wins! CPU loses...';
    } 
   //if statements for when computer wins 
   else if (compChoice === 'rock' && userChoice === 'scissors') {
      compScore++;
      compWin();
      updateTextLose(userChoice, compChoice);
      return 'CPU wins! scissors cant beat rock...';
   }
   else if (compChoice === 'paper' && userChoice === 'rock') {
      compScore++
      compWin();
      updateTextLose(userChoice, compChoice);
      return 'CPU wins! rock cant beat paper...';
   }
    else if (compChoice === 'scissors' && userChoice === 'paper') {
      compScore++;
      compWin();
      updateTextLose(userChoice, compChoice);
      return 'CPU wins! paper cant beat scissors...';
    }
    //else statement when cpu and user draw
    else {
      updateIfDraw(userChoice, compChoice);
      return 'its a DRAW!'; 
      
    }
   
}
// func for when user wins 
const userWin = () => {
  userScoreSpan.innerHTML = userScore;
  resultText = 'User wins';
  result.innerHTML = resultText;
}
//func for when comp wins
const compWin = () => {
  compScoreSpan.innerHTML = compScore;
  resultText = 'Computer wins';
  result.innerHTML = resultText;
}
//func to reset score and text
const resetScore = () => {
  userScore = 0;
  userScoreSpan.innerHTML = userScore;
  compScore = 0;
  compScoreSpan.innerHTML = compScore;
}
//func to use 'onclick' in html button
const resetGame = () => {
  resetScore();
  result.innerHTML = initialString;
}