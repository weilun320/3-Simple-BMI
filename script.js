function calculateBMI() {
  const firstName = prompt("What is your first name?");
  const weight = parseFloat(prompt("What is your weight (kg)?"));
  const height = parseFloat(prompt("What is your height (metres)?"));
  const bmi = weight / (height * height);

  alert(`${firstName}, your BMI is ${bmi}`);
}