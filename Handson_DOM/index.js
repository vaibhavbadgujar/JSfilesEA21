
/* Q1 */
let text = document.getElementById("text");

let newtext = "THANKS FOR SUBMIT  ";

function CALLMES() {
  console.log(text.innerHTML);
  console.log(text.innerText);
  text.innerText = newtext;
}
document.getElementById("te").innerText = "Hello!!"



/* Q2 */

let p = document.getElementsByTagName("h1");

function CALLME() {

  console.log(p);
  console.log(p[2].innerText);
  console.log(p[3].innerText);
  console.log(p[4].innerText);
  console.log(p[5].innerText);
  console.log(p[6].innerText);
  p[2].innerText = "😃"
  p[3].innerText = "💐🌷🌹"
  p[4].innerText = "💃🏼"
  p[5].innerText = "🔥"
  p[6].innerText = "⚽"


}


/* Q3 */

const collection = document.getElementsByClassName("example color");

collection[0].style.backgroundColor = "red";


/* Q4 */


const heading = document.getElementById("myHeading");
heading.textContent = "Hello World";

function myFunction() {
  let coor = "Hello World!";
  document.getElementById("demo").innerHTML = coor;
}
function clearCoor() {
  let coor = "Hii Hello";
  document.getElementById("demo").innerHTML = coor;
}

/* Q5 */

let contant = document.getElementById("CON");

let newcontant = "Welcome to Elevation academy";

function REPLACE() {
  console.log(contant.innerHTML);
  console.log(contant.innerText);
  contant.innerText = newcontant;
}

/* Q7 */

/*
const button = document.getElementById("changeFlexDirection");
const container = document.querySelector(".container");

button.addEventListener("click", function () {
  container.style.flexDirection = "column";
  
});  
   

let container = document.querySelector('.container');
let count = true;
function  changeFlexDirection(){
  if(count){
    container.style.display = 'block';
  count = false ;
}
else{
  container.style.display = 'flex';
  count = true;
}
}
  */  
function changeFlexDirection() {
  var container = document.querySelector('.container');
  if (container.style.flexDirection === 'row') {
    container.style.flexDirection = 'column';
  } else {
    container.style.flexDirection = 'row';
  }
}

/* Q9 */

function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  var time = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  document.getElementById('clock').innerHTML = time;
  setTimeout(updateClock, 1000);
}
updateClock();