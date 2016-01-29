var ANSWER;

function startNewGame() {
  ANSWER = createAnswer();
}

function challenge() {

  var input = window.inputAnswer.value;
  var hitCount  = checkHit(input, ANSWER);
  var blowCount = checkBlow(input, ANSWER);

  window.inputAnswer.value = "";
  window.log.value += printLog(hitCount, blowCount, input, ANSWER);

  if (input == ANSWER) {
    startNewGame();
  }
}

function createAnswer() {

  var restValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var answer = "";

  for (var i = 0; i < 4; i++) {
    var a = Math.floor(Math.random() * (10 - i));
    answer += restValues[a];
    restValues.splice(a, 1);
  }

  return answer;
}

function checkHit(input, answer) {

  var hitCount = 0;

  for (var i = 0; i < answer.length; i++) {

    var a = input.charAt(i);
    var b = answer.charAt(i);

    if (a == b) {
      hitCount++;
    }
  }

  return hitCount;			
}

function checkBlow(input, answer) {

  var blowCount = 0;

  for (var i = 0; i < answer.length; i++) {

    var a = input.charAt(i);
    var answerExcepted = answer.replace(answer.charAt(i), "");

    for (var j = 0; j < (answer.length - 1); j++) {

      var b = answerExcepted.charAt(j);

      if (a == b) {
        blowCount++;
      }
    }
  }

  return blowCount;
}

function printLog(hitCount, blowCount, input, ans) {

  var message = "";

  if (hitCount == ans.length) {

    message = "Great!" + "\n" + "Enjoy next game!" + "\n";

  } else {
    message = "Your answer:" + input + "\n" + hitCount + "Hit," + blowCount + "blow." + "\n";				
  }

  return message;
}

function giveUp() {
  window.log.value += "Answer is " + ANSWER + ".\n" + "Enjoy next game." + "\n";
  startNewGame();
}
