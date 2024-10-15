import React, { useState } from "react";
import "./Demo.css"; // Import your custom CSS

// JavaScript examples with explanations, code snippets, and descriptions
const jsExamples = [
  {
    id: 1,
    title: "Check if a String is a Palindrome",
    code: `function palindrome(str) {
  str = str.toLowerCase();
  return str == str.split("").reverse().join("");
}
console.log(palindrome("level"));`,
    description:
      "This function checks if a string is a palindrome. It converts the string to lowercase, splits it into an array, reverses the array, joins it back into a string, and compares it with the original.",
  },
  {
    id: 2,
    title: "Find a Number in a Large Array",
    code: `const array = Array(3000000).fill().map((_, i) => i + 1);
const numberToFind = 1500000;
const isPresent = array.includes(numberToFind);
console.log(isPresent);`,
    description:
      "This code checks if a number exists in a large array using the `includes()` method. It returns true if the number is found, otherwise false.",
  },
  {
    id: 3,
    title: "Add Elements to Beginning and End of an Array",
    code: `let myArray = ['a', 'b', 'c', 'd'];
myArray = ['start', ...myArray, 'end'];
console.log(myArray);`,
    description:
      "This code adds elements at the beginning and end of an array using the spread operator.",
  },
  {
    id: 4,
    title: "Use of Strict Mode",
    code: `'use strict';
var x = 10;
x = 20; // In strict mode, this will throw an error if x was not declared properly.
console.log(x);`,
    description:
      "'use strict' is a way to enforce stricter parsing and error handling in JavaScript code. It helps catch common coding mistakes and makes debugging easier.",
  },
  {
    id: 5,
    title: "Using Generators",
    code: `function* evenNumbers() {
  let num = 0;
  while (true) {
    yield num;
    num += 2;
  }
}
const iterator = evenNumbers();
console.log(iterator.next().value);  // Output: 0
console.log(iterator.next().value);  // Output: 2`,
    description:
      "A generator function pauses execution with `yield` and resumes with `next()`. This example generates even numbers indefinitely.",
  },
  {
    id: 6,
    title: "Hoisting Example",
    code: `var number = 10;
function display() {
  console.log(number); // undefined due to hoisting
  var number = 20;
}
display();`,
    description:
      "Hoisting in JavaScript moves variable declarations to the top of their scope. In this example, `var number` inside `display()` is hoisted, so `console.log` prints undefined.",
  },
  {
    id: 7,
    title: "Anonymous Function in Array Map",
    code: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled);`,
    description:
      "Anonymous functions are unnamed functions, often used as arguments to other functions. In this example, `map` uses an anonymous function to double the numbers in an array.",
  },
  {
    id: 8,
    title: "Arrow Functions",
    code: `const double = num => num * 2;
  const isEven = num => num % 2 === 0;
  console.log(double(4)); // 8
  console.log(isEven(3)); // false`,
    description:
      "Arrow functions provide a concise syntax for writing functions in JavaScript. They automatically bind the context and don't have their own `this` keyword.",
  },
  {
    id: 9,
    title: "Closure Example",
    code: `function first() {
    var a = 5;
    function second() {
      console.log(a, b); // ReferenceError due to b being in block scope
    }
    let b = 6;
    return second;
  }
  first()();`,
    description:
      "Closures allow functions to access variables from their outer scope even after the outer function has returned. In this example, `a` is accessible inside `second`, but `b` is block-scoped and throws an error.",
  },
  {
    id: 10,
    title: "Closure with var in a Loop",
    code: `for (var i = 0; i <= 3; i++) {
    print(i);
  }
  
  function print(i) {
    setTimeout(() => {
      console.log(i); // Prints 4 four times due to var being function-scoped
    }, 1);
  }`,
    description:
      "Using `var` in loops can lead to unexpected behavior because `var` is function-scoped. In this case, the loop finishes before `setTimeout` runs, resulting in `i` being 4 in all cases. Using `let` would solve this issue.",
  },
  {
    id: 11,
    title: "Object.freeze() vs const",
    code: `const myArray = [1, 2, 3];
  myArray.push(4); // This is allowed
  // myArray = [4, 5, 6]; // This throws an error
  
  const myObj = Object.freeze({ a: 1, b: 2 });
  myObj.a = 3; // This fails silently or throws an error in strict mode
  console.log(myArray, myObj);`,
    description:
      "`const` makes the reference immutable, but the value is still mutable. `Object.freeze()` creates an object whose properties cannot be changed.",
  },
  {
    id: 12,
    title: "Shallow Copy vs Deep Copy",
    code: `let original = [1, 2, [3, 4]];
  let shallowCopy = original;
  shallowCopy[2][0] = 5;
  console.log(original); // [1, 2, [5, 4]]
  console.log(shallowCopy); // [1, 2, [5, 4]]`,
    description:
      "A shallow copy only copies the references of nested objects. In this case, modifying the nested array in the shallow copy also affects the original.",
  },
  {
    id: 13,
    title: "Var, Let, and Const",
    code: `function abc() {
    console.log(a); // undefined due to hoisting
    var a = 10;
  
    console.log(c); // ReferenceError: Cannot access 'c' before initialization
    const c = 3;
  
    console.log(b); // ReferenceError: Cannot access 'b' before initialization
    let b;
  }
  abc();`,
    description:
      "`var` is hoisted and initialized with `undefined`. `let` and `const` are hoisted but remain uninitialized, causing a `ReferenceError` if accessed before assignment.",
  },
  {
    id: 14,
    title: "Memoization",
    code: `const memoize = (fn) => {
    const cache = {};
    return (...args) => {
      const key = JSON.stringify(args);
      if (cache[key]) {
        return cache[key];
      }
      const result = fn(...args);
      cache[key] = result;
      return result;
    };
  };
  
  const add = (a, b) => a + b;
  const memoizedAdd = memoize(add);
  console.log(memoizedAdd(1, 2)); // 3
  console.log(memoizedAdd(1, 2)); // Cached result: 3`,
    description:
      "Memoization is a technique for optimizing performance by caching the results of expensive function calls and returning the cached result when the same inputs are used.",
  },
  {
    id: 15,
    title: "Event Loop Example",
    code: `console.log("a");
  setTimeout(() => {
    console.log("in timeout");
  }, 0);
  Promise.resolve(() => console.log("pro")).then((res) => res());
  console.log("b");`,
    description:
      "The event loop in JavaScript handles asynchronous callbacks. The code runs synchronously first (logs 'a' and 'b'), then processes microtasks (Promise), and finally handles macrotasks (setTimeout).",
  },
  {
    id: 16,
    title: "Event Loop with Asynchronous Code",
    code: `console.log("a");
  setTimeout(() => {
    console.log("in timeout");
  }, 0);
  Promise.resolve(() => console.log("pro")).then((res) => res());
  console.log("b");`,
    description:
      "This demonstrates how the event loop processes asynchronous tasks. The code runs synchronously, printing 'a' and 'b', while asynchronous tasks (Promise and setTimeout) are handled later, resulting in 'pro' and 'in timeout' after.",
  },
  {
    id: 17,
    title: "Infinite Currying",
    code: `function add(a) {
    return function (b) {
      if (b) return add(a + b);
      return a;
    };
  }
  console.log(add(5)(5)(5)(1)()); // Output: 16`,
    description:
      "Currying is a technique of evaluating functions with multiple arguments, one at a time. This example demonstrates infinite currying by summing numbers.",
  },
  {
    id: 18,
    title: "Chaining Methods with Objects",
    code: `const calc = {
    total: 0,
    add(a) {
      this.total += a;
      return this;
    },
    multiply(b) {
      this.total *= b;
      return this;
    },
    substract(c) {
      this.total -= c;
      return this;
    },
    divide(d) {
      this.total /= d;
      return this;
    },
  };
  const result = calc.add(5).multiply(2).substract(1).divide(2).add(3);
  console.log(result.total);`,
    description:
      "This example shows how to use method chaining on an object by returning `this` from each method. It allows multiple operations in sequence on the same object.",
  },
  {
    id: 19,
    title: "Synchronous vs Asynchronous Code",
    code: `// Synchronous code
  console.log("first");
  console.log("in between");
  console.log("second");
  
  // Asynchronous code
  console.log("first");
  setTimeout(() => {
    console.log("in between");
  }, 0);
  console.log("second");`,
    description:
      "Synchronous code executes line by line. Asynchronous code (using `setTimeout`) schedules tasks to be executed later, allowing the rest of the code to continue running.",
  },
  {
    id: 20,
    title: "Callback Example",
    code: `console.log("start");
  function firstCall(input) {
    setTimeout(() => {
      return "hello world " + input;
    }, 500);
  }
  
  function secondCall(input, cb) {
    setTimeout(() => {
      cb("hello world " + input);
    }, 500);
  }
  
  const message = firstCall(1);
  console.log(message);
  
  secondCall(2, (res) => {
    console.log(res);
  });
  console.log("finish");`,
    description:
      "Callbacks are functions passed as arguments to other functions. They are used to handle asynchronous operations. In this example, the second callback allows logging asynchronously.",
  },
  {
    id: 21,
    title: "Promises and Error Handling",
    code: `console.log("start");
  const sub = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = false;
      if (result) resolve("successful");
      else reject(new Error("failed"));
    }, 2000);
  });
  sub.then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });
  console.log("finish");`,
    description:
      "Promises handle asynchronous operations in JavaScript. They allow chaining operations with `.then()` and handle errors with `.catch()`. This example demonstrates a resolved and rejected Promise.",
  },
  {
    id: 22,
    title: "Reverse a String Without Using Built-in Functions",
    code: `function reverseAString(str) {
    let output = "";
    for (let i = str.length - 1; i >= 0; i--) {
      output += str[i];
    }
    return output;
  }
  console.log(reverseAString("abhi"));`,
    description:
      "This code demonstrates how to reverse a string without using built-in functions by looping through the string in reverse order and building a new string.",
  },
  {
    id: 23,
    title: "Closure with var in Loop",
    code: `function clos() {
    for (var i = 1; i <= 5; i++) {
      setTimeout(() => {
        console.log(i); // Outputs 6 five times due to var being function-scoped
      }, 1000);
    }
  }
  clos();`,
    description:
      "When using `var` in loops with asynchronous functions like `setTimeout`, the variable is shared across all iterations. The output is 6 for all logs because the loop completes before the `setTimeout` executes.",
  },
  {
    id: 24,
    title: "Closure Solution in Loop with let",
    code: `function closNow() {
    for (let i = 1; i <= 5; i++) {
      setTimeout(() => {
        console.log(i); // Outputs 1, 2, 3, 4, 5 correctly because let is block-scoped
      }, 1000);
    }
  }
  closNow();`,
    description:
      "Using `let` in loops solves the closure issue by making the variable block-scoped. Each iteration gets its own copy of `i`, so the output is 1 through 5, as expected.",
  },
  {
    id: 25,
    title: "Different Ways to Create Objects in JavaScript",
    code: `// Object literal
  const person = { name: "abhi" };
  
  // Using Object constructor
  const person2 = new Object({
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
      console.log('Hello everyone.');
    },
    score: { maths: 90, science: 80 }
  });
  
  // Using constructor function
  function Person() {
    this.name = 'John';
    this.age = 20;
    this.hobbies = ['reading', 'games', 'coding'];
    this.greet = function() {
      console.log('Hello everyone.');
    };
    this.score = { maths: 90, science: 80 };
  }
  
  const person3 = new Person();
  console.log(typeof person3); // object`,
    description:
      "There are multiple ways to create objects in JavaScript: object literals, the Object constructor, and constructor functions. Each provides flexibility depending on the use case.",
  },
];

