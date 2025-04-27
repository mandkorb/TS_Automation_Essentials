function basicStringOperations(): void {
    const str: string = "Hello, TypeScript!";
    const length: number = str.length;
    const upper: string = str.toUpperCase();
    const lower: string = str.toLowerCase();
    console.log(`Length: ${length}`); // 17
    console.log(`Uppercase: ${upper}`); // HELLO, TYPESCRIPT!
    console.log(`Lowercase: ${lower}`); // hello, typescript!
}

function stringSlicing(): void {
    const str: string = "TypeScript is awesome";
    const slice: string = str.slice(0, 10); // TypeScript
    const substring: string = str.substring(11, 13); // is
    console.log(`Slice: ${slice}`);
    console.log(`Substring: ${substring}`);
}

function stringSearching(): void {
    const str: string = "Learn TypeScript today";
    const includes: boolean = str.includes("TypeScript"); // true
    const indexOf: number = str.indexOf("today"); // 16
    const startsWith: boolean = str.startsWith("Learn"); // true
    const endsWith: boolean = str.endsWith("today"); // true
    console.log(`Includes: ${includes}`);
    console.log(`IndexOf: ${indexOf}`);
    console.log(`StartsWith: ${startsWith}`);
    console.log(`EndsWith: ${endsWith}`);
}

function stringReplacement(): void {
    const str: string = "I like JavaScript";
    const replaced: string = str.replace("JavaScript", "TypeScript"); // I like TypeScript
    const regexReplaced: string = str.replace(/JavaScript/g, "TypeScript"); // I like TypeScript
    console.log(`Replaced: ${replaced}`);
    console.log(`Regex Replaced: ${regexReplaced}`);
}

function stringSplittingAndJoining(): void {
    const str: string = "apple,banana,orange";
    const split: string[] = str.split(","); // ["apple", "banana", "orange"]
    const joined: string = split.join(";"); // apple;banana;orange
    console.log(`Split: ${split}`);
    console.log(`Joined: ${joined}`);
}

function stringTrimming(): void {
    const str: string = "   Hello, TypeScript!   ";
    const trimmed: string = str.trim(); // Hello, TypeScript!
    const trimStart: string = str.trimStart(); // Hello, TypeScript!
    const trimEnd: string = str.trimEnd(); //    Hello, TypeScript!
    console.log(`Trimmed: '${trimmed}'`);
    console.log(`TrimStart: '${trimStart}'`);
    console.log(`TrimEnd: '${trimEnd}'`);
}

function stringTemplateLiterals(): void {
    const name: string = "Alice";
    const age: number = 30;
    const greeting: string = `Hello, ${name}! You are ${age} years old.`;
    console.log(`Template Literal: ${greeting}`); // Hello, Alice! You are 30 years old.
}

function stringUnicodeAndEscaping(): void {
    const unicode: string = "Caf\u00e9"; // Café
    const escaped: string = "Line1\nLine2"; // Line1\nLine2
    console.log(`Unicode: ${unicode}`);
    console.log(`Escaped: ${escaped}`);
}

function typeSafetyWithStrings(): void {
    let maybeString: string | undefined;
    if (typeof maybeString === "string") {
        console.log(maybeString.toUpperCase()); // Never reached
    } else {
        console.log("String is undefined");
    }

    maybeString = "TypeScript";
    if (typeof maybeString === "string") {
        console.log(`Type narrowed: ${maybeString.toUpperCase()}`); // TYPESCRIPT
    }

    const literal: "hello" = "hello";
    console.log(`Literal type: ${literal}`);
}

function strings(): void {
    console.log("=== Basic String Operations ===");
    basicStringOperations();
    console.log("\n=== String Slicing ===");
    stringSlicing();
    console.log("\n=== String Searching ===");
    stringSearching();
    console.log("\n=== String Replacement ===");
    stringReplacement();
    console.log("\n=== String Splitting and Joining ===");
    stringSplittingAndJoining();
    console.log("\n=== String Trimming ===");
    stringTrimming();
    console.log("\n=== Template Literals ===");
    stringTemplateLiterals();
    console.log("\n=== Unicode and Escaping ===");
    stringUnicodeAndEscaping();
    console.log("\n=== Type Safety ===");
    typeSafetyWithStrings();
}

strings();