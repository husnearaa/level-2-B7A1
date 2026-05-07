# Why `any` is Dangerous and Why `unknown` is a Better Choice in TypeScript

## Introduction

When I first started learning TypeScript, I used the `any` type almost everywhere because it felt easy. If TypeScript showed an error, I simply added `any` and the error disappeared.

At first, it looked helpful. But later I realized that using `any` too much removes one of the biggest advantages of TypeScript — type safety.

In this blog, I’ll explain why `any` is called a “type safety hole”, why `unknown` is a safer option, and how type narrowing helps us write safer code.

---

# What Does `any` Actually Do?

The `any` type basically tells TypeScript:

> “Don’t check this variable anymore.”

That means TypeScript stops giving warnings, suggestions, and protection for that value.

Example:

```ts
let value: any = "Hello";

value = 123;
value = true;

value.toUpperCase();
```

Here, TypeScript allows everything.

But there is a problem.  
`toUpperCase()` only works on strings. If `value` becomes a number or boolean, the application may crash at runtime.

This is why developers call `any` a **type safety hole**.

---

# The Real Problem with `any`

Using `any` may seem convenient in small projects, but in larger applications it creates many problems:

- Hidden bugs
- Runtime errors
- Poor IntelliSense support
- Difficult debugging
- Unsafe code

For example:

```ts
const data: any = 100;

console.log(data.toUpperCase());
```

This code compiles successfully, but running it gives:

```bash
TypeError: data.toUpperCase is not a function
```

TypeScript could not protect us because we disabled type checking using `any`.

---

# Why `unknown` is Safer

The `unknown` type is much safer than `any`.

Like `any`, it can store any kind of value.  
But unlike `any`, TypeScript does not allow us to use the value directly without checking its type first.

Example:

```ts
const value: unknown = "TypeScript";

value.toUpperCase();
```

Now TypeScript shows an error.

This is actually a good thing because it forces us to verify the type before using it.

---

# What is Type Narrowing?

Type narrowing means checking a variable’s type before performing operations on it.

TypeScript then “narrows” the type into a more specific one.

Usually we use:

- `typeof`
- `instanceof`
- conditional checks

This helps TypeScript understand exactly what type we are working with.

---

# Example of Type Narrowing

Here’s a simple example:

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

Output:

```bash
10
10
Wrong Input
```

Here TypeScript understands:

- inside the first condition, `input` is a number
- inside the second condition, `input` is a string

This process is called type narrowing.

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

Without checking the type first, TypeScript would not allow `.length`.

---

# Nullable Types and Safe Checking

Sometimes values can also be `null`.

TypeScript helps us handle those situations safely.

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

This prevents unexpected null-related errors.

---

# When Should We Use `unknown`?

`unknown` is very useful when working with:

- API responses
- User input
- External libraries
- Dynamic data
- JSON data

Example:

```ts
const response: unknown = fetchData();
```

Before using the response, we should first check its type properly.

---

# Conclusion

Using `any` too much removes the safety TypeScript is designed to provide. It may make coding faster at first, but later it can create bugs that are difficult to find.

On the other hand, `unknown` forces us to write safer code by checking types before using values.

That’s why most TypeScript developers prefer:

 `unknown` for unpredictable data  
  unnecessary `any`

In my opinion, learning proper type narrowing is one of the most important steps to becoming comfortable with TypeScript.