//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// todo:arrow function
// todo:template string instead of "" and ''
// todo:destructuring
// ❌ Old way
var name = "Alice";

const age = 25;
let city = "New York";

city = "Los Angeles";  

console.log(age, city);
//---------------------***-----------------------------
function greet(name) {
    return "Hello, " + name;
  }
  
  const greet = (name) => `Hello, ${name}`;
  
  console.log(greet("Bob")); 
  //---------------------------***----------------------
  const language = "JavaScript";
const level = "intermediate";

console.log("I'm learning " + language + " at " + level + " level.");

console.log(`I'm learning ${language} at ${level} level.`);
//-----------------------------------------------------------
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;

console.log(firstColor);
console.log(secondColor); 

const user = {
  username: "coder123",
  email: "coder@example.com"
};

const { username, email } = user;

console.log(username);
console.log(email);    
