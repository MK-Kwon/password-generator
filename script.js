// Assign button id 
var btnMake = document.getElementById("btnMake");

// Create function to generare password
function passwordMake() {

  // Create arrays of four criteria 
  var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characterArr = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

  // Variables for user input
  var numCharacter = prompt("How many number of characters do you want in your password? You must pick between 8 and 128");
  var upperCases = confirm("Do you want 'Uppercase letters' in your password?");
  var lowerCases = confirm("Do you want 'Lower letters' in your password?");
  var numCases = confirm("Do you want 'Numbers' in your password?");
  var characterCases = confirm("Do you want 'Special characters' in your password?");

  // This array will concatenate each string from each array according to user's confirmation
  var concatArray = [];

  // This array will have the password generated from concat array which will push each randomly chosen string from concat array to the end of the password array until it finishes looping through given number from the user
  var passwordArray = [];

  // Conditions
  if (numCharacter > 7 && numCharacter < 129) {

    if (upperCases) {
      concatArray = concatArray.concat(upperCaseArr);
    }
    if (lowerCases) {
      concatArray = concatArray.concat(lowerCaseArr);
    }
    if (numCases) {
      concatArray = concatArray.concat(numArr);
    }
    if (characterCases) {
      concatArray = concatArray.concat(characterArr);
    }
    // Loop
    for (var i = 0; i < numCharacter; i++) {
      passwordArray.push(concatArray[Math.floor(Math.random() * concatArray.length)]);
    }
    // Return the value of password array which has combined all strings into 1 string
    return passwordArray.join("");

  }
}

// Display password in textarea
function displayPassword() {

  var password = passwordMake();
  var passwordDisplay = document.getElementById("pwd");

  passwordDisplay.value = password;

}

// Copy password to the clipboard
function copy() {
document.getElementById("pwd").select();
document.execCommand("Copy");
alert("Password is copied to the clipboard!");
valid = true;
}

// Add click function to the button
btnMake.addEventListener("click", displayPassword);
btnCopy.addEventListener("click", copy);














