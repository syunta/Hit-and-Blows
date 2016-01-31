var ANSWER;

function startNewGame() {
  ANSWER = createAnswer();
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

function challenge() {

  var input = window.inputAnswer.value;
  var hits  = countHits(input, ANSWER);
  var blows = countBlows(input, ANSWER);

  window.inputAnswer.value = "";

  if (input == ANSWER) {
    printLog("Great! Answer is " + ANSWER + ".\nEnjoy next game!\n");
    startNewGame();
  } else {
    printLog("Your answer:" + input + "\n" + hits + "Hit," + blows + "blow.\n");
  }
}

function countHits(experiment, answer) {

  var hits = 0;

  for (var i = 0; i < answer.length; i++) {

    var a = experiment.charAt(i);
    var b = answer.charAt(i);

    if (a == b) {
      hits++;
    }
  }

  return hits;
}

function countBlows(experiment, answer) {

  var blows = 0;

  for (var i = 0; i < answer.length; i++) {

    var a = experiment.charAt(i);

    for (var j = 0; j < answer.length; j++) {

      var b = answer.charAt(j);

      if (a == b) {
        blows++;
      }
    }
  }

  return blows - countHits(experiment, answer);
}

function printLog(message) {
  window.log.value = message + window.log.value;
}

function giveUp() {
  printLog("Answer is " + ANSWER + ".\nEnjoy next game.\n");
  startNewGame();
}
