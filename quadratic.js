// Quadratic Equation 
// function solveQuadraticEquation(){
//     const discriminant = b ** 2 - 4 * a * c;
//     if (discriminant < 0){
//     return "No real solution"
// } else if (discriminant === 0) {
//     return [-b / (2 * a)];
// } else {
//     const sqrtDiscrminant = Math.sqrt(discrminant);
//     return [(-b + sqrtDiscrminant) / (2 * a), (-b -sqrtDiscrminant) / (2 * a)];
// }

// }

// const a = 1;
// const b = -3;
// const c = 2 ;
// const solution = solveQuadraticEquation(a, b, c);
// console.log('The solution to the quadratic equation ${a}x^2 + ${b}x + ${c} = 0 are ${solutions}');

// program to solve quadratic equation
let root1, root2;

// take input from the user
let a = 1;
let b = -3;
let c = 2;

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}