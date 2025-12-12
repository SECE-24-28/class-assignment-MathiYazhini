//hello world to Hello World
let str="hello world";
str=str.replace("h","H");
str=str.replace("w","W");
console.log(str);
//no of word
let str1="i love world";
let sp=str1.split(" ");
let count=sp.length;
console.log(count);
//space to -
let str2="my name is john";
console.log(str2.replaceAll(" ","-"));
//print duplicate letter
let str3="programming"
let duplicate="";
for(let i=0;i<str3.length;i++){
    if(str3.indexOf(str3[i])!==i){
        duplicate+=str3[i];
    }
}
console.log(duplicate);
//john doe smith first letter of every word
let str4 = "John Doe Smith";
let result = "";
for (let word of str4.split(" ")) {
  result += word[0];
}
console.log(result);  
//find longest word in sentence
let str5="The quick brown fox";
let longest = "";
for (let ch of str5.split(" ")) {
  if (ch.length > longest.length) {
    longest = ch;
  }
}
console.log(longest)
//remove duplicates
let nodup = "";
for (let ch of str3) {
  if (!nodup.includes(ch)) {
    nodup += ch;
  }
}
console.log(nodup);
