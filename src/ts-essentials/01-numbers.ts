function basicOperations(): void {
    const a: number = 42;
    const b: number = 3.14;
    console.log(`Addition: ${a + b}`); // 45.14
    console.log(`Subtraction: ${a - b}`); // 38.86
    console.log(`Multiplication: ${a * b}`); // 131.88
    console.log(`Division: ${a / b}`); // 13.375...
    console.log(`Modulo: ${a % 5}`); // 2
    console.log(`Exponentiation: ${a ** 2}`); // 1764
}

function numberMethods(): void {
    const num: number = 123.45678;
    console.log(`toFixed(2): ${num.toFixed(2)}`); // 123.46
    console.log(`toPrecision(6): ${num.toPrecision(5)}`); // 123.46
    console.log(`toExponential(2): ${num.toExponential(2)}`); // 1.23e+2
    console.log(`toString(16): ${num.toString(16)}`); // 7b.74bc6a7ef9db
}

function numericLiterals(): void {
    const decimal: number = 42.22;
    const hex: number = 0x2a; // 42
    const binary: number = 0b101010; // 42
    const octal: number = 0o52; // 42
    const separator: number = 1_000_000; // 1000000
    console.log(`Decimal: ${decimal}, Hex: ${hex}, Binary: ${binary}, Octal: ${octal}`);
    console.log(`With separator: ${separator}`);
}

function parsingNumbers(): void {
    const intStr: string = "42";
    const floatStr: string = "3.14";
    const invalid: string = "abc";
    console.log(`parseInt: ${parseInt(intStr, 10)}`); // 42
    console.log(`parseFloat: ${parseFloat(floatStr)}`); // 3.14
    console.log(`Number: ${Number(floatStr)}`); // 3.14
    console.log(`parseInt invalid: ${parseInt(invalid, 10)}`); // NaN
}

function edgeCases(): void {
    const nan: number = NaN;
    const infinity: number = Infinity;
    const floatIssue: number = 0.1 + 0.2; // 0.3...
    console.log(`Is NaN: ${isNaN(nan)}`); // true
    console.log(`Is Finite: ${isFinite(infinity)}`); // false
    console.log(`Floating point issue: ${floatIssue}`); // 0.30000000000000004
    console.log(`Fixed: ${(0.1 + 0.2).toFixed(1)}`); // 0.3
}

function mathFunctions(): void {
    const num: number = -3.7;
    console.log(`Math.abs: ${Math.abs(num)}`); // 3.7
    console.log(`Math.floor: ${Math.floor(num)}`); // -4
    console.log(`Math.ceil: ${Math.ceil(num)}`); // -3
    console.log(`Math.round: ${Math.round(num)}`); // -4
    console.log(`Math.random: ${Math.random()}`); // 0 to 1
}

function bigintDemo(): void {
    const big: bigint = 12345678901234567890n;
    const bigger: bigint = big * 2n;
    console.log(`BigInt: ${big}`); // 12345678901234567890
    console.log(`BigInt multiplied: ${bigger}`); // 24691357802469135780
}

function typeSafety(): void {
    let numOrUndefined: number | undefined;
    if (typeof numOrUndefined === "number") {
        console.log(numOrUndefined.toFixed(2)); // Never reached
    } else {
        console.log("Number is undefined");
    }

    numOrUndefined = 42;
    if (typeof numOrUndefined === "number") {
        console.log(`Type narrowed: ${numOrUndefined.toFixed(2)}`); // 42.00
    }

    const literal: 42 = 42;
    console.log(`Literal type: ${literal}`);
}

function main(): void {
    console.log("=== Basic Operations ===");
    basicOperations();
    console.log("\n=== Number Methods ===");
    numberMethods();
    console.log("\n=== Numeric Literals ===");
    numericLiterals();
    console.log("\n=== Parsing Numbers ===");
    parsingNumbers();
    console.log("\n=== Edge Cases ===");
    edgeCases();
    console.log("\n=== Math Functions ===");
    mathFunctions();
    console.log("\n=== BigInt ===");
    bigintDemo();
    console.log("\n=== Type Safety ===");
    typeSafety();
}

main();