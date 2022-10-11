// displays scores
let userScoreSpan = document.getElementById('userScoreSpan');
let compScoreSpan = document.getElementById('compScoreSpan');

// displays chosen type
let userChoiceSpan = document.getElementById('user-choice');
let compChoiceSpan = document.getElementById('comp-choice');
let result = document.getElementById('textWinner');
let btn = document.getElementsByClassName('btn');
// 3 choices for comp. to loop through
let choices = ['rock', 'paper', 'scissors'];
 
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
  result.innerText = c2 + ' beats ' + c1;
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
      console.log('User choice is: ' + userChoice + ", Computers choice is: " + compChoice);
      userScore++;
      userWin();
      updateTextWin(userChoice, compChoice);
      return "User wins! CPU loses...";
    } 
    else if (userChoice === 'paper' && compChoice === 'rock') {
      console.log('User choice is: ' + userChoice + ", Computers choice is: " + compChoice);
      userScore++;
      userWin();
      updateTextWin(userChoice, compChoice);
      return 'User wins! CPU loses...';
    }
    else if (userChoice === 'scissors' && compChoice === 'paper') {
      console.log('User choice is: ' + userChoice + ", Computers choice is: " + compChoice);
      userScore++;
      userWin();
      updateTextWin(userChoice, compChoice);
      return 'User wins! CPU loses...';
    } 
   //if statements for when computer wins 
   else if (compChoice === 'rock' && userChoice === 'scissors') {
      console.log('Computers choice is: ' + compChoice  + ', User choice is: ' + userChoice);
      compScore++;
      compWin();
      updateTextLose(userChoice, compChoice);
      return 'CPU wins! scissors cant beat rock...';
   }
   else if (compChoice === 'paper' && userChoice === 'rock') {
      console.log('Computers choice is: ' + compChoice + ', User choice is: ' + userChoice);
      compScore++
      compWin();
      updateTextLose(userChoice, compChoice);
      return 'CPU wins! rock cant beat paper...';
   }
    else if (compChoice === 'scissors' && userChoice === 'paper') {
      console.log('Computers choice is: ' + compChoice + ', User choice is: ' + userChoice);
      compScore++;
      compWin();
      updateTextLose(userChoice, compChoice);
      return 'CPU wins! paper cant beat scissors...';
    }
    //else statement when cpu and user draw
    else { 
      console.log(userChoice + ' === ' + compChoice);
      updateIfDraw(userChoice, compChoice);
      return 'its a DRAW!'; 
      
    }
   
}

const userWin = () => {
  userScoreSpan.innerHTML = userScore;
  resultText = 'User wins';
  result.innerHTML = resultText;
}

const compWin = () => {
  compScoreSpan.innerHTML = compScore;
  resultText = 'Computer wins';
  result.innerHTML = resultText;
}
