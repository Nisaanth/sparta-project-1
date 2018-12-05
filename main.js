// ***********************************psuedo code*****************************************
// produce random 2 digit math problem
// append that to the top div
// capture the answer of the random problem
// event listener on the button
//  compare the value of the input with the captured answer
// if they are euqal, append
// correct to result div
// else, append incorrect

// clear the input 
// make, append and capture a new random problem
// *************************************psuedo code **************************************

// creating a variable for the correct answer to hold 
var correctAnswer;

// need to add points as global variable;

let points = 0;


// funtion to clear the input value 
function resetInput() {
  document.getElementById("answer").value = '';
}


// Creating random numbers for quiz 
// /*used Math.random to create a random number from 0 < 1, multimplied it then by 10 to get numbers between 0 < 10 and then added 1 to get numbers from 1 <= 10. Used Math.floor to round down any decimal number*/
function randomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

// function to randomise operator
function randomOperator(operator) {
  if (operator == 0) {
    return "+";
  } else if (operator == 1) {
    return "-";
  } else if (operator == 2) {
    return "/";
  }
  else if (operator == 3) {
    return "x";
  }
}

// created a function to randomise qustions. 
function makeQuestion() {
  var num1 = randomNumber();
  var num2 = randomNumber();
  var operatorString = randomOperator(Math.floor(Math.random() * 3))


  // creating a statement to randomise operator
  if (operatorString === "+") {
    correctAnswer = num1 + num2;
  } else if (operatorString === "-") {
    correctAnswer = num1 - num2;
  } else if (operatorString === "x") {
    correctAnswer = num1 * num2;
  } else if (operatorString == "/") {
    correctAnswer = num1 / num2;
  }
  // Every single time you answer the question, new question should refresh
  document.getElementById('question').innerHTML = " ";
  // question should appear on question box with randomised numbers and operator
  document.getElementById('question').append(`${num1} ${operatorString} ${num2}`);
}
// *************************************************************
const pointsDisplay = document.querySelector("#points")
// **************************************************************

//Function to check correct answer and respond
function checkAnswer() {
  // checks the iput against the correct answer
  var answer = document.getElementById('answer').value;
  if (answer == correctAnswer) {
    points++;
    pointsDisplay.innerHTML = points;
    return 'Well done! your answer is right. Keep Moving!';
  } else {
    points--;
    pointsDisplay.innerHTML = points;
    return 'Damn! your answer is wrong.';
  }
}
function appendResult(result) {
  // refreshes response 
  document.getElementById('result').innerHTML = '';
  // prints out the response 
  document.getElementById('result').append(result);
}

// after clicking the button, the question box resets with a new question, empty input as well as giving a response for the current answer. 
document.getElementById('checkAnswer').addEventListener('click', function resetWhenClicked() {
  // This will first call check answer which will return either correct or incorrect, and then append result will be invoked with either correct or incorrect.
  appendResult(checkAnswer());
  resetInput();
  makeQuestion();
})

// When calling this function, you produce the randomised numbers,operator, and set the correct answer as well as append it to the question div
makeQuestion();







// ********************************************************** countdown timer ********************************************************

var timer = 60;
var min = 0;
var sec = 0;
// function startTimer() {
//   min = parseInt(timer / 60);
//   sec = parseInt(timer % 60);
//   if (timer < 1) {
//     window.location = "timeOver.html";
//   }
//   document.getElementById("time").innerHTML = "<b>Time Left: </b>" + min.toString() + ":" + sec.toString(); timer--; setTimeout(function () {
//     startTimer();
//   }, 1000);
// }

function countDown() {
  setInterval(function () {
    timer--;
    document.getElementById("timer").innerHTML = timer
    if (timer === 0) {
      alert("Time out!")



    }
  }, 1000)
}

countDown()



