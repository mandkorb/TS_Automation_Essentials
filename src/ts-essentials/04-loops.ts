function forLoop(): void {
  const numbers: number[] = [1, 2, 3, 4, 5];
  console.log("For loop:");
  for (let i = 0; i < numbers.length; i++) {
    console.log(`Index ${i}: ${numbers[i]}`);
  }
}

function forOfLoop(): void {
  const fruits: string[] = ["apple", "banana", "orange"];
  console.log("For of loop:");
  for (const fruit of fruits) {
    console.log(`Fruit: ${fruit}`);
  }
}

function forInLoop(): void {
  const fruits: { [key: string]: string } = { a: "apple", b: "banana", c: "cherry" };
  console.log("For in loop:");
  for (const obj in fruits) {
    console.log(`Key: ${obj}, Value: ${fruits[obj]}`);
  }
}

function whileLoop(): void {
  let count: number = 5;
  console.log("While loop:");
  while (count > 0) {
    console.log(`Count: ${count}`);
    count--;
  }
}

function doWhileLoop(): void {
  let count: number = 0;
  console.log("Do...while loop:");
  do {
    console.log(`Count: ${count}`);
    count++;
  } while (count < 3);
}

function nestedLoops(): void {
  const matrix: number[][] = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
  console.log("Nested loops:");
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(`Matrix[${i}][${j}]: ${matrix[i][j]}`);
    }
  }
}

function loopControlStatements(): void {
  console.log("Loop control (break and continue):");
  for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    if (i === 5) break;
    console.log(`Number: ${i}`);
  }
}

function arrayIterationMethods(): void {
  const numbers: number[] = [10, 20, 30, 40];
  console.log("Array iteration with forEach:");
  numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
  });

  console.log("Array iteration with map:");
  const doubled: number[] = numbers.map(num => num * 2);
  console.log(`Doubled: ${doubled}`);
}

function typeSafetyInLoops(): void {
  const mixed: (number | string)[] = [1, "two", 3, "four"];
  console.log("Type safety in loops:");
  for (const item of mixed) {
    if (typeof item === "number") {
      console.log(`Number: ${item * 2}`);
    } else {
      console.log(`String: ${item.toUpperCase()}`);
    }
  }

  let maybeArray: number[] | undefined;
  console.log("Checking undefined array:");
  if (maybeArray) {
    for (const num of maybeArray) {
      console.log(num); // Never reached
    }
  } else {
    console.log("Array is undefined");
  }
}

function loops(): void {
  console.log("=== For Loop ===");
  forLoop();
  console.log("\n=== For...of Loop ===");
  forOfLoop();
  console.log("\n=== For...in Loop ===");
  forInLoop();
  console.log("\n=== While Loop ===");
  whileLoop();
  console.log("\n=== Do...while Loop ===");
  doWhileLoop();
  console.log("\n=== Nested Loops ===");
  nestedLoops();
  console.log("\n=== Loop Control Statements ===");
  loopControlStatements();
  console.log("\n=== Array Iteration Methods ===");
  arrayIterationMethods();
  console.log("\n=== Type Safety in Loops ===");
  typeSafetyInLoops();
}

loops();