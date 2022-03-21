import Button from './button.js';
import Image from './image.js';
import List from './list.js';
import Sound from './sound.js';
// import Sound from './sound.js';

let myDiv = document.querySelector('#myApp');

let myButton = new Button('Click me!');
let myImage = new Image('/img/bg.jpg','Background','300','300');
let myList = new List(['Izuku','Uraraka','Shoto']);
let mySound = new Sound('/sounds/music.mp3', 'audio/mpeg', true);

myDiv.innerHTML += myButton.render();
myDiv.innerHTML += myImage.render();
myDiv.innerHTML += myList.render();
myDiv.innerHTML += mySound.render();