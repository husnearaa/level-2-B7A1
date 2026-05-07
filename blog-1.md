# Why `any` is a Type Safety Hole and Why `unknown` is Safer in TypeScript

## Introduction

TypeScript is popular because it adds **type safety** to JavaScript.  
But sometimes we work with unpredictable data such as API responses, user inputs, or third-party libraries. In these situations, many beginners use the `any` type.

Although `any` seems easy, it creates a dangerous problem called a **type safety hole**.

A safer alternative is `unknown`.

In this blog, we will learn:

- Why `any` is unsafe
- Why `unknown` is better
- What type narrowing means
- How TypeScript helps prevent runtime errors

---

# What is `any`?

The `any` type disables TypeScript checking completely.

When a variable becomes `any`, TypeScript stops protecting your code.

## Example of `any`

```ts
let value: any = "Hello";

value = 123;
value = true;

value.toUpperCase(); // No TypeScript error!
```

Here, `toUpperCase()` works only on strings.  
But TypeScript does not show any error because `value` is `any`.

This can create runtime errors.

That is why `any` is called a **type safety hole**.

---

# Problems with `any`

Using `any` can:

- Hide bugs
- Break IntelliSense support
- Reduce code quality
- Cause runtime crashes
- Make debugging difficult

## Runtime Error Example

```ts
const data: any = 100;

console.log(data.toUpperCase());
```

### Output

```bash
TypeError: data.toUpperCase is not a function
```

TypeScript could not help because we used `any`.

---

# Why `unknown` is Safer

The `unknown` type is the safer version of `any`.

It accepts all types, but TypeScript forces us to check the type before using it.

## Example of `unknown`

```ts
const value: unknown = "TypeScript";

// Error
value.toUpperCase();
```

TypeScript gives an error because it does not know the actual type.

Before using the value, we must check the type.

---

# What is Type Narrowing?

Type narrowing means reducing a broad type into a specific type using checks like:

- `typeof`
- `instanceof`
- `in`
- condition checking

After narrowing, TypeScript understands the correct type.

---

# Example of Type Narrowing

```ts
const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountedPrice = input * 0.1;
    console.log(discountedPrice);
  } else if (typeof input === "string") {
    const [price] = input.split(" ");
    console.log(Number(price) * 0.1);
  } else {
    console.log("Wrong Input");
  }
};

discountCalculator(100);
discountCalculator("100 TK");
discountCalculator(null);
```

## Output

```bash
10
10
Wrong Input
```

Here:

- `typeof input === "number"` narrows input to number
- `typeof input === "string"` narrows input to string

This makes the code safe and predictable.

---

# Another Simple Example

```ts
const printLength = (value: unknown) => {
  if (typeof value === "string") {
    console.log(value.length);
  } else {
    console.log("Not a string");
  }
};

printLength("Hello");
printLength(123);
```

Without narrowing, TypeScript would not allow `.length`.

---

# Nullable Type Example

Sometimes data can be `null`.  
TypeScript helps us handle this safely.

```ts
const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log("From DB: ALL USER");
  }
};

getUser(null);
```

This prevents unexpected null errors.

---

# When Should You Use `unknown`?

Use `unknown` when dealing with:

- API responses
- User input
- External libraries
- Dynamic data
- JSON parsing

Example:

```ts
const response: unknown = fetchData();
```

Then narrow the type safely before use.

---

# Conclusion

`any` removes TypeScript safety, which can create hidden bugs and runtime errors.  
That is why it is called a **type safety hole**.

On the other hand, `unknown` keeps your code safe by forcing proper type checks.

Using **type narrowing** helps TypeScript understand the actual data type and prevents unexpected errors.

So, whenever possible:

 Prefer `unknown`  
 Avoid unnecessary `any`

Better type safety means better and more maintainable applications.