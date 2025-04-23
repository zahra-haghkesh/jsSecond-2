//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */
// !Answer:
function outerFunction() {
    const words = ["Action", "Potential", "Signals"];
  
    function displayWords() {
      for (let word of words) {
        console.log(word);
      }
    }
  
    return displayWords;
  }
  
  const display = outerFunction();
  display();
  