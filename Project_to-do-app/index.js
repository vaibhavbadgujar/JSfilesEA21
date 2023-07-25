
let popcar =document.getElementById("apper") 
popcar.style.display="none"
/* for first popup */
function additem(){
    let popcar =document.getElementById("apper") 
    popcar.style.display="none"
    let head = document.getElementById("head")
    let rowsdone =document.getElementById(`additem`)
    let pop1 =document.getElementById("todono")  
    pop1.style.display="flex"
    let cards = document.getElementById("card")
    cards.style.opacity=-1;
    
    
    pop1.innerHTML=`
    <nav  class="addview"  >
    <nav>Add New List</nav><br>
    <input type="text" class="tex" id="texts"
     placeholder="Add New List">
    <nav class="ac">
    <button onclick="card1()"  id="card1" >ADD</button>
    <button onclick="cancel()" >Cancel</button></nav>
</nav>`
    // document.body.style.backgroundColor="red"
    let child=`+`;
    // oldpg.innerHTML=newtrip;
    rowsdone.innerHTML=child;
    
}
/*get a value in popup and view that in cords */
let data=[];


function card1() {
    // Set the opacity of the elements with the ids `head` and `card` to 1
    let head = document.getElementById("head");
    head.style.opacity = 1;
    let cards = document.getElementById("card");
    cards.style.opacity = 1;
  
    // Get the value of the input field with the id `texts` and create a new object named `item` with a unique `id` and a `title`
    let newtex = document.getElementById("texts").value;
    let item = {
      id: new Date().getTime(),
      title: newtex,
    };
  
    // Add the `item` object to the `data` array and call the `addui` function to create the new card
    if (newtex) {
      data.push(item);
      addui();
    } else {
      // Display an alert if the input field is empty
      alert("Please enter the Card Title ☺️");
    }
  
    // Check if the "Add Item" button has been clicked and display or hide the popup window accordingly
    let pop1 = document.getElementById("todono");
    let rowsdone = document.getElementById(`additem`);
    add = rowsdone.innerHTML;
    if (add != "+") {
      pop1.style.display = "flex";
    } else {
      pop1.style.display = "none";
    }
  
    // Create the new card
    function addui() {
      let popcards = document.getElementById("card");
      popcards.style.display = "flex";
      let coadop = "";
  
      // Loop through the `data` array and create a new card for each item
      for (let index = 0; index < data.length; index++) {
        if (index <= data.length) {
          titl = data[index].title;
          id1 = data[index].id;
          let nn = titl;
          coadop = `
            <nav class="cards" id="cd${data[index].id}">
              <p id="${titl}" value="${data[index].title}" onclick="openwindow(${id1},this.getAttribute('value'))" id="n${id1}">${nn}</p><hr>
              <p id="addtk${data[index].id}"><p>
              <div class="formate">
                <span class="c1 c2" id="del${data[index].id}" onclick="delcard(${data[index].id})">d</span>
                <span class="c1" id="${data[index].id}" id="addtask${data[index].id}" onclick="addtask(${data[index].id})">+</span>
              </div>
            </nav>`;
        }
      }
  
      popcards.innerHTML += coadop;
    }
  }


/* open new window click on heading tag  or back button  */

function openwindow(id,tit){
   
    let head = document.getElementById("head")

    head.innerHTML=` <span class="flexdir"><span  onclick="backcard(${id})">back
    </span><span class="newwin" id="newwind"><h1>${tit}</h1></span>
    <span class="circle" onclick="adddwin(${id})" id="additem">+</span></span>
     `;

     let popcar =document.getElementById("apper") 
     popcar.style.display="block"
     let cardId = `cd${id}`;
     let card =document.getElementById(cardId);
     card.parentNode.isSameNode(card);
    const mii=card.innerHTML;
    
     popcar.innerHTML =mii;       
     data = data.filter(item => item.id != id);
    let po =document.getElementById("card") 
    po.style.display="none"
    console.log(a);
}

/* adding new cord and update details from heading page  */
function adddwin(id){

    let head = document.getElementById("head")
     head.innerHTML=`<span class="bold" >TASKS</span> LIST
    <spam class="add">
        <span class="circle" onclick="additem()" id="additem">+</span> Add Item</spam>`
    head.style.opacity=1;
    let cards = document.getElementById(`cd${id}`)
    cards.style.opacity=1;
    let popcar =document.getElementById("apper") ;
    cards.innerHTML=popcar.innerHTML
    popcar.innerHTML="";

    let po =document.getElementById("card") 
    po.style.display="flex"   
    additem();
    
}