export default function Demo() {
  const [selectedExample, setSelectedExample] = useState(jsExamples[0]);
  const [code, setCode] = useState(selectedExample.code);
  const [output, setOutput] = useState("");

  // Function to execute the code
  const runCode = () => {
    try {
      let log = [];
      const originalLog = console.log;
      console.log = (...args) => log.push(args.join(" "));
      eval(code); // WARNING: Only use eval in controlled environments
      console.log = originalLog;
      setOutput(log.join("\n"));
    } catch (error) {
      setOutput(String(error));
    }
  };

  const handleExampleChange = (example) => {
    setSelectedExample(example);
    setCode(example.code);
    setOutput("");
  };

  return (
    <div className="demo-container">
      {/* Example selection */}
      <div className="example-list">
        <h3 className="example-title">Select an Example:</h3>
        <ul className="example-left">
          {jsExamples.map((example) => (
            <li
              key={example.id}
              className={`example-item ${
                example.id === selectedExample.id ? "active" : ""
              }`}
              onClick={() => handleExampleChange(example)}
            >
              {example.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Display the selected example */}
      <div className="example-details">
        <h3>{selectedExample.title}</h3>
        <p>{selectedExample.description}</p>

        {/* Code snippet */}
        <h4>Code:</h4>
        <textarea
          className="code-editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows={6}
        ></textarea>

        {/* Run Code Button */}
        <button className="run-code-btn" onClick={runCode}>
          Run Code
        </button>

        {/* Output */}
        <h4>Output:</h4>
        <pre className="code-output">{output}</pre>
      </div>
    </div>
  );
}
