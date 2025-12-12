//var,let c0nst

//var can be redeclared
var a=10;
var a=20;
console.log(a);
//let can not be redeclared
let b=10;
//let b=20;
console.log(b);
//const can not be redeclared
const c=10;
//const c=20;
console.log(c);
//var can be reinitialized
var d=10;
d=20;
console.log(d);
//let can be reinitialized
let e=10;
e=20;
console.log(e);
//const can not be reinitialized
const f=10;
//f=20;
console.log(f); 
//var can be hoisted
console.log(g);
var g=10;   
//let can not be hoisted
//console.log(h);
let h=10;
//const can not be hoisted
//console.log(i);
const i=10;
//var can be declared without initialization
var j;
console.log(j); 
j=10;
console.log(j);
//let can not be declared without initialization
//let k;
console.log(k);
k=10;
console.log(k);
//const can not be declared without initialization
//const l;
console.log(l);
l=10;
console.log(l);
//var can be declared in block
{
    var m=10;
    console.log(m);
}
console.log(m);







let person={
    fname:"abc",
    lname:"xyz",
    age:25,
    address:{
        city:"bangalore",
        pincode:988759,
    },
};
const(fname,