/* back and update changes */
function backcard(id) {
    // Set the innerHTML of the element with the id `head` to display the "TASKS LIST" text and an "Add Item" button
    let head = document.getElementById("head");
    head.innerHTML = `<span class="bold" >TASKS</span> LIST
      <spam class="add">
          <span class="circle" onclick="additem()" id="additem">+</span> Add Item</spam>`;
  
    // Set the opacity of the elements with the ids `head` and `cd${id}` to 1
    head.style.opacity = 1;
    let cards = document.getElementById(`cd${id}`);
    cards.style.opacity = 1;
  
    // Set the innerHTML of the element with the id `cd${id}` to the innerHTML of the element with the id `apper`
    let popcar = document.getElementById("apper");
    cards.innerHTML = popcar.innerHTML;
  
    // Set the display property of the element with the id `card` to "flex" and the display property of the element with the id `apper` to "none"
    let po = document.getElementById("card");
    po.style.display = "flex";
    popcar.style.display = "none";
  
    // Set the innerHTML of the element with the id `apper` to "bb"
    popcar.innerHTML = "bb";
  }

  
/* delete cord  */
function delcard(id) {
    // Set the opacity of the elements with the ids `head` and `card` to 1 and display to "flex"
    let head = document.getElementById("head");
    head.style.opacity = 1;
    let cards = document.getElementById("card");
    cards.style.opacity = 1;
    cards.style.display = "flex";
  
    // Remove the card element with the id `cd${id}` from its parent node
    const cardId = `cd${id}`;
    const card = document.getElementById(cardId);
    card.parentNode.removeChild(card);
  
    // Remove the item with the given `id` from the `data` array
    data = data.filter((item) => item.id != id);
  
    // Hide the element with the id `apper`
    let popcar = document.getElementById("apper");
    popcar.style.display = "none";
  
    // Call the `backcard` function with the given `id`
    backcard(id);
  }

/* popup2 for update task update task inside cord 

*/
function addtask(taskid) {
    // Hide the element with the id `apper`
    let popcarer = document.getElementById("apper");
    popcarer.style.display = "none";
  
    // Set the opacity of the elements with the ids `head` and `card` to 0.1
    let head = document.getElementById("head");
    head.style.opacity = -1;
    let cards = document.getElementById("card");
    cards.style.opacity = -1;
  
    // Get the element with the id `${taskid}` and display a form for adding a new task
    let add = document.getElementById(`${taskid}`);
    let pop1 = document.getElementById("todono");
    pop1.style.display = "flex";
    pop1.innerHTML = `
      <nav  class="addview" id="newtripcd">
      <nav>Add New Task</nav><br>
      <input type="text" class="tex" id="textsfortask" placeholder="Add New Task">
      <nav class="ac">
      <button onclick="cardstask(${taskid})" id="card1" >ADD</button>
      <button onclick="cancel()" >Cancel</button></nav>
  </nav>`;
  }




/* for cancel the popup1 and 2  */
function cancel(){
    
    let head = document.getElementById("head")
    head.style.opacity=1;
    let cards = document.getElementById("card")
    cards.style.opacity=1;
    let pop1 =document.getElementById("todono")  
    pop1.style.display="none"
}

/* for insert task inside card */
const da=[];
function cardstask(taskid){
   
    let newval =document.getElementById("n${id1}") 
    console.log("vaibhav"+newval);
    let poc =document.getElementById("newwind")

/* condition for view cord */
    if(poc){
        let popcarer =document.getElementById("apper") 
        popcarer.style.display="block"
        let cards = document.getElementById("card")
        cards.style.opacity=1;
       
    }
    else if(poc == null) {
        let popcarer =document.getElementById("apper") 
        popcarer.style.display="none"
        let cards = document.getElementById("card")
        cards.style.opacity=1;
    }

    let head = document.getElementById("head")
    head.style.opacity=1;
    
    
    let add = document.getElementById(`addtk${taskid}`)
    let newtext = document.getElementById("textsfortask").value;
    let pop1 =document.getElementById("todono")  
    pop1.style.display="none"
    /* data convert as string */
    const it ={
        id : new Date().getTime().toString(),
        tit:newtext,     
    }
    

    if (newtext||it.tit) {
      /* string convert as array */
        da.push(it);  
       /* insert task */
    additem(taskid);
      
    } else  {
    alert("Please  enter the Item ☺️");
     }
     /* update task */
     function additem(taskid){
        let coaditem="";
     for ( let i = 0; i < da.length; i++) {
        if(i <= da.length){           
    coaditem =`<p id="${da[i].id}${taskid}">
    <span id="new${da[i].id}${taskid}">
    ${da[i].tit}<span>
    <span class="makerd" id="makeread${da[i].id}${taskid}"
     onclick="makeread(${da[i].id},${taskid})" >Make as read</span>
     </p>`  
  
        }
       
    }
    
    add.innerHTML += coaditem; 
    
     }
   
}

/* after read a  task make as reed  */
function makeread(id, taskid) {
    // Get the element with the id `makeread${id}${taskid}` and hide it
    let mr = document.getElementById(`makeread${id}${taskid}`);
    mr.style.display = "none";
  
    // Get the element with the id `new${id}${taskid}` and mark it as read
    let tk = document.getElementById(`new${id}${taskid}`);
    tk.style.color = "red";
    tk.style.textDecoration = "line-through";
  
    // Remove the item with the given `id` from the `data` array
    data = data.filter((item) => item.id != id);
  }