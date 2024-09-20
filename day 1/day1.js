//task 1
window.alert("Wlcome To My Site");
let name = prompt("Enter your name");
window.alert(`Welcome${name}`);
//task 2
let degre = prompt();
function todaysTemperature(x) {
  var ans = x >= 30 ? "HOT" : "Cold";
  return ans;
}
console.log(todaysTemperature(x));
//task 3
let faculty = prompt("entr you collage name").toLowerCase();
//any case 
function studentUniversty(x) {
  switch (x) {
    case "  FCI":
      alert("“You’re eligible to Programingtracks");
      break;
    case "Commerce":
      alert("You’re eligible to ERPand Social media tracks");
      break;
    case "Engineering":
      alert("You’re eligible toNetwork and Embedded tracks");
      break;
    default:
      alert("You’re eligible to SW fundamentalstrack");
      break;
  }
}

studentUniversty(faculty);
//task 4
function headinPrint() {
  let h = "";
  for (let i = 1; i <= 6; i++){
    h += '<h' + i + '>welcome to my page</h' + i + '>';
  }
  document.write(h);
}
headinPrint();
//task 5
function plus(x, y) {
  return Number(x) + Number(y);
}

let num1 = prompt("Enter number 1");
let num2 = prompt("Enter number 2");
document.write(plus(num1, num2));
//task 6
function weather(temp, fells) {

  if (temp >= 25 && temp <= 30 && fells >= 25 && fells <= 30) {
      return "Normal";
  } else if (temp < 25 && fells < 25) {
      return "Cold";
  } else if (temp > 30 && fells > 30) {
      return "Hot";
  } else {
      return "Unknown";
  }
}

let temp = prompt("Enter Today's Temperature");
let fells = prompt("Enter Today's  feel temperature");
document.write(weather(temp, fells));
task 6
let s = prompt("Enter start number");
let e = prompt("Enter end number");
function oddNum(s, e) {
  for (let i = s; i <= e; i++) {
      if (i &1) {
          document.write(i + " ");
      }
  }
}
oddNum(s, e);
task 7
while (true) {
  let age = prompt("Enter Your");
  if (age < 2010) {
      let name = prompt("Enter Your Name");
      document.write(`Age: ${2024 - age}`);
      break;
  }
}
