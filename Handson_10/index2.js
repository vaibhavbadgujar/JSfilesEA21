let randomNumber = Math.floor(Math.random() * 100);
// console.log(randomNumber)
let input= document.querySelector("#input")
let btn=document.getElementById("btn")
let guess=document.getElementById("guess")
let number =document.getElementsByTagName("b")
let x3 = document.getElementsByClassName("x3")
let parent = document.querySelector("#parent")
cnt = 100;

function callme(){
    
    if(parseInt(input.value)>randomNumber){
        guess.innerText ="Your Guess Is High"
        cnt--;
        number[0].innerText = cnt;
    }
    else if(parseInt(input.value)<randomNumber){
        guess.innerText ="Your Guess Is Low"
        cnt--;
        number[0].innerText = cnt;
    }
    else{
        guess.innerText ="🤩🤩 Hurray You Won 🤩🤩"
        x3[0].innerText=randomNumber;
        number[1].innerText = cnt;
        parent.setAttribute("style","background-color:orange")
        


    }
}

    function replay(){
        window.location.reload();
    }