 # First TypeScript Project

This project is a starting point for setting up TypeScript and learning its type system.

## Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm)
- A code editor, such as Visual Studio Code

## Set up

Open a terminal in the project folder and run:

```bash
npm init -y
npm install --save-dev typescript
npx tsc --init
```

Create a `src` folder and add a `src/index.ts` file. Compile it with:

```bash
npx tsc
```

The TypeScript compiler reads `tsconfig.json` and emits JavaScript. You can run the generated JavaScript with Node.js.

## Learning TypeScript types

Try these concepts in `src/index.ts`:

```ts
// Primitive types
const studentName: string = "Daria";
const lessonNumber: number = 7;
const completed: boolean = false;

// Arrays and object shapes
const topics: string[] = ["strings", "numbers", "booleans"];

type Student = {
	name: string;
	lesson: number;
	completed: boolean;
};

const student: Student = {
	name: studentName,
	lesson: lessonNumber,
	completed,
};

// Function parameter and return types
function describeStudent(value: Student): string {
	return `${value.name} is on lesson ${value.lesson}.`;
}

console.log(topics, describeStudent(student));
```

Continue by practicing:

- **Type inference:** omit an annotation when TypeScript can infer the type.
- **Union types:** allow a value to have more than one type, such as `string | number`.
- **Optional properties:** mark a property optional with `?`.
- **Interfaces:** describe the shape of objects with `interface`.
- **Generics:** write reusable functions and types that work with different value types.

## Useful commands

```bash
npx tsc --noEmit  # Check types without generating JavaScript
npx tsc           # Compile according to tsconfig.json
```

