// // need a countdown 

// append to the top div 
// capture the answer of the random problem
// event listener on the button
//  compare the value of the input with the captured answer
// with the captured answer from 
// line 3
// if they are euqal, append
// correct to answer div
// else, append incorrect

//clear the input 
//make, append and capture a new random problem
//random problem

// creating a variable for the correct answe to hold 
var correctAnswer;

// funtion to reset the input value 
function resetInput() {
  document.getElementById("answer").value = '';
}
resetInput();

// Creating random numbers for quiz ****************************************************
// /*used Math.random to create a random number from 0 < 1, multimplied it then by 10 to get numbers between 0 < 10 and then added 1 to get numbers from 1 <= 10. Used Math.floor to round down any decimal number*/
function randomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}
// created a function to randomise qustions. 
function makeQuestion() {
  var num1 = randomNumber();
  var num2 = randomNumber();
  // statement 
  var operatorString = randomOperator();
  if (operatorString === "+") {
    correctAnswer = num1 + num2;
  } else if (operatorString === "-") {
    correctAnswer = num1 - num2;
  } else if (operatorString === "*") {
    correctAnswer = num1 * num2;
  } else if (operatorString === "/") {
    correctAnswer = num1 / num2;
  }

  document.getElementById('question').innerText = "";
  document.getElementById('question').append(`${num1} ${operatorString} ${num2}`);
}
//Function to check correct answer and response 
function checkAnswer() {
  var answer = document.getElementById('answer').value
  console.log(answer);
  if (answer == correctAnswer) {
    return 'Well done! your answer is right.';
  } else {
    return 'Damn! your answer is wrong.';
  }
}
// function to randomise operator
function randomOperator() {
  if (Math.random() >= 0 && Math.random() <= 0.25) {
    return "+";
  } else if (Math.random() > 0.25 && Math.random() <= 0.5) {
    return "-";
  } else if (Math.random() > 0.5 && Math.random() <= 0.75) {
    return "/";
  }
  else if (Math.random() > 0.75 && Math.random() < 1) {
    return "*";
  }
}


function appendResult(result) {
  document.getElementById('result').innerText = '';
  document.getElementById('result').append(result);
}

document.getElementById('checkAnswer').addEventListener('click', function resetForClick() {
  appendResult(checkAnswer());
  resetInput();
  makeQuestion();
})

makeQuestion();



// ********************************************************** countdown stack overflow ********************************************
var count = 60, timer = setInterval(function () {
  $("#counter").html(count--);
  if (count == 1) clearInterval(timer);
}, 1000);


