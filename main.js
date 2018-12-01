// Creating random numbers for quiz ****************************************************
/*used Math.random to create a random number from 0 < 1, multimplied it then by 10 to get numbers between 0 < 10 and then added 1 to get numbers from 1 =< 10. Used Math.floor to round down any decimal number*/

var num1 = Math.floor(Math.random() * 10 + 1);
var num2 = Math.floor(Math.random() * 10 + 1);
document.getElementById("question").innerHTML += num1 + " + " + num2 + " =<br>";


// Function to check correct answer ****************************************************
function checkAnswer() {
  var x = document.getElementById("form1");
  var y = x.elements["name"].value;
  if (y == num1 + num2) {
    document.getElementById("demo").innerHTML = "Well done! your answer is right."
  } else {
    document.getElementById("demo").innerHTML = "Damn! your answer is wrong."
  }
}

// need to generate Math operator 
// need a countdown 
// need to hava an object corresponding to right or wrong answer
//// maths question should refresh 
//  for (var i = 0; i < 10; i++) {} each level should be get harder. the higher the level the more questions also harder question. 
// 
