'use sctrict';

var response1 = prompt('Does Cayla have any cats?').toLowerCase();

if (response1 === 'yes' || response1 === 'y') {
  alert('Yes, Cayla does have a cat!');
} else if (response1 === 'no' || response1 === 'n') {
  alert('Sorry, you\'re wrong, Cayla does have a cat');
} else {
  alert('Try to answer with a yes or no answer next time');
}
