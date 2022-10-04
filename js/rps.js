
let userScoreSpan = document.getElementById('userScoreSpan');
let compScoreSpan = document.getElementById('compScoreSpan');
let btn = document.getElementsByClassName('btn');
let result = document.getElementById('textWinner');
let choices = ['rock', 'paper', 'scissors'];
 
let userScore = 0;
let compScore = 0;
                
const getChoice = () => {
  return choices[Math.floor(Math.random() * 3)];
}

// Change the HTML displayed score to the current program score
const updateScore = () => {
  userScoreSpan.innerHTML = userScore;
  compScoreSpan.innerHTML = compScore;
}

const game = (userChoice) => {
   // get a random CPU choice from choices[]
    let compChoice = getChoice();
    // Every state of the game in if statements
    if (userChoice === 'rock' && compChoice === 'scissors') {
      userScore++;
      updateScore();
      return "User wins! CPU loses...";
    } 
    else if (userChoice === 'paper' && compChoice === 'rock') {
      userScore++;
      updateScore();
      return 'User wins! CPU loses...';
    }
    else if (userChoice === 'scissors' && compChoice === 'paper') {
      userScore++;
      updateScore();
      return 'User wins! CPU loses...';
    } 
   //if statements for when computer wins 
   else if (compChoice === 'rock' && userChoice === 'scissors') {
      compScore++;
      updateScore();
      return 'CPU wins! scissors cant beat rock...';
   }
   else if (compChoice === 'paper' && userChoice === 'rock') {
      compScore++;
      updateScore();
      return 'CPU wins! rock cant beat paper...';
   }
    else if (compChoice === 'scissors' && userChoice === 'paper') {
      compScore++;
      updateScore();
      return 'CPU wins! paper cant beat scissors...';
    }
    //if statements when cpu and user draw
    else { return 'its a DRAW!'; }
   
}

const displayGame = () => {
//rock
  btn[0].addEventListener('click', () => {
    result.innerText = 'User wins... ' + game('rock');
  });
//paper
  btn[1].addEventListener('click', () => {
    result.innerText = game('paper');
  });
  //scissors
  btn[2].addEventListener('click', () => {
    result.innerText = game('scissors');
  });

}
