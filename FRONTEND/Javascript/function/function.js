//named function
function add(a,b){
    return a+b;
}
console.log(add(10,20));
console.log("-------");
//anaonymus function
var sub=function(a,b){
    return a-b;
}
console.log(sub(20, 10));
console.log("-------");
//iife-imediate invoke function expression
(function(a, b){
    console.log(a/b);
})(10, 20);
//arrow function
var div=(a, b)=>a/b;
console.log(div(20, 10));

//call back function
 function main(){
    var sum=10+20;
    console.log("sum is ",sum);
 }
 function second(num){
    console.log("This is the second function",num)
 }

 main(second);
 console.log("-------");
 