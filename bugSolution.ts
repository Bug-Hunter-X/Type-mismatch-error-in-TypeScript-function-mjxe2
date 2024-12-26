function printAllNumbers(numbers: (number | string)[]): void {
  numbers.forEach(number => {
    if (typeof number === 'number') {
      console.log(number);
    } else {
      console.log(`Skipping non-number element: ${number}`);
    }
  });
}

const myNumbers: number[] = [1, 2, 3, 4, 5];
printAllNumbers(myNumbers);

const myMixedArray: (number | string)[] = [1, 2, "3", 4, 5];
printAllNumbers(myMixedArray); 