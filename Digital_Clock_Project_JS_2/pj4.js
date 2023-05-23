function myFunction() {
    let coor = "Party time!";
    document.getElementById("demo").innerHTML = coor;
  }
  
  function clearCoor() {
  let coor = "Set Alarm";
    document.getElementById("demo").innerHTML = coor;
  }
  
  let d=new Date();
  let h = d.getHours()%12||12;
  document.getElementById("hor").innerHTML = h;

  setInterval(function () {
    const timer = document.getElementById("timer");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0")%12||12;
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const currentTime = hours + ":" + minutes + ":" + seconds;
    document.getElementById("sec").innerText = seconds;
    document.getElementById("min").innerText = minutes;
    document.getElementById("hor").innerText = hours;
  }, 1000);


  let gms;
  let tim = new Date();
  let hr =tim.getHours();
        
        if(hr<12){
        gms="AM";
         }
         else{
             gms="PM";
         }
         document.getElementById("ampm").innerHTML= gms;

                   let gm;
                   let grabs;
                 
                    if (hr<=6){
                        gm="GOOD NIGHT !!";
                        grabs="CLOSE YOUR EYES AND GO TO SLEEP";
                    }
                    else if (hr<=11){
                        gm="GOOD MORNING!! WAKE UP !!";
                        grabs="GRAB SOME HEALTHY BREAKFAST!!!";
                    }
                    else if (hr<=13){
                        gm="GOOD AFTERNOON !! TAKE SOME SLEEP";
                        grabs=" LET'S HAVE SOME LUNCH !! ";
                    }
                    else if (hr<=17){
                        gm="GOOD EVENING !!";
                        grabs="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING! ";
                    }
                    else{
                        {
                        gm="GOOD NIGHT !!";
                        grabs=" CLOSE YOUR EYES AND GO TO SLEEP";
                        
                    }
                    }
                      // document.getElementById("gm").innerHTML=gm;
                     document.getElementById("grabs").innerHTML=grabs;


 let image = document.getElementById("myImage");
   
    let don=new Date();
        let hs = don.getHours(); 
    
  

function cl() {
//       //   let r = document.getElementById("morning").value;
//       //   let aft = document.getElementById("afternoon").value;
//       //   let eve = document.getElementById("evening").value;
//       //  let nig = document.getElementById("night").value;
       
      //old // document.getElementById("mor").innerHTML=`${r}`
      // // document.getElementById("aft").innerHTML=`${aft}`
      // // document.getElementById("eve").innerHTML=`${eve} `
      // // document.getElementById("nig").innerHTML=`${nig} `
      let r = document.getElementById("morning");
      let aft = document.getElementById("afternoon");
      let eve = document.getElementById("evening");
     let nig = document.getElementById("night");
     let mornop =r.options[r.selectedIndex].text;
     let aftop =aft.options[aft.selectedIndex].text;
     let evenop =eve.options[eve.selectedIndex].text;
     let nignop =nig.options[nig.selectedIndex].text;
      document.getElementById("mor").innerHTML=`${mornop}`
      document.getElementById("aft").innerHTML=`${aftop}`
      document.getElementById("eve").innerHTML=`${evenop} `
      document.getElementById("nig").innerHTML=`${nignop} `

        let gmas;
  let grabes;

      if(hs == r.value){
        gmas="GOOD MORNING!! EYES UP !!";
    grabes="GRAB SOME HEALTHY BREAKFAST!!!";
    document.getElementById("gmas").innerHTML=gmas;
    // document.getElementById("grabes").innerHTML=grabes;
       image.src = "https://priyarajp.github.io/project4/Component%2030%20%E2%80%93%201.svg";
      }
      else if(hs == aft.value){
        gmas="GOOD AFTERNOON !! TAKE SOME SLEEP";
          grabes="LET'S HAVE SOME LUNCH !!";
          document.getElementById("gmas").innerHTML=gmas;
          // document.getElementById("grabes").innerHTML=grabes;
          image.src = "https://priyarajp.github.io/project4/Group%205183@2x.png";
      
      }
      
      else if(hs == eve.value){
        gmas="GOOD AFTERNOON !! TAKE SOME SLEEP";
    grabes="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    document.getElementById("gmas").innerHTML=gmas;
    // document.getElementById("grabes").innerHTML=grabes;
    image.src = "https://priyarajp.github.io/project4/lunch_imageof_tea.png";
             }

      else if (hs == nig.value){
        gmas="GOOD NIGHT !!";
           grabes="CLOSE YOUR EYES AND GO TO SLEEP";
           document.getElementById("gmas").innerHTML=gmas;
          //  document.getElementById("grabes").innerHTML=grabes;
           image.src = "https://priyarajp.github.io/project4/Group%205194@2x.png";
             }
            
 }
