// Ticket fare - 800tk
// Is student will get 50% off
// if age >= 10 will get free ticket
// if senior citizen or age <= 62

var originalPrice = 800;
var isStudent = true;
var age = 10;
var seniorCitizen = 60;

if (age > 10) {
  +console.log("You got the free ticket");
} else if (!isStudent) {
  console.log(
    "You got the 50% off on your ticket fare:",
    originalPrice - originalPrice * 0.5
  );
} else if (seniorCitizen <= 62) {
  console.log(
    "You got the 5% off on your ticket fare:",
    originalPrice - originalPrice * 0.05
  );
} else {
  console.log("Your ticket price is:", originalPrice);
}
