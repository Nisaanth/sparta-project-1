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
var correctAnswer = 0;

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
}

// created a function to randomise qustions. 
function makeQuestion() {
  var num1 = randomNumber();
  var num2 = randomNumber();
  var operatorString = randomOperator(Math.floor(Math.random() * 2))
  // creating a statement to randomise operator
  if (operatorString === "+") {
    correctAnswer = num1 + num2;
  } else if (operatorString === "-") {
    correctAnswer = num1 - num2;
  } else if (operatorString === "x") {
    correctAnswer = num1 * num2;
  }
  // Every single time you answer the question, new question should refresh
  document.getElementById('question').innerHTML = " ";
  // question should appear on question box with randomised numbers and operator
  document.getElementById('question').append(`${num1} ${operatorString} ${num2}`);
}
// *************************************************************
var pointsDisplay = document.getElementById("points")
// **************************************************************

//Function to check correct answer and respond
function checkAnswer() {
  // checks the iput against the correct answer
  var answer = document.getElementById('answer').value;
  if (answer == correctAnswer) {
    points++;
    moveCar()
    pointsDisplay.innerHTML = points;
    return 'Well done! your answer is right. Keep Moving!';
  } else if (answer !== correctAnswer) {
    points--;
    moveCar();
    pointsDisplay.innerHTML = points;
    return 'Damn! your answer is wrong.';
  }
}
function appendResult(results) {
  // refreshes response 
  document.getElementById('result').innerHTML = '';
  // prints out the response 
  document.getElementById('result').append(results);
}

document.getElementById('checkAnswer').onkeypress = function (e) {
  if (e.keyCode == 13) {
    document.getElementById('linkadd').click();
  }
}

// event listener for key press - enter

// after clicking the button, the question box resets with a new question, empty input as well as giving a response for the current answer. 
document.getElementById('checkAnswer').addEventListener('click', function resetWhenClicked() {
  // This will first call check answer which will return either correct or incorrect, and then append result will be invoked with either correct or incorrect.
  appendResult(checkAnswer());
  resetInput();
  makeQuestion();

})

// Move car
function moveCar() {
  let car = document.getElementById("carImg")
  switch (points) {
    case 1:
      car.style.paddingLeft = "30px";
      break;
    case 2:
      car.style.paddingLeft = "60px"
      break;
    case 3:
      car.style.paddingLeft = "90px"
      break;
    case 4:
      car.style.paddingLeft = "120px"
      break;
    case 5:
      car.style.paddingLeft = "150px"
      break;
    case 6:
      car.style.paddingLeft = "180px"
      break;
    case 7:
      car.style.paddingLeft = "210px"
      break;
    case 8:
      car.style.paddingLeft = "240px"
      break;
    case 9:
      car.style.paddingLeft = "270px"
      break;
    case 10:
      car.style.paddingLeft = "300px"
      break;
    case 11:
      car.style.paddingLeft = "330px"
      break;
    case 12:
      car.style.paddingLeft = "360px"
      break;
    case 13:
      car.style.paddingLeft = "390px"
      break;
    case 14:
      car.style.paddingLeft = "420px"
      break;
    case 15:
      car.style.paddingLeft = "450px"
      break;
    case 16:
      car.style.paddingLeft = "480px"
      break;
    case 17:
      car.style.paddingLeft = "510px"
      break;
    case 18:
      car.style.paddingLeft = "540px"
      break;
    case 19:
      car.style.paddingLeft = "570px"
      break;
    case 20:
      car.style.paddingLeft = "600px"
      break;
    case 21:
      car.style.paddingLeft = "630px"
      break;
    case 22:
      car.style.paddingLeft = "660px"
      break;
    case 23:
      car.style.paddingLeft = "690px"
      break;
    case 24:
      car.style.paddingLeft = "720px"
      break;
    case 25:
      car.style.paddingLeft = "750px"
      break;
  }
}

// When calling this function, you produce the randomised numbers,operator, and set the correct answer as well as append it to the question div
makeQuestion();

// ********************************************************** countdown timer ********************************************************

var timer = 60;
function countDown() {
  setInterval(function () {
    if (timer > 0) { timer--; }
    document.getElementById("timer").innerHTML = timer
    if (timer === 0) {
      document.getElementById('timeout').innerHTML = " Time Over ";
      // *********************************************************
      document.getElementById('gametitle').style.display = 'none';
      // *********************************************************
    }
  }, 1000)
}

countDown()

// car bit - till the middle of the day - change css value of the car to make it move


// styling - start page/instructions

