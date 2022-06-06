var chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var button = document.querySelector("#generateKey");
var keyDisplay = document.querySelector("#key");

function init() {
  //Generate 5 random characters from chars array and concatenate them
  function generateString() {
    var result = "";
    for (var i = 0; i < 5; i++) {
      result += chars[Math.floor(Math.random() * 36)];
    }
    return result;
  }
  //Generate 5 sets of 5 random characters and concatenate them together
  function addRandomStrings() {
    var string = "";
    for (var i = 0; i < 5; i++) {
      if (string === "") {
        string += generateString();
      } else {
        string += "-" + generateString();
      }
    }
    //jQUERY
    // $("#key").text(string);
    keyDisplay.textContent = string;
  }
  //Add a click listener to the button then call addRandomString();
  //jQUERY
  // $("#generateKey").on("click", function() {
  //   addRandomStrings();
  // });
  button.addEventListener("click", function() {
    addRandomStrings();
  });
  //Show random chars on init
  addRandomStrings();
}

init();