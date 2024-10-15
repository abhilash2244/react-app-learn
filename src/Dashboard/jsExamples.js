// important code snippets and its explanations
// https://levelup.gitconnected.com/tricky-javascript-code-snippets-asked-in-the-interview-8ed9b868a4a5
// https://www.toptal.com/javascript/interview-questions
// ------------------------
// null object
// the surprising gotcha in JavaScript is that null is also considered an object!
// ---------------------------------
// Write a simple function (less than 160 characters) that returns a boolean indicating
// whether or not a string is a palindrome
function palindrome(str) {
    str = str.toLowerCase();
    return str == str.split("").reverse().join("");
  }
  console.log(palindrome("level "));
  
  //------------------------------------
  // const array = [/* your array of 3 million elements */];
  // const numberToFind = /* the number you want to find in the array */;
  
  // const isPresent = array.includes(numberToFind);
  
  // console.log(isPresent); // true or false
  
  //-----------------------------
  // How do you add an element at the begining of an array? How do you add one at the end?
  
  // Hide answer
  // var myArray = ['a', 'b', 'c', 'd'];
  // myArray.push('end');
  // myArray.unshift('start');
  // console.log(myArray); // ["start", "a", "b", "c", "d", "end"]
  // With ES6, one can use the spread operator:
  
  // myArray = ['start', ...myArray];
  // myArray = [...myArray, 'end'];
  // Or, in short:
  
  // myArray = ['start', ...myArray, 'end'];
  // -------------------------
  // strickt mode in JS
  // 'use strict';
  // "Strict mode" is a mode in JavaScript that was introduced in ECMAScript 5 (ES5)
  // which enforces a stricter set of rules for writing JavaScript code, providing better error-checking and making it easier to write secure and optimized code.
  // Some of the key features of strict mode include:
  // Prevents the use of undeclared variables, which can help catch typos and other errors.
  // Disallows certain "unsafe" actions that might have been allowed in non-strict mode, such as overwriting properties of the global object.
  // Disallows the use of certain keywords that were reserved for future use in earlier versions of JavaScript, such as implements, interface, and package.
  // Changes the behavior of some built-in JavaScript features, such as eval() and arguments, to make them more predictable and less error-prone.
  // To enable strict mode, simply include the string literal "use strict" at the beginning of your JavaScript file or function. Once enabled, strict mode will remain in effect for the entire file or function and cannot be turned off.
  // ------------------------
  
  // Generator ------------------
  // Generators are created using a function declaration or an expression with the function* syntax. Inside the generator function, the yield keyword is used to pause the execution and return a value to the caller. The generator can then be resumed later by calling the next() method on the iterator object returned by the generator.
  // Generators are often used to implement iterators and asynchronously generate data over time, such as when making network requests or reading from a file.
  function* evenNumbers() {
    let num = 0;
    while (true) {
      console.log("in");
      yield num;
      num += 2;
      console.log("out");
    }
  }
  
  // const iterator = evenNumbers();
  // console.log(iterator.next().value);  // Output: 0
  // console.log(iterator.next().value);  // Output: 2
  // console.log(iterator.next().value);  // Output: 4
  // --------------------------------------
  
  //hoisting
  // var number = 10;
  // var display = function () {
  //   console.log(number);
  //   var number = 20;
  // };
  // display();
  // The output of the above code is not 10 but it’s undefined
  
  // So the above code will be converted to the below code
  
  // var number = 10;
  // var display = function () {
  //   var number;
  //   console.log(number);
  //   number = 20;
  // };
  // display();
  //--------------------------------------
  // anonymous funtion -------------
  // Anonymous functions, also known as lambda functions, are functions that do not
  //have a name and are defined inline as expressions. They are often used in situations
  //where a function is only needed for a short period of time and does not need to be
  //reused or called again.
  
  // A typical case of anonymous functions is when passing a callback function to
  //another function that will be called later. For example, the Array.prototype.map()
  //method takes a callback function as an argument, which is used to transform each
  //element of an array. Since this callback function is only needed for this specific /
  //use case and does not need to be called again, it can be defined as an anonymous
  // function. Here's an example:
  
  // const numbers = [1, 2, 3, 4, 5];
  
  // const doubledNumbers = numbers.map(function(num) {
  //   return num * 2;
  // });
  
  // console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]
  
  //-----------------------------
  // Arrow function
  // const double = num => num * 2;
  // const isEven = num => num % 2 === 0;
  
  // ------------
  
  //closure example
  
  function first() {
    var a = 5;
    function second() {
      console.log(a, b);
    }
    let b = 6;
    return second;
  }
  // first()();
  // ------------------------
  // closure and var to print different value
  // for(var i = 0; i<=3;i++){
  // print(i)
  // }
  
  function print(i) {
    setTimeout(() => {
      console.log(i);
    }, 1);
  }
  // --------------------------
  // object.freeze() vs const
  
  // the key difference between const and Object.freeze() is that const creates an immutable reference
  // to a mutable value, while Object.freeze() creates a completely immutable object that cannot be modified
  // in any way.
  // const myArray = [1, 2, 3];
  // myArray.push(4); // This is allowed
  // myArray = [4, 5, 6]; // This is not allowed
  
  // const myObj = Object.freeze({ a: 1, b: 2 });
  // myObj.a = 3; // This will fail silently in strict mode or throw an error in non-strict mode
  
  //----------------------
  
  // shallow copy deep copy
  // A shallow copy creates a new object but only copies the references to the original object's data.
  // This means that if the original object contains any mutable data types (such as lists or dictionaries),
  //  both the original object and the copied object will refer to the same data in memory.
  // So, if any changes are made to the data, it will be reflected in both objects. Shallow copying can be
  //  done using the "copy" method or the "slice" operator.
  
  // original_list = [1, 2, [3, 4]]
  // new_list = original_list
  // // or  new_list = original_list.copy()
  // new_list[2][0] = 5
  // print(original_list)
  // print(new_list)
  
  // A deep copy, on the other hand, creates a new object and recursively copies all the data and references
  //  in the original object, including any nested objects or mutable data types. This means that any changes
  //  made to the copied object will not affect the original object or its nested objects. Deep copying can be
  // done using the "deepcopy" function in the "copy" module.
  
  // var let const
  function abc() {
    console.log(a); //undefined
    var a = 10;
  
    console.log(c); // Cannot access 'c' before initialization
    const c = 3;
  
    console.log(b); //Cannot access 'b' before initialization
    let b;
  }
  // abc();
  
  // Memoization: Memoization is a technique for speeding up applications by caching the
  //  results of expensive function calls and returning them when the same inputs are used again.
  
  // ----------------
  
  // Event loop:
  // JavaScript is a single-threaded synchronous programming language.
  // But what does it actually mean? What is this event loop in JavaScript that we all
  // keep talking about?
  // What does it actually mean when we say JavaScript is single threaded?
  // It means that the main thread where JavaScript code is run, runs in one line at a time
  // manner and there is no possibility of running code in parallel.
  
  // console.log("a")
  // setTimeout(() => {
  //     console.log("in timeout")
  // }, 0);
  // Promise.resolve(()=>console.log("pro")).then((res)=> res());
  // console.log("b")
  // --------------------------------
  // output
  // a
  // b
  // pro
  // in timeout
  // --------------------
  // infinite currying
  function add(a) {
    return function (b) {
      if (b) return add(a + b);
      return a;
    };
  }
  // console.log(add(5)(5)(5)(1)());
  // output = 16
  // --------------------------------------
  const calc = {
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
  // console.log(result.total)
  // -----------------------------
  // synchronous code - code executes line by line
  
  // console.log("first ");
  // console.log("in between");
  // console.log("second");
  // ---------------
  // Async code - even if the time out is 0 it will be loaded after all code executes because settimeout
  //  is of browser
  
  // console.log("first ");
  // setTimeout(()=>{
  //     console.log("in between");
  // },0)
  // console.log("second");
  // ---------------------------------------
  // callback
  // A callback is a function passed as an argument to another function. This technique allows a function
  //to call another function. A callback function can run after another function has finished
  // console.log("start")
  // function firstCall(input){
  // setTimeout(() => {
  //     return "hello world "+input
  // }, 500);
  // }
  
  // function secondCall(input,cb){
  // setTimeout(() => {
  //     cb("hello world " + input)
  // }, 500);
  // }
  // // first type
  // const message = firstCall(1)
  // console.log(message)
  
  // // second type
  // const message2 = secondCall(2,(res)=>{
  //     console.log(res)
  // })
  
  // console.log("finish")
  
  // note: when there is lot of nesting in callbacks like callback hell cb inside cb inside cn etc
  // sol: use promises
  // --------------------------------------------------
  
  // promises - promise chaining https://www.youtube.com/watch?v=HaJdoFp2OEc
  
  // console.log("start")
  // const sub = new Promise((resolve,reject)=>{
  //     setTimeout(() => {
  //         const result = false
  //         if(result) resolve("successful")
  //         else reject(new Error("failed"))
  //     }, 2000);
  // })
  // sub.then((res)=>{
  //     console.log(res)
  // }).catch((res)=>{
  //     console.log(res);
  // })
  // console.log("finish");
  
  // doctype in html
  // The doctype explains what type of HTML is to be expected and therefore what spec validators (for example the W3C HTML validator) should validate your document against
  // The HTML 4.01 strict doctype
  // The HTML 4.01 transitional doctype
  // The XML 1.0 strict and transitional doctypes
  //---------------------------------------
  
  // Different ways to create objects in js
  // const person ={
  //     name:"abhi",
  // }
  // const person2 = new Object ( {
  //     name: 'John',
  //     age: 20,
  //     hobbies: ['reading', 'games', 'coding'],
  //     greet: function() {
  //         console.log('Hello everyone.');
  //     },
  //     score: {
  //         maths: 90,
  //         science: 80
  //     }
  
  // });
  // // creating using constructor function
  // // program to create JavaScript object using instance of an object
  
  // function Person() {
  //     this.name = 'John',
  //     this.age = 20,
  //     this.hobbies = ['reading', 'games', 'coding'],
  //     this.greet = function() {
  //         console.log('Hello everyone.');
  //     },
  //     this.score = {
  //         maths: 90,
  //         science: 80
  //     }
  
  // }
  
  // const person3 = new Person();
  
  // console.log(typeof person3); // object
  
  // // accessing the object value
  // console.log(person.name);
  // console.log(person.hobbies[0]);
  // person.greet();
  // console.log(person.score.maths);
  
  // https://www.programiz.com/javascript/examples/create-object
  // --------------------------------------------------------
  // what is closure in js
  
  // how do you manage state/scope  in js var let const
  
  // event flow
  
  // null and undefined
  
  // JS is sync PL and if we want async we use callback then promise and async await
  
  // !!  what is the use
  // we use this to know the value is treu or false example we can check the token present true or false in sqlite
  
  // ----------------------------------------------
  // reverse of a string withour a inbuilt function
  
  function reverseAString(str) {
    let output = "";
    for (let i = str.length - 1; i >= 0; i--) {
      output += str[i];
    }
    return output;
  }
  
  // console.log(reverseAString("abhi"))
  
  // ----------------------------------------------------------
  // closure new example
  // normal way
  function clos() {
    for (var i = 1; i <= 5; i++) {
      setTimeout(() => {
        console.log(i);
      }, 1000);
    }
  }
  clos();
  
  // now closure way
  function closNow() {
    for (var i = 1; i <= 5; i++) {
      function closureNow(x) {
        setTimeout(() => {
          console.log(x);
        }, 1000);
      }
      closureNow(i);
    }
  }
  closNow();
  