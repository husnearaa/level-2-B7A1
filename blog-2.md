# How Generics Help Build Reusable and Type-Safe Code in TypeScript

## Introduction

One thing I noticed while learning TypeScript is that we often write the same logic again and again for different types of data.

For example:

- array of strings
- array of numbers
- array of objects

The logic is almost the same, only the types are different.

This is where Generics become really useful.

Generics help us write reusable code while still keeping everything strongly typed. Instead of creating separate functions or types repeatedly, we can write flexible code that works with multiple data types.

In this blog, I’ll explain Generics in a simple way using small examples.

---

# What are Generics?

Generics allow us to create dynamic and reusable types.

Instead of hardcoding a specific type like `string` or `number`, we use a placeholder type.

Usually developers use names like:

- `T`
- `X`
- `Y`

These are just temporary type variables.

---

# Generic Array Example

Without Generics:

```ts
const friends: string[] = ["Mr. X", "Mr. Y"];
const rollNumbers: number[] = [1, 2, 3];
```

This works fine, but we keep repeating similar structures.

Using Generics:

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

Now one reusable type handles multiple data types.

This keeps the code cleaner and easier to maintain.

---

# Using Generics with Objects

Generics also work nicely with custom object types.

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

Here, TypeScript still keeps full type safety for the object properties.

---

# Generic Tuple Example

We can also use Generics with tuples.

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

This makes tuple types reusable as well.

---

# Generic Functions

Before learning Generics, many beginners create separate functions for separate data types.

Example:

```ts
const createArrayWithString = (value: string) => [
  value,
];

const createArrayWithNumber = (value: number) => [
  value,
];
```

This creates unnecessary repetition.

Using Generics, we can solve this with a single function.

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

Now the same function works for strings, numbers, and objects while preserving the correct type.

---

# Multiple Generic Parameters

Sometimes we need multiple dynamic types together.

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

This makes the function even more flexible.

---

# Real-Life Example

Here’s a practical example:

```ts
const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student2 = {
  id: 321,
  name: "Mr Hero",
  hasCar: true,
  isMarried: true,
};

const result = addStudentToCourse(student2);

console.log(result);
```

Output:

```ts
{
  course: "Next Level",
  id: 321,
  name: "Mr Hero",
  hasCar: true,
  isMarried: true
}
```

The interesting part is that TypeScript automatically understands all properties correctly.

---

# Generic Interfaces

Generics also work with interfaces.

```ts
interface Developer<T, X = null> {
  name: string;
  salary: number;
  smartWatch: T;
  bike?: X;
}
```

Now we can customize the types dynamically.

Example:

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

This makes interfaces scalable and reusable.

---

# Why Generics are Important

After practicing Generics, I realized they help a lot in large projects.

Benefits include:

- less repetitive code
- better type safety
- reusable functions
- cleaner architecture
- easier maintenance

Without Generics, projects can become messy very quickly.

---

# Conclusion

At first, Generics may look difficult or confusing. But after using them in a few examples, they become much easier to understand.

In my opinion, Generics are one of the best features of TypeScript because they help developers write reusable and strongly typed code at the same time.

Instead of writing the same logic repeatedly, we can create flexible solutions that work with different types safely and efficiently.