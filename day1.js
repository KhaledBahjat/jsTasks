var x = prompt();
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

studentUniversty(x);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
alert("Welcome to my site");
var x = prompt("enter your name");
alert("welcome " + x);
// /////////////////////////////////////////////////////////////////////////////
var x = prompt();
function todaysTemperature(x) {
  var ans = x >= 30 ? "HOT" : "Cold";
  return ans;
}
console.log(todaysTemperature(x));
