//challenge1: calculate your age in number of days

function ageInDays() {
var birthYear = prompt('What year were you born?');
var ageInDays1 = (2021 - birthYear) * 365;

var h1 = document.createElement('h1');
var textAnswer= document.createTextNode('You are ' + ageInDays1+ ' days old.');

h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);

}

function reset (){
document.getElementById('ageInDays').remove();

}
