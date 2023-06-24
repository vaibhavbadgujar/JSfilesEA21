//Q1:--

const Parent ={
    display: function(){
                  console.log(`${this.name} and age is ${this.age} `);
    }
}

const child1 = Object.create(Parent)
child1.name="Nishu";
child1.age=25;
child1.display()


const child2 = Object.create(Parent)
child2.name="Shikha";
child2.age=24;
child2.display()


//Q2:
const GFAther={
Sayhello : function(){
    console.log("Hey Grand Father !!!");
}   
}

const Father = Object.create(GFAther);
Father.Hello = function(){
    console.log("Say Hi to Father !!!");
}

const You = Object.create(Father);
You.Hi = function(){
    console.log("Hi...");
}

You.Sayhello()


//Q3:--


let newArr = new Array(9,37,269);
newArr.__proto__.add = function(arr){
let count=0;
for(let i=0; i < arr.length; i++)
{
count += arr[i];
}
return count;
}

let ans = newArr.add(newArr);
console.log(ans);



//Q4:-

function kpop(name,group,company,gen,fandom)
{
this.name = name;
this.group = group;
this.company = company;
this.gen = gen;
this.fandom = fandom;
}

kpop.prototype.name1 = "KPOP";

let exo = new kpop("EXO","boy group","SM Ent.","3rd gen","exo-l");
let exoSC = Object.create(exo);

console.log("2 objects have been created: exo and exoSC");
console.log("The value of 'name' property for 'exo'--->",exo.name);
console.log("The value of inherited 'name' property for 'exo'--->",exo.name1);
console.log("The value of 'name' property inherited from parent for 'exoSC'--->",exoSC.name);
console.log("The value of 'name' property inherited from grandparent for 'exo'--->",exoSC.name1);

exoSC.name2 = "EXO-SC";
console.log("The value of 'name' property for 'exo'--->",exoSC.name2);

// //OUTPUT:
// 2 objects have been created: exo and exoSC
// The value of 'name' property for 'exo'---> EXO
// The value of inherited 'name' property for 'exo'---> KPOP
// The value of 'name' property inherited from parent for 'exoSC'---> EXO
// The value of 'name' property inherited from grandparent for 'exo'---> KPOP
// The value of 'name' property for 'exo'---> EXO-SC