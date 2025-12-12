//getElementById
//getEelementByClassName
//getElementByTagName
//querySelector
//querySelectorAll

//getElementById
let head = document.getElementById("head");
//console.log(head);
head.innerText="Welcome back";
head.style.color="red";
head.style.fontSize="50px";
let fruits = document.getElementsByClassName("fruits");

//console.log(fruits);
fruits[0].style.color="green";
fruits[3].style.color="yellow";

let ele = document.querySelector("div");
console.log(ele);

let ele1=document.querySelectorAll("div");
console.log(ele1);

let h2Ele=document.createElement("h2")
console.log(h2Ele);
h2Ele.innerText="This is h2 tag";
h2Ele.style.color="blue";
h2Ele.style.fontSize="30px";
document.getElementById("new").appendChild(h2Ele);

function hideText(){
    head.style.display="none";
}
function showText(){
    head.style.display="block";
}
function tc(){
    
    if(head.style.display=="none"){
        head.style.display="block";
    }else{
        head.style.display="none";
    }
}
document.getElementById("hidebtn").addEventListener("click",hideText);
document.getElementById("hidebtn").addEventListener("mouseover", showText);

