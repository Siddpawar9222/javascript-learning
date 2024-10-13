### What are JavaScript Modules?

In simple terms, **modules** in JavaScript are just pieces of code that you can break apart into smaller, reusable files. This helps you organize your code better and makes it easier to manage.

For example, you might have:
- A file for handling user login
- A file for managing data from a database(apis)
- A file for displaying the UI

With modules, you can keep these parts separate and **import** or **export** them as needed.

### Why Use Modules?

- **Code Organization**: Modules allow you to keep your code in smaller files, which are easier to read and maintain.
- **Reusability**: You can reuse the same code in different parts of your application by importing it where you need it.
- **Encapsulation**: You can hide certain parts of the code inside modules so that only the necessary parts are exposed (made public) to other files.

### How to Use Modules in JavaScript?

There are two main actions when working with modules:
1. **Exporting**: Sharing code from one module.
2. **Importing**: Bringing code into another module to use.

#### 1. **Exporting** Modules

When you have a function, variable, or object that you want to use in another file, you need to **export** it.

Here’s a simple example:

##### `mathUtils.js` (this is your module)
```js
// Exporting a function
export function add(a, b) {
  return a + b;
}

// Exporting a variable
export const PI = 3.14159;
```

In the code above:
- We are exporting the `add` function and `PI` variable. Now, they can be used in another file.

#### 2. **Importing** Modules

Once something is exported, you can **import** it in a different file and use it.

##### `app.js` (this is where you use the exported code)
```js
// Importing the function and variable
import { add, PI } from './mathUtils.js';

console.log(add(5, 3));  // Output: 8
console.log(PI);         // Output: 3.14159
```

In the code above:
- We **imported** the `add` function and `PI` variable from the `mathUtils.js` module.

### Types of Exports:

1. **Named Exports** (the example above):
   - You export multiple things and specify their names when importing.
   - Use `{}` brackets to import them.

2. **Default Exports**:
   - Each file can also export **one thing as the default**.
   - When importing, you don’t need to use `{}` brackets, and you can name it whatever you like.

#### Example of Default Export:

##### `greeting.js`
```js
// Default export
export default function greet() {
  console.log("Hello!");
}
```

##### `app.js`
```js
// Importing the default export (no {})
import greet from './greeting.js';

greet();  // Output: "Hello!"
```


---


### **Properties of Named Exports and Default Exports**



---

### **Comparison: Named Exports vs Default Exports**

| **Property**               | **Named Exports**                                             | **Default Exports**                                           |
|----------------------------|---------------------------------------------------------------|---------------------------------------------------------------|
| **How many exports allowed**| Multiple exports per module                                   | Only one default export per module                            |
| **Import syntax**           | Must use curly braces `{}` to import specific items           | No curly braces, can import with any name                     |
| **Export syntax**           | `export { item1, item2 }`                                     | `export default item`                                         |
| **Renaming during import**  | Can rename with `as` (e.g., `import { item as newItem }`)     | Can use any name directly                                     |
| **Re-exporting**            | Can be re-exported using named export syntax                  | Can be re-exported by renaming to another default or named export |
| **Best used for**           | Multiple functions, constants, utilities in one module        | One main function, class, or component per module             |

---

