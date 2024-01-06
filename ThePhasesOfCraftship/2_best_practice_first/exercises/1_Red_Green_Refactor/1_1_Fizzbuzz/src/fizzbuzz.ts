export function fizzBuzz(number: number) {
  if (typeof number != "number") throw new Error("Input must  be a number");
  else if (number < 1) throw new Error("Number must not be less than 1");
  else if (number > 100) throw new Error("Number must not be above 100");
  else if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
  else if (number % 3 === 0) return "Fizz";
  else if (number % 5 === 0) return "Buzz";
  else return number.toString();
}
