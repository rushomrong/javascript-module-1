//Or condition

const salary = 25000;
const isBcs = true;
const height = 61;

/*
 "=" single equals means value set
 "==" double equals means compare the value  of left and right side
*/

// we have to full fill one condition or you can fill 2 condition at a time
if (salary > 25000 || height > 72) {
  console.log("Salary accepted");
} else {
  console.log("Salary not accepted");
}

//condition 2
if (salary >= 25000 || height >= 61) {
  console.log("Salary Accepted");
} else {
  console.log("Salary Not Accepted");
}

//condition 3
if (salary > 20000 && height >= 61) {
  console.log("You are selected");
} else {
  console.log("You are not selected");
}

//more and more condition
if (salary > 25000 || height > 70 || isBcs == true) {
  console.log("You are selected for BCS");
} else {
  console.log("You are not selected");
}
