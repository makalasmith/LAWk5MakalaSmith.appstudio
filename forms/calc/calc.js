function Calculate(num1, num2){
  let answer = num1 + num2
  return answer
  }
  
let userNumber1 = Number(prompt("What is your first number?"))
let userNumber2 = Number(prompt("What is your second number?"))

let summedNumber = Calculate(userNumber1, userNumber2)

console.log(`The sum of ${userNumber1} and ${userNumber2} is ${summedNumber}`)