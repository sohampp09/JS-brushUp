//JS type conversion:

// In programming, type conversion is the process of converting data of one type to another. For example, converting string data to number.

// There are two types of type conversion in JavaScript:

// Implicit Conversion - Automatic type conversion.
// Explicit Conversion - Manual type conversion.



// In certain situations, JavaScript automatically converts data of one type to another (to the right type). 
// This is known as implicit conversion. For example,

// numeric string used with + gives string type
let result;

// convert number to string
result = "3" + 2; 
console.log(result, "-", typeof(result));

result = "3" + true; 
console.log(result, "-", typeof(result));

result = "3" + null; 
console.log(result, "-", typeof(result));