// Assign button id 
var btnMake = document.getElementById("btnMake");

// Create function to generare password
function passwordMake () {

  // Create arrays of four criteria 
  var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characterArr = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

  // Variables for user input
  var numCharacter = prompt("How many number of characters do you want in your password? You must pick between 8 and 128");
  var upperCases = confirm("Do you want 'Uppercase letters' in your password?");
  var lowerCases = confirm("Do you want 'Lower letters' in your password?");
  var numCases = confirm("Do you want 'Numbers' in your password?");
  var characterCases = confirm("Do you want 'Special characters' in your password?");


  var concatArray = [];
  var passwordArray = [];

  
  
  
}



















