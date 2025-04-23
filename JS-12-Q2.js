// ? Question-2:Using higher-order functions:
// todo-1:write two functiones(innerFunc,outerFunc).
// todo-2:the innerFunc calculates the multiplication of two numbers.
// todo-3:call the innerFunc in the outerFunc.

// !Answer:

function innerFunc(a, b) {

    return a * b;
  }
  
  function outerFunc(x, y, operationFunc) {
    
    const result = operationFunc(x, y);
    console.log("Multiplication result:", result);
  }
  
  outerFunc(5, 6, innerFunc);
  