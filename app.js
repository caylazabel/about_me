'use sctrict';

var response1 = prompt('Does Cayla have any cats?').toLowerCase();

if (response1 === 'yes' || response1 === 'y') {
  alert('Yes, Cayla does have a cat!');
} else if (response1 === 'no' || response1 === 'n') {
  alert('Sorry, you\'re wrong, Cayla does have a cat');
} else {
  alert('Try to answer with a yes or no answer next time');
}
console.log('The user said ' + response1 + ' to having cats');

var response2 = prompt('Do you like to code?').toLowerCase();

if(response2 === 'yes' || response2 === 'y'){
  alert('Whoo! You love to code!');
} else if (response2 === 'no' || response2 === 'n') {
  alert('I\'m sorry! That\'s unfortunate! You should check it out!');
} else {
  alert('Try to answer with a yes or no answer next time!');
}
console.log('The user said ' + response2 + ' when asked if they liked to code');

var response3 = prompt('Have you ever lived anywhere outside of Washington?').toLowerCase();

if(response3 === 'yes' || response3 === 'y'){
  alert('Awesome! I\'m jealous!');
} else if (response3 === 'no' || response3 === 'n'){
  alert('Bummer! I hope you get the chance one day!');
} else {
  alert('Try to answer with a yes or no answer next time!');
}
console.log('The user responded ' + response3 + ' when they were asked if they have ever lived outside of Washington');

var response4 = prompt('Do you drink more than 4 cups of coffee during class?').toLowerCase();

if(response4 === 'yes' || response4 === 'y'){
  alert('ME TOO and I regret it everytime');
} else if (response4 === 'no' || response4 === 'n'){
  alert('That\'s good though! I should be more like you!');
} else {
  alert('Try to answer with a yes or no answer next time!')
}
console.log('The user responded ' + response4 + ' when asked if they drink more than 4 cups of coffee during class');

var response5 = prompt('Did you like this guessing game?').toLowerCase();

if(response5 === 'yes' || response5 === 'y'){
  alert('Good, me too me too!');
} else if (response5 === 'no' || response5 === 'n'){
  alert('Awe, you\'re no fun then.');
} else {
  alert('Try to answer with a yes or no answer next time!')
}
console.log('The user answered ' + response5 + ' to if they liked this guessing game');
