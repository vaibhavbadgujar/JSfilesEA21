
/*
var a = document.getElementById("heading")
console.log(a)
a.innerHTML="CSS"
a.style.color="red"
var d = a.getAttribute("id")
console.log(a.getAttribute("id"))
a.setAttribute("id", "newheading")
console.log(d)
console.log(a.nodeName)
var b = document.getElementsByClassName("box")
console.log(b)

b[1].innerHTML ="this is inner HTML"
b[1].style.color="blue"
console.log(b[2].nodeName, "tagname")
//b[2].innerHTML =" node name "


var c = document.getElementsByClassName("box")
console.log(c)

c[0].innerHTML="this was change using class name "


var body = document.getElementsByTagNameNS("body")
var newelement= document.createElement("h1")
body[0].appendChild(newelement)
//// age 

let age=18
if(ahe>18)
{
newelement.innerHTML="yes"
}
else{
    newelement.innerHTML="no"
}*/

let text=document.getElementById("text");
function callMe(){
    console.log(text.innerText);
}

let vaibhav=document.getElementsByTagName("h1");
function callMe(){
    console.log(vaibhav[0].innerText);
}


let ki=document.getElementsByClassName("box");
function callMe(){
    console.log(ki[0].innerText);
}

let tag = document.getElementsByTagName('h1')
function callme(){
    console.log(tag[0].innerHTML)
    tag[0].innerText = "Hello word"
}


let head = document.getElementsByClassName("head")
function replace(){
head[0].innerText = "Welcome To Elevation Academy";
console.log(head)
}