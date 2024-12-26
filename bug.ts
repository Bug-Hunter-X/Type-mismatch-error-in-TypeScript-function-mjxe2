function printAllNumbers(numbers: number[]): void {
  numbers.forEach(number => {
    console.log(number);
  });
}

const myNumbers: number[] = [1, 2, 3, 4, 5];
printAllNumbers(myNumbers); //this will work correctly

const myMixedArray: (number | string)[] = [1, 2, "3", 4, 5];
printAllNumbers(myMixedArray); //this will throw an error because of type mismatch