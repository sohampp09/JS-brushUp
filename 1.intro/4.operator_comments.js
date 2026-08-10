//JS OPERATORS
  //js operators are special symbols that perform operations on one or more operands(values) for ex- 2+3; //5

// JavaScript Operator Types
// Here is a list of different JavaScript operators you will learn in this tutorial:

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// Logical Operators
// Bitwise Operators
// String Operators
// Miscellaneous Operators


//1. Arithmetic Operators

// Commonly Used Arithmetic Operators
//   Operator	Name	                         Example
//      +	    Addition	                     3 + 4  // 7
//      -	    Subtraction	                     5 - 3  // 2
//      *	    Multiplication	                 2 * 3  // 6
//      /	    Division	                     4 / 2  // 2
//      %	    Remainder	                     5 % 2  // 1
//      ++	    Increment (increments by 1)	    ++5 or 5++  // 6
//      --	    Decrement (decrements by 1)	    --4 or 4--  // 3
//      **	    Exponentiation (Power)	        4 ** 2  // 16

let x = 5;

console.log("addition:", x + 3);
console.log("subtraction operator:", x - 3);
console.log("multiplication operator:", x * 3);
console.log("division oprator:", x / 3);
console.log("remainder operator:", x % 3);
console.log("increment operator:", ++x);
console.log("decrement operator:", --x);
console.log("Exponentiation: x ** 3 =", x ** 3); //Note: The increment operator ++ adds 1 to the operand. And, the decrement operator -- decreases the value of the operand by 1.




// 2. JavaScript Assignment Operators:
  // We use assignment operators to assign values to variables. For example,
//   Commonly Used Assignment Operators
// Operator	        Name	                            Example
//  =	            Assignment Operator	                a = 7;
//  +=	            Addition Assignment	                a += 5;  // a = a + 5
//  -=	            Subtraction Assignment	            a -= 2;  // a = a - 2
//  *=	            Multiplication Assignment	        a *= 3;  // a = a * 3
//  /=	            Division Assignment	                a /= 2;  // a = a / 2
//  %=	            Remainder Assignment	            a %= 2;  // a = a % 2
//  **=	            Exponentiation Assignment	        a **= 2;  // a = a**2


// assignment operator
let a = 7;
console.log("Assignment: a = 7, a =", a);

// addition assignment operator
a += 5;  // a = a + 5
console.log("Addition Assignment: a += 5, a =", a);

// subtraction assignment operator
a -= 5;  // a = a - 5
console.log("Subtraction Assignment: a -= 5, a =", a);

// multiplication assignment operator
a *= 2;  // a = a * 2
console.log("Multiplication Assignment: a *= 2, a =", a);

// division assignment operator
a /= 2;  // a = a / 2
console.log("Division Assignment: a /= 2, a =", a);

// remainder assignment operator
a %= 2;  // a = a % 2
console.log("Remainder Assignment: a %= 2, a =", a);

// exponentiation assignment operator
a **= 2;  // a = a**2
console.log("Exponentiation Assignment: a **= 7, a =", a);




// 3. JavaScript Comparison Operators
// We use comparison operators to compare two values and return a boolean value (true or false). For example,
const a = 3, b= 2;
console.log(a>b)

// Note: In the above example, a > b is called a boolean expression since evaluating it results in a boolean value

// Commonly Used Comparison Operators

// Operator	    Meaning	                         Example
//  ==	        Equal to	                     3 == 5 gives us false
//  !=	        Not equal to	                 3 != 4 gives us true
//  >	        Greater than	                 4 > 4 gives us false
//  <	        Less than	                     3 < 3 gives us false
//  >=	        Greater than or equal to	     4 >= 4 gives us true
//  <=	        Less than or equal to	         3 <= 3 gives us true
//  ===	        Strictly equal to	             3 === "3" gives us false
//  !==	        Strictly not equal to	         3 !== "3" gives us true
