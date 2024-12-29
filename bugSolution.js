function add(a, b) {
  // Explicit type checking 
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return 'Invalid input.  Both parameters must be numbers.';
  }
}

console.log(add(2, 2)); // Output: 4
console.log(add(2, '2')); // Output: Invalid input. Both parameters must be numbers.