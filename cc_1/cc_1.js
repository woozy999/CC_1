//cc_1 project

//part 1

let employeeName = "Basic Company";
const employeeID = 1234;
var isActive = true;

console.log("Employee Name:", employeeName);
console.log("Type of employeeName:", typeof employeeName);

console.log("Employee ID:", employeeID);
console.log("Type of employeeID:", typeof employeeID);

console.log("Is Active:", isActive);
console.log("Type of isActive:", typeof isActive);

//part 2

let products = ["Computer", "Phone", "Calculator"];
const productDetails = { name: "Computer", price: 100.00, inStock: true }; 

console.log("Products:", products);
console.log("Product Details:", productDetails);

//part 3

let accountBalance = 9900.00;
console.log("Initial Balance:", accountBalance);

accountBalance += 10;
console.log("New balance after deposit:", accountBalance);

accountBalance -= 20;
console.log("New balance after withdrawal:", accountBalance);

accountBalance *= 1.10;
console.log("New balance after 10% interest:", accountBalance);

accountBalance /= 1.15;
console.log("New balance after 15% fee:", accountBalance);

accountBalance %= 100;
console.log("Remainder after dividing by 100:", accountBalance);