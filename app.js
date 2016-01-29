var ANSWER;

function startNewGame() {
  ANSWER = createRnd();
}

function challenge() {

  var input = window.inputBox.value;
  var hitCount  = checkHit(input, ANSWER);
  var blowCount = checkBlow(input, ANSWER);

  window.inputBox.value ="";
  window.output.value += printMessage(hitCount, blowCount, input, ANSWER);

  if(input == ANSWER) {
    startNewGame();
  }
}

function createRnd() {

  var baseArray = new Array(10);

  for (var i = 0; i < baseArray.length; i++) {
    baseArray[i] = i;
  }

  var rndArray = new Array(4);

  for (var i = 0; i < rndArray.length; i++) {
    var a = Math.floor(Math.random() * (10-i));
    rndArray[i] = baseArray[a];
    baseArray.splice(a, 1);
  }

  var ans = "";

  for (var i = 0; i < rndArray.length; i++) {
    ans = ans + rndArray[i];
  }

  return ans;
}

function checkHit(input, ans) {

  var hitCount = 0;

  for (var i = 0; i < ans.length; i++) {

    var a = input.charAt(i);
    var b = ans.charAt(i);

    if (a == b) {
      hitCount++;
    }
  }

  return hitCount;			
}

function checkBlow(input, ans) {

  var blowCount = 0;

  for (var i = 0; i < ans.length; i++) {

    var a = input.charAt(i);
    var ansExcepted = ans.replace(ans.charAt(i), "");

    for (var j = 0; j < (ans.length - 1); j++) {

      var b = ansExcepted.charAt(j);

      if (a == b) {
        blowCount++;
      }
    }
  }

  return blowCount;
}

function printMessage(hitCount, blowCount, input, ans) {

  var message = "";

  if (hitCount == ans.length) {

    message = "Great!"+"\n"+"Enjoy next game!"+"\n";

  } else {
    message = "Your answer:" + input + "\n" + hitCount + "Hit," + blowCount + "blow." + "\n";				
  }

  return message;
}

function giveUp() {
  window.output.value += "Answer is " + ANSWER + ".\n" + "Enjoy next game." + "\n";
  startNewGame();
}
