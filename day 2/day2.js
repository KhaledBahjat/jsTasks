task 1
let str = prompt("Enter your string");
let cnt = 0;
for (let i = 0; i < str.length; i++){
  if (str[i] === 'e') {
    cnt++;
  }
}
alert(`Number of 'e' characters in the string:${cnt}`);

task 2
function checkPalindrom (str) {
  return str == str.split('').reverse().join('');
};
let str = prompt("Enter your string");
checkPalindrom(str) ? alert("The entered string is palindrome") : alert("The entered string is not palindrome");
task 3
let arr = [], sum = 0, proud = 1, divi;
for (let i = 0; i < 3; i++){
  let num = prompt(`Enter number ${i+1}`);
  arr.push(Number(num));
  sum += arr[i];
  proud *= arr[i];
  divi = arr.reduce((a, b) => a / b);
}
alert(`Sum: ${sum}, \n Product: ${proud}, \n Divison: ${divi}`);
task 4

let arr = [];
for (let i = 0; i < 5; i++){
  let num = prompt(`Enter number ${i+1}`);
  arr.push(Number(num));
}
document.write(`<h1>You'r array: ${arr} </h1><br>`);

arr.sort();
arr.reverse();
document.write(`<h2>Ascending order:${arr}</h2><br>`);

arr.sort();
document.write(`<h2>Descending order: ${arr} </h2><br>`);
task 5
let r = prompt("Enter radius of circle");
let a = (Math.PI * r ** 2);
alert(`Area of circle is: ${a}`);
task 6
let num = prompt(`Enter number`);
let squrRoot = Math.sqrt(num);
alert(`Square root of ${num} is: ${squrRoot}`);

task 7
let angle = prompt(`Enter angle to calculat its cos`);
let cos = Math.cos(angle * Math.PI / 180);
alert(`Cosine of ${angle} is: ${cos}`);
