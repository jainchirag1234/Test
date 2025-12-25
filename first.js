function isConsecutive(str) {
  const arr = str.split("-").map(Number);

  let diff = arr[1] - arr[0]; // +1 or -1

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }
  return true;
}

// Test
console.log(isConsecutive("10-9-8-7-6")); // true
console.log(isConsecutive("1-2-3-4-5")); // true
console.log(isConsecutive("1-3-4-5-6")); // false
