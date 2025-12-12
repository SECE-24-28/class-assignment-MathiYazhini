var arr=[10,20,30,40,50]
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);

}
console.log("----------");
for(var a of arr){
    console.log(a);
}
console.log("----------");
for(var b in arr){
    console.log(arr[b]);
}
console.log("----------");
var person={
    fname:"abc",
    lname:"xyz",
    age:25
}
for(var c in person){
    console.log(person[c]);
}