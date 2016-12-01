'use strict';
var userName = prompt('What is your name?');

var numOfCorrectAnswers = 0;
alert('This is all about Cayla!!');
alert('We\'re going to have a series of yes/no questions, so please answer "yes" or "no" or "y" or "n"')

var response1 = prompt('Does Cayla have any cats?').toLowerCase();

if (response1 === 'yes' || response1 === 'y') {
  alert('Yes, Cayla does have a cat!');
  numOfCorrectAnswers ++;
} else if (response1 === 'no' || response1 === 'n') {
  alert('Sorry, you\'re wrong, Cayla does have a cat');
} else {
  alert('Try to answer with a yes or no answer next time');
}
console.log('The user said ' + response1 + ' to having cats');

var response2 = prompt('Does Cayla like to code?').toLowerCase();

if(response2 === 'yes' || response2 === 'y'){
  alert('Whoo! Yes! She loves to code!');
  numOfCorrectAnswers++;
} else if (response2 === 'no' || response2 === 'n') {
  alert('I\'m sorry! That\'s unfortunately wrong!');
} else {
  alert('Try to answer with a yes or no answer next time!');
}
console.log('The user said ' + response2 + ' when asked if they liked to code');

var response3 = prompt('Has Cayla ever lived anywhere outside of Washington?').toLowerCase();

if(response3 === 'yes' || response3 === 'y'){
  alert('Yes! She has!');
  numOfCorrectAnswers++;
} else if (response3 === 'no' || response3 === 'n'){
  alert('Bummer! That is wrong, she has actually!');
} else {
  alert('Try to answer with a yes or no answer next time!');
}
console.log('The user responded ' + response3 + ' when they were asked if they have ever lived outside of Washington');

var response4 = prompt('Does Cayla drink more than 4 cups of coffee during class?').toLowerCase();

if(response4 === 'yes' || response4 === 'y'){
  alert('Bingo! She sure does');
  numOfCorrectAnswers++;
} else if (response4 === 'no' || response4 === 'n'){
  alert('Wrong! She sure does');
} else {
  alert('Try to answer with a yes or no answer next time!')
}
console.log('The user responded ' + response4 + ' when asked if they drink more than 4 cups of coffee during class');

var response5 = prompt('Did you like this guessing game?').toLowerCase();

if(response5 === 'yes' || response5 === 'y'){
  alert('Good, me too me too!');
  numOfCorrectAnswers++;
} else if (response5 === 'no' || response5 === 'n'){
  alert('Awe, you\'re no fun then.');
} else {
  alert('Try to answer with a yes or no answer next time!')
}
console.log('The user answered ' + response5 + ' to if they liked this guessing game');


//question six
var age = 23;

for (var i = 0; i < 4; i++) {
  var yourGuess = parseInt(prompt('How old is Cayla?'));

  if(yourGuess === age){
    alert('You guessed it right! Cayla is ' + age + '!!');
    numOfCorrectAnswers++;
    break;
  } else if (yourGuess < 23) {
    alert('You guessed to low!')
  } else if (yourGuess > 23) {
    alert('You guessed too high!')
  }
}

// seventh question
var attempts = 0;
var choice = false;


var statesTraveled = ['hawaii', 'new york', 'washington', 'florida', 'new jersey', 'colorado'];
while (attempts < 6){
  var yourResponse = prompt('Guess a state that Cayla has traveled to').toLowerCase();
  for (var j = 0; j < statesTraveled.length; j++) {
    if (statesTraveled[j] === yourResponse){
      alert('Correct! She has traveled there!');
      numOfCorrectAnswers++;
      // choice = false;
      console.log(attempts);
      choice = true;
      break;
    }
  }

  if(choice) {
    break;
  } else {
    alert('Guess again, she has never been there!');
    // attempts++;
    attempts += 1;
  }

}

alert(userName + ', You got ' + numOfCorrectAnswers + ' answers correct out of 7');

if (numOfCorrectAnswers === 7) {
  alert('You know Cayla well, ' + userName);
}
if (numOfCorrectAnswers < 7 && numOfCorrectAnswers >= 3) {
  alert('You sorta know Cayla');
}
if (numOfCorrectAnswers < 3) {
  alert('You definetely do not know Cayla very well!');
}
