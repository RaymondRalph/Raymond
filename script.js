/*
What is JavaScript and how does it help websites?

JavaScript is a programming language that makes websites interactive and dynamic.
It allows web pages to respond to user actions, update content without reloading,
validate forms, create animations, and handle events. Without JavaScript, websites
would only display static information like plain text and images.
*/

//hello it's ralph

const titleDef= "Digital Welcome Board ";
//first h1
let wel = "welcome to my web!";
newwel = wel.replace("my web", "class");
//first h2
let fullname = "Ralph Raymond B. Eborda"
//fn
let name = `Hello to you, my name is <b>${fullname}</b>, or in short just Ralph.`;
//first p/fullname
let favsub = "<i>computer programming</i>";
let sub = `My favorite subject is ${favsub}.`;
//second p/favsub
let motiv = " Here's a motivational message for you:";
//third p/motivational
var essence = "broken jade";
var essence2 = "INTACT TILE";


essence2 = essence2.toLowerCase();
essence = essence.toUpperCase();

var message = `<b>A ${essence} is finer than an ${essence2}.</b>`;
//fourth p/message

document.getElementById("intro").innerHTML = titleDef;
document.getElementById("theclass").innerHTML = wel;
document.getElementById("fn").innerHTML = name;
document.getElementById("favsubject").innerHTML = sub;
document.getElementById("here").innerHTML = motiv;
document.getElementById("mess").innerHTML = message;

console.log(wel.length);
console.log(message.length);
console.log(motiv.trimStart());
console.log(titleDef.trimEnd());
newwel = newwel.toUpperCase();
console.log(newwel);
document.getElementById("theclass").innerHTML = newwel;
console.log(fullname.slice(0, 5));