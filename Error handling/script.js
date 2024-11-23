let number = prompt("Enter the number between 1 to 20: ");

if (number < 20) {
  let i = 20;
  while (number < i) {
    console.log(number + 1);
    number++;
  }
} else {
  console.log("The number enterd is too bit for the calculation...");
}
