function basicArrayOperations(): void {
  const numbers: number[] = [1, 2, 3, 4, 5];
  const fruits: Array<string> = ["apple", "banana", "orange"];
  console.log(`Numbers: ${numbers}`);
  console.log(`Fruits: ${fruits}`);
  console.log(`Length: ${numbers.length}`); // 5
  numbers.push(6);
  fruits.push("kiwi");
  console.log(`Numbers after push: ${numbers}`);
  console.log(`Fruits after push: ${fruits}`);
  const popped: number = numbers.pop()!;
  console.log(`Popped: ${popped}, Array: ${numbers}`); // Popped: 6, Array: [1, 2, 3, 4, 5]
}

function arrayIteration(): void {
  const colors: string[] = ["red", "green", "blue"];
  for (const color of colors) {
    console.log(`Color: ${color}`);
  }
  colors.forEach((color, index) => {
    console.log(`Index ${index}: ${color}`);
  });
}

function arrayMethods(): void {
  const numbers: number[] = [10, 20, 30, 40, 50];
  const doubled: number[] = numbers.map(num => num * 2);
  const evens: number[] = numbers.filter(num => num % 2 === 0);
  const sum: number = numbers.reduce((acc, num) => acc + num, 0);
  const found: number | undefined = numbers.find(num => num > 25);
  console.log(`Mapped (doubled): ${doubled}`); // [20, 40, 60, 80, 100]
  console.log(`Filtered (evens): ${evens}`); // [10, 20, 30, 40, 50]
  console.log(`Reduced (sum): ${sum}`); // 150
  console.log(`Found (>25): ${found}`); // 30
}

function arraySlicingAndSplicing(): void {
  const items: string[] = ["a", "b", "c", "d", "e"];
  const sliced: string[] = items.slice(1, 4); // ["b", "c", "d"]
  const spliced: string[] = items.splice(2, 2, "x", "y"); // ["c", "d"]
  console.log(`Sliced: ${sliced}`);
  console.log(`Spliced: ${spliced}, Modified array: ${items}`); // Spliced: ["c", "d"], Modified array: ["a", "b", "x", "y", "e"]
}

function arraySorting(): void {
  const numbers: number[] = [5, 2, 8, 1, 9];
  const words: string[] = ["banana", "apple", "cherry"];
  numbers.sort((a, b) => a - b);
  words.sort();
  console.log(`Sorted numbers: ${numbers}`); // [1, 2, 5, 8, 9]
  console.log(`Sorted words: ${words}`); // ["apple", "banana", "cherry"]
}

function arraySpreadingAndRest(): void {
  const arr1: number[] = [1, 2, 3];
  const arr2: number[] = [4, 5, 6];
  const combined: number[] = [...arr1, ...arr2];
  const [first, ...rest] = arr1.length > 0 ? arr1 : [0];
  console.log(`Combined: ${combined}`); // [1, 2, 3, 4, 5, 6]
  console.log(`First: ${first}, Rest: ${rest}`); // First: 1, Rest: [2, 3]
}

function multiDimensionalArrays(): void {
  const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log(`Matrix: ${matrix}`); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  console.log(`Element at [1][2]: ${matrix[1][2]}`); // 6
}

function typeSafetyWithArrays(): void {
  let mixed: (number | string)[] = [1, "two", 3];
  console.log(`Mixed array: ${mixed}`);
  let maybeNumbers: number[] | undefined;
  if (Array.isArray(maybeNumbers)) {
    console.log(maybeNumbers.map(n => n * 2)); // Never reached
  } else {
    console.log("Array is undefined");
  }
  maybeNumbers = [10, 20, 30];
  if (Array.isArray(maybeNumbers)) {
    console.log(`Mapped: ${maybeNumbers.map(n => n * 2)}`); // [20, 40, 60]
  }
  const readonlyArray: readonly number[] = [1, 2, 3];
  console.log(`Readonly array: ${readonlyArray}`);
}

function arrays(): void {
  console.log("=== Basic Array Operations ===");
  basicArrayOperations();
  console.log("\n=== Array Iteration ===");
  arrayIteration();
  console.log("\n=== Array Methods ===");
  arrayMethods();
  console.log("\n=== Array Slicing and Splicing ===");
  arraySlicingAndSplicing();
  console.log("\n=== Array Sorting ===");
  arraySorting();
  console.log("\n=== Array Spreading and Rest ===");
  arraySpreadingAndRest();
  console.log("\n=== Multi-Dimensional Arrays ===");
  multiDimensionalArrays();
  console.log("\n=== Type Safety ===");
  typeSafetyWithArrays();
}

arrays();