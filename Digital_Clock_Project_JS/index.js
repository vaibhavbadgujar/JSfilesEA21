   

let text = document.getElementById('text')
function callme () {
    let time= new Date();
    let hours = time.getHours() ;
    let min =time.getMinutes();
    let sec = time.getSeconds();
    let k5=document.getElementById("k5")
    if(hours>12){
        k5.innerText= 'PM'
    }
    else{
        k5.innerText= 'AM' 
    }
    let time99 = document.getElementsByClassName("d4")
    if (hours>=6 && hours < 12){
        time99[0].innerText = "GRAB SOME HEALTHY BREAKFAST!!!"
    } 
    else if (hours>=12 && hours < 15){
        time99[0].innerText = "LET'S HAVE SOME LUNCH !!"
    }
    else if (hours>=15 && hours <19){
        time99[0].innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
    }
    else{
        time99[0].innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP"
    

    }

    if(hours>12){
        hours=hours-12;
    }
let het = document.querySelector(".k21")
het.innerHTML = hours;
let het1 = document.querySelector(".k31")
het1.innerHTML =min;
let het2 = document.querySelector(".k41")
het2.innerHTML =sec;


}
setInterval(() => {
    callme()
}, 1000);



let PIC=document.getElementById("PIC")
let WORDS = document.getElementById("WORDS")

function vicky(){
    let l = new Date();
    
    let hrs=l.getHours();
    
if(hrs===parseInt(morning.value)){
    PIC.style.backgroundImage="url(./morning.png)"
    WORDS.innerText = "GOOD MORNING!! WAKE UP !!"
}
else if(hrs==parseInt(nighttime.value)){
    PIC.style.backgroundImage="url(./nightpic.png)"
    WORDS.innerText = "GOOD NIGHT !!"
}
else if(hrs==parseInt(lunch.value)){
    PIC.style.backgroundImage="url(./lunch.png)"
    WORDS.innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP"
}
else if(hrs==parseInt(naptime.value)){
    PIC.style.backgroundImage="url(./evening.png)"
    WORDS.innerText = "GOOD EVENING !!"
}




let mornigtext = morning.options[morning.selectedIndex].textContent;
    let mornig1 =document.getElementById("91")
    mornig1.textContent = mornigtext;
    


    let lunchtext = lunch.options[lunch.selectedIndex].textContent;
    let lunch1 = document.getElementById("92")
    lunch1.textContent = lunchtext;
    let naptext = naptime.options[naptime.selectedIndex].textContent;
    let nap1 = document.getElementById("93")
    nap1.textContent = naptext;

    let nighttext =nighttime.options[nighttime.selectedIndex].textContent;
    let night1 = document.getElementById("94")
    night1.innerText=nighttext;
    
    
}