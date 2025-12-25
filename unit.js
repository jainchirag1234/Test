function numberToWords(num) {
  if (num === 0) return "zero";
  if (num < 0) return "minus " + numberToWords(Math.abs(num));

  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const units = ["", "thousand", "million", "billion"];

  function helper(n) {
    if (n < 20) return ones[n];
    if (n < 100)
      return tens[Math.floor(n / 10)] + (n % 10 ? " " + ones[n % 10] : "");
    return (
      ones[Math.floor(n / 100)] +
      " hundred" +
      (n % 100 ? " " + helper(n % 100) : "")
    );
  }

  let i = 0,
    result = "";

  while (num > 0) {
    if (num % 1000 !== 0) {
      result =
        helper(num % 1000) +
        (units[i] ? " " + units[i] : "") +
        (result ? " " + result : "");
    }
    num = Math.floor(num / 1000);
    i++;
  }

  return result;
}

// Test
console.log(numberToWords(11043)); // eleven thousand forty three
console.log(numberToWords(1200000)); // one million two hundred thousand
