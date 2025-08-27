//hello it's Ralph

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
let missyou = `(Computer programming is the process of writing code,<br>
 a set of instructions, that tells a computer <b>how to perform</b> a specific task,<br> solve a problem, or create software.)`
let sub = `My <b>favorite</b> subject is ${favsub}. ${missyou}`;
//second p/favsub
let motiv = " Here's a motivational message for you:";
//third p/motivational
var essence = "broken jade";
var essence2 = "INTACT TILE";

let question = "What is JavaScript and how does it <b>help</b> websites?";
let ans = "JavaScript is a programming language";
let ans2 = "<b>interactive and dynamic</b>";
let ans3 = `respond to user actions, update content without reloading,
validate forms, create animations, and handle events`;
let ans4 = "<b>display static information</b>";
let answer = `${ans} that makes websites ${ans2}.
It allows web pages to <br>${ans3}.<br> Without JavaScript, websites
would only ${ans4} like plain text and images.`;

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
document.getElementById("qqq").innerHTML = question;
document.getElementById("qna").innerHTML = answer;

console.log(wel.length);
console.log(message.length);
console.log(motiv.trimStart());
console.log(titleDef.trimEnd());
newwel = newwel.toUpperCase();
console.log(newwel);
document.getElementById("theclass").innerHTML = newwel;
console.log(fullname.slice(0, 5));