/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "raccoon"];

  function generateAllCombinations() {
    var combinations = [];
    for (var i = 0; i < pronoun.length; i++) {
      for (var j = 0; j < adj.length; j++) {
        for (var k = 0; k < noun.length; k++) {
          var combination = pronoun[i] + adj[j] + noun[k] + ".com";
          combinations.push(combination);
        }
      }
    }
    return combinations;
  }

  var allCombinations = generateAllCombinations();
  var combinedText = allCombinations.join(", ");
  document.getElementById("titulo").innerText = combinedText;
};
