# How Generics Build Reusable and Strictly Typed Code in TypeScript

## Introduction

In programming, we often write similar logic for different data types.

For example:

- Array of strings
- Array of numbers
- Array of objects

Writing separate code for each type creates duplication.

This is where **Generics** become powerful.

Generics help us create reusable components and functions while keeping full type safety.

In this blog, we will learn:

- What Generics are
- Why they are useful
- Generic Arrays
- Generic Functions
- Generic Interfaces

---

# What are Generics?

Generics allow us to write flexible and reusable code.

Instead of hardcoding a specific type, we use a placeholder type.

Common generic names:

- `T`
- `X`
- `Y`

---

# Generic Array Example

Without generics:

```ts
const friends: string[] = ["Mr. X", "Mr. Y"];
const rollNumbers: number[] = [1, 2, 3];
```

With generics:

```ts
type GenericArray<T> = Array<T>;

const friends: GenericArray<string> = [
  "Mr. X",
  "Mr. Y",
  "Mr. Z",
];

const rollNumbers: GenericArray<number> = [
  4,
  7,
  11,
];

const isEligibleList: GenericArray<boolean> = [
  true,
  false,
  true,
];
```

Here, the same `GenericArray` works for multiple types.

This reduces code duplication.

---

# Generic with Object Types

```ts
type User = {
  name: string;
  age: number;
};

const userList: GenericArray<User> = [
  {
    name: "Mr. X",
    age: 22,
  },
  {
    name: "Mr. Y",
    age: 25,
  },
];
```

Generics also work perfectly with custom object types.

---

# Generic Tuple Example

```ts
type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [
  20,
  30,
];

const coordinates2: Coordinates<string, string> = [
  "20",
  "30",
];
```

This makes tuples dynamic and reusable.

---

# Generic Function

Without generics, we may write multiple functions:

```ts
const createArrayWithString = (value: string) => [
  value,
];

const createArrayWithNumber = (value: number) => [
  value,
];
```

This creates repetitive code.

Using Generics:

```ts
const createArrrayWithGeneric = <T>(value: T) => {
  return [value];
};

const arrString = createArrrayWithGeneric("Apple");

const arrNum = createArrrayWithGeneric(222);

const arrObj = createArrrayWithGeneric({
  id: 123,
  name: "Next Level",
});
```

Now one function handles all types safely.

---

# Multiple Generic Parameters

```ts
const createArrayTupleWithGeneric = <X, Y>(
  param1: X,
  param2: Y
) => {
  return [param1, param2];
};

const res1 = createArrayTupleWithGeneric(
  "Israfil",
  false
);

const res2 = createArrayTupleWithGeneric(
  222,
  { name: "Israfil" }
);
```

Output:

```ts
["Israfil", false]
[222, { name: "Israfil" }]
```

---

# Real-Life Generic Example

```ts
const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student2 = {
  id: 321,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMarried: true,
};

const result = addStudentToCourse(student2);

console.log(result);
```

Result:

```ts
{
  course: "Next Level",
  id: 321,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMarried: true
}
```

The function remains reusable while preserving exact types.

---

# Generic Interface Example

```ts
interface Developer<T, X = null> {
  name: string;
  salary: number;
  smartWatch: T;
  bike?: X;
}
```

Now we can use different smartwatch types.

## Example

```ts
interface AppleWatch {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  AiFeature: boolean;
}

const richDeveloper: Developer<AppleWatch> = {
  name: "Mr. Rich",
  salary: 100,
  smartWatch: {
    heartRate: "200",
    callSupport: true,
    calculator: true,
    AiFeature: true,
  },
  bike: null,
};
```

This creates flexible and scalable structures.

---

# Benefits of Generics

Generics provide:

- Reusable code
- Strong type safety
- Better scalability
- Less duplication
- Cleaner code
- Better developer experience

---

# Why Generics Matter in Large Projects

In large TypeScript applications, developers work with many data structures.

Without Generics:

- Code becomes repetitive
- Maintenance becomes difficult
- Type definitions grow larger

With Generics:

- One reusable function can handle multiple types
- Code becomes cleaner
- Applications become easier to scale

This improves overall project quality.

---

# Conclusion

Generics are one of the most powerful features of TypeScript.

They help developers write:

✅ Reusable code  
✅ Flexible structures  
✅ Strictly typed applications

Instead of writing the same logic multiple times, Generics allow us to create dynamic and maintainable code that works with any data type safely.

For large TypeScript projects, mastering Generics is essential.