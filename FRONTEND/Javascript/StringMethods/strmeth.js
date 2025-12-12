// string methods
let str1="Hello World";
//length
console.log(str1.length);
//char at
console.log(str1.charAt(2));
//at
console.log(str1.at(-3));
//slice
console.log(str1.slice(2,4));
//substring
console.log(str1.substring(5));
//indexof and last index
console.log(str1.indexOf(w));
console.log(str1.lastIndexOf(l));
//includes
console.log(str1.includes("l"));
//startswith
console.log(str1.startsWith("H"));
//endswith
console.log(str1.endsWith("d"));
//replace->>only first letter
console.log(str1.replace("H","h"));
 //replaceAll
 console.log(str1.replaceAll("l","L"));
//concat function
console.log(str1.concat("helloo"));
let str2="    Hello World    ";
//trim function
console.log(str2.trim());
//trimStart function
console.log(str2.trimStart());
//trimEnd function
console.log(str2.trimEnd());
//repeat function
console.log(str1.repeat(2));
//split function
console.log(str1.split(" "));
let str3="John";
//padStart function
console.log(str3.padStart(10, "a"));
//padEnd function
console.log(str3.padEnd(10, "a"));
