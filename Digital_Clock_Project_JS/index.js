// let text = document.getElementById('text')
// text.addEventListener ('click',function() {
//     // console.log('kishan');
//     // text.innerText="kishan bhoi"
//     let time= new Date();
//     let hours = time.getHours() ;
//     let min =time.getMinutes();
//     let sec = time.getSeconds();
//     if(hours>12){
//         hours=hours-12;
//     }
// let het = document.querySelector(".k2")
// het.innerHTML = hours;
// let het1 = document.querySelector(".k3")
// het1.innerHTML =min;
// let het2 = document.querySelector(".k4")
// het2.innerHTML =sec;

// let btn = document.getElementById("b111")
// btn.addEventListener("onmo")
// function hover(){
//     btn.style.background-image: linear-gradient( 131deg ,blue ,  rgb(249, 52, 219) 35% );
// }
   
   
   
    
    
//     console.log(hours,min,sec);
// })
// setInterval(() => {
    
// }, 1000);
let text = document.getElementById('text')
function callme () {
    // console.log('kishan');
    // text.innerText="kishan bhoi"
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
    // console.log(time99)

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


// function om(){
   
// }


   
   
   
    
    
    // console.log(hours,min,sec);
}
setInterval(() => {
    callme()
}, 1000);


// let night = document.getElementById('night');

// let nPrint = document.querySelector('#nighttime');
// nPrint.textContent = ntext ;


// let night = document.getElementById('night');
// let ntext = night.options[night.selectedIndex].textContent;
// let nPrint = document.querySelector('#nighttime');
// nPrint.textContent = ntext ;

// let nap = document.getElementById('nap');
// let naptext = nap.options[nap.selectedIndex].textContent;
// let button = document.getElementById('b111')
//  button.addEventListener('click',()=>{
//     let mornig1 =document.getElementById("morning")
//     let ntext = mornig1.options[mornig1.selectedIndex].textContent;
//     let nPrint = document.querySelector('#91');
//     nPrint.textContent = ntext ;
//     // console.log(morning.value);
//     mornig1.innerText= morning.value
//     let lunch1 = document.getElementById("92")
//     lunch1.innerText=lunch.value
//     // console.log(lunch.value)
//     let nap1 = document.getElementById("93")
//     nap1.innerText=naptime.value
//     let night1 = document.getElementById("94")
//     night1.innerText=nighttime.value

let PIC=document.getElementById("PIC")
let WORDS = document.getElementById("WORDS")

function kishan(){
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
    
    // mornig1.innerText= morning.value
    // console.log(morning.value);


    let lunchtext = lunch.options[lunch.selectedIndex].textContent;
    let lunch1 = document.getElementById("92")
    lunch1.textContent = lunchtext;
    // lunch1.innerText=lunch.value
    // console.log(lunch.value)
    // let naptime = document.getElementById('naptime');
    let naptext = naptime.options[naptime.selectedIndex].textContent;
    let nap1 = document.getElementById("93")
    nap1.textContent = naptext;


    // let nap = document.getElementById('nap');
    // let naptext = nap.options[nap.selectedIndex].textContent;
    // let napPrint = document.querySelector('#naptime');
    // napPrint.textContent = naptext

    // console.log(nap1.id)
    // nap1.innerText=naptime.value
    let nighttext =nighttime.options[nighttime.selectedIndex].textContent;
    let night1 = document.getElementById("94")
    night1.innerText=nighttext;
    
    
    

}
// console.log(nighttime[23].innerText)