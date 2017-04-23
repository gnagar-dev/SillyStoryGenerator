var customName = document.querySelector('#customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
var insertx = ['Willy the Goblin','Big Daddy','Father Christmas'];
var inserty = ['the soup kitchen','Disneyland','the White House'];
var insertz = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

function result() {

 var newStory = storyText;
 var xItem = randomValueFromArray(insertx);
 var yItem = randomValueFromArray(inserty);
 var zItem = randomValueFromArray(insertz);

newStory = newStory.replace(':insertx:', xItem);
newStory = newStory.replace(':insertx:', xItem);
newStory = newStory.replace(':inserty:', yItem);
newStory = newStory.replace(':insertz:', zItem);

  if(customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300*0.0714286) + ' stone'; 
    var temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 farenheit',temperature); 
    newStory = newStory.replace('300 pounds',weight);  
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);