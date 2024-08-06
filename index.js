function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let BMI = weight / ((height * height) / 10000);
  alert(BMI);
  const x = 18.5;
  const y = 18.5;
  const d = 24.9;
  const z = 25.0;
  const f = 29.9;
  const s = 30.0;
  if (BMI >= 30) {
    console.log("Above" + " Obesity");
  } else if (BMI <= 29.9 && BMI >= 25) {
    consol.log("overweight");
  } else if (BMI <= 24.9 && BMI >= 18.5) {
    consol.log("Healthy Weightt");
  } else {
    consol.log("Underweight");
  }

  // if (>25.0 && <29.9) {
  //   console.log ("Overweight");
  //   else console. log("Above"+"Obesity");
  //   else console. log("Healthy"+"weight");
  //   else console. log("Under"+"weight");
  // }
  // else console. log("Overweight");
  // else console. log("Healthy"+"weight");
  // else console. log("Under"+"weight");
}
