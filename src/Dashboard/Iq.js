import React from "react";
import { useState } from "react";
export const qaArray = [
  {
    id: 1,
    question: "Class and Class Name",
    answer: `Class is a reserved keyword in JS. React code will be compiled to JavaScript, and using the "class" keyword will result in an error. To resolve this, React uses "className" instead of "class". Under the hood, Babel translates "className" back to "class" in the final HTML.`,
  },
  {
    id: 2,
    question: "Data Flow in React",
    answer: `Data flow in React is unidirectional. We pass data down from parent to child using props. For data sharing, React provides Context, and external libraries like Redux can also be used.`,
  },
  {
    id: 3,
    question: "DOM, Real DOM, Virtual DOM",
    answer: `
    <ul>
      <li><strong>DOM:</strong> The DOM is a tree-like structure that represents the UI of a web page. The browser uses the DOM to manage and render HTML elements.</li>
      <li><strong>Real DOM:</strong> This is the actual representation of the UI in the browser. Every time the UI updates, the entire DOM is re-rendered, which can be slow for large or complex applications.</li>
      <li><strong>Virtual DOM:</strong> React uses a virtual DOM, which is a lightweight copy of the real DOM. React first updates the virtual DOM, compares it to the previous version, and then efficiently updates only the parts of the real DOM that changed.</li>
    </ul>`,
  },
  {
    id: 4,
    question: "What happens when a component renders instead of reloading the entire browser in React?",
    answer: `
    <ul>
      <li><strong>Initial Render:</strong> React creates a representation of the component's UI using the <em>Virtual DOM</em>, which is a lightweight, in-memory copy of the real DOM. It doesn't interact with the actual browser DOM directly, which can be slow.</li>

      <li><strong>Component Updates and State Changes:</strong> When the state or props of a component change, React creates a new Virtual DOM representing the new state. It doesn't immediately update the real DOM.</li>

      <li><strong>Diffing Algorithm:</strong> React compares the new Virtual DOM with the old one, looking for differences. This comparison process is known as <em>diffing</em>, and it helps React identify the minimal set of changes required.</li>

      <li><strong>Reconciliation:</strong> After identifying the differences, React updates only the changed parts of the real DOM. This selective updating is called <em>reconciliation</em>, where React avoids re-rendering the entire UI and updates only the necessary elements.</li>

      <li><strong>Batched Updates:</strong> React groups multiple state changes or updates together and applies them all at once to minimize the number of renders and improve performance.</li>

      <li><strong>Component Lifecycle Hooks:</strong> During re-renders, React triggers lifecycle hooks (e.g., <em>componentDidMount</em>, <em>componentDidUpdate</em>, or <em>useEffect</em> in functional components) to allow developers to run logic at specific points in the render process.</li>

      <li><strong>Why the Browser Doesn’t Reload:</strong> React doesn't reload the whole page because it uses the Virtual DOM to handle updates efficiently. Instead of reloading, React selectively updates only the parts of the actual DOM that need to change, improving performance and user experience.</li>
    </ul>`,
},{
  id: 5,
  question: "Stateless and Stateful Components in React",
  answer: `
  <ul>
    <li><strong>Stateless Component:</strong> A stateless component (or functional component) is a simple JavaScript function that accepts props and returns JSX. It does not manage or hold any internal state. It is used to render UI based on props.
      <ul>
        <li><strong>Example:</strong>
          <pre>
            <code>
            const Greeting = (props) => {
              return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;
            };

            &lt;Greeting name="John" /&gt;
            </code>
          </pre>
        </li>
      </ul>
    </li>
    <li><strong>Stateful Component:</strong> A stateful component is a component (either class-based or functional) that holds and manages internal state. It uses the <code>useState</code> hook (in functional components) or <code>this.state</code> in class components to manage state.
      <ul>
        <li><strong>Example:</strong>
          <pre>
            <code>
            import React, { useState } from 'react';

            const Counter = () => {
              const [count, setCount] = useState(0);
              return (
                &lt;div&gt;
                  &lt;p&gt;Current count: {count}&lt;/p&gt;
                  &lt;button onClick={() => setCount(count + 1)}&gt;Increment&lt;/button&gt;
                &lt;/div&gt;
              );
            };

            &lt;Counter /&gt;
            </code>
          </pre>
        </li>
      </ul>
    </li>
  </ul>`
},
{
  id: 6,
  question: "Higher-Order Components (HOC) in React",
  answer: `
  <ul>
    <li><strong>Higher-Order Component (HOC):</strong> A higher-order component is a function that takes a component as an argument and returns a new component. HOCs are used to reuse component logic across multiple components.
      <ul>
        <li>They are useful for adding shared behavior, like logging or authentication, to multiple components without duplicating code.</li>
        <li><strong>Example:</strong>
          <pre>
            <code>
            import React from 'react';

            const withLogging = (WrappedComponent) => {
              return class extends React.Component {
                componentDidMount() {
                  console.log('Component Mounted:', WrappedComponent.name);
                }
                render() {
                  return &lt;WrappedComponent {...this.props} /&gt;;
                }
              };
            };

            const Hello = (props) => &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;

            const HelloWithLogging = withLogging(Hello);

            &lt;HelloWithLogging name="John" /&gt;
            </code>
          </pre>
        </li>
      </ul>
    </li>
  </ul>`
}

,
  {
    id: 7,
    question: "Keys",
    answer: `React uses keys to avoid unnecessary re-rendering. Keys help React identify which items have changed, are added, or are removed.`,
  },
  {
    id: 8,
    question: "Class Components Lifecycle Hooks",
    answer: `
    <ul>
      <li><strong>constructor():</strong> Called before the component is mounted. This is the only lifecycle hook called during server rendering.</li>
      <li><strong>componentWillMount():</strong> Called before the component is mounted. Deprecated and will be removed in the future.</li>
      <li><strong>componentDidMount():</strong> Called after the component is mounted. This is a good place to make API calls or set up any subscriptions.</li>
      <li><strong>componentWillReceiveProps(nextProps):</strong> Called before the component receives new props.</li>
      <li><strong>shouldComponentUpdate(nextProps, nextState):</strong> Called before the component updates. Can be used to optimize performance by returning false if the component does not need to update.</li>
      <li><strong>componentWillUpdate(nextProps, nextState):</strong> Called before the component updates. Deprecated and will be removed in the future.</li>
      <li><strong>componentDidUpdate(prevProps, prevState):</strong> Called after the component updates.</li>
      <li><strong>componentWillUnmount():</strong> Called before the component is unmounted. Use this to clean up any resources or subscriptions.</li>
    </ul>`,
  },
  {
    id: 9,
    question: "Functional Components Lifecycle Hooks",
    answer: `
    <ul>
      <li><strong>useState():</strong> Allows you to add state to a functional component.</li>
      <li><strong>useEffect():</strong> Allows you to run code after the component has rendered. This is equivalent to componentDidMount(), componentDidUpdate(), and componentWillUnmount() in class components.</li>
      <li><strong>useContext():</strong> Allows you to access context in functional components.</li>
      <li><strong>useReducer():</strong> Allows you to manage state using a reducer.</li>
      <li><strong>useCallback():</strong> Allows you to create a callback that only updates when its dependencies change.</li>
      <li><strong>useMemo():</strong> Allows you to only re-compute a value when its dependencies change.</li>
      <li><strong>useRef():</strong> Allows you to create a reference to a DOM node or a value.</li>
      <li><strong>useImperativeHandle():</strong> Allows you to customize the instance value that is exposed to parent components when using ref.</li>
      <li><strong>useLayoutEffect():</strong> Allows you to synchronously apply layout and paint changes.</li>
    </ul>`,
  },
  {
    id: 10,
    question: "Component Interactions in React",
    answer: `
    <ul>
      <li><strong>Props:</strong> Components can pass data down to their children via props. This allows parent components to control the state of their children.</li>
      <li><strong>Context:</strong> Components can share data across the component tree without passing props down through every level. This is useful for data that is used by many components, such as the current user or theme.</li>
      <li><strong>State:</strong> Components can manage their own state using the useState() hook. This allows them to update their own behavior and render based on internal changes.</li>
      <li><strong>Event Handling:</strong> Components can communicate with each other by passing event handlers down via props. A child component could call a function passed from its parent when a button is clicked.</li>
      <li><strong>Refs:</strong> Components can create and access references to other components or DOM nodes using the useRef() hook. This can be useful for accessing the DOM directly or for communicating between components.</li>
      <li><strong>Render Props:</strong> Components can share behavior and logic with other components using a technique called render props. This allows a component to render its children with a specific set of props.</li>
      <li><strong>Higher-Order Components:</strong> Similar to render props, higher-order components are a way to reuse component logic. A higher-order component is a function that takes a component as an argument and returns a new component.</li>
      <li><strong>Hooks:</strong> Components can share state and behavior with other components by using hooks. Hooks can create state, manage side effects and context, and handle other logic that would otherwise have to be handled by a class component.</li>
    </ul>`,
  },
  {
    id: 11,
    question: "ES6 New Features",
    answer: `  <ul>
    <li><strong>Arrow Functions:</strong> A shorthand syntax for defining anonymous functions that are more concise and easier to read.</li>
    <li><strong>Template Literals:</strong> A way to include expressions and variables within string literals using backticks (\`) instead of single or double quotes.</li>
    <li><strong>Destructuring:</strong> A way to extract values from arrays or objects and assign them to variables in a single line of code.</li>
    <li><strong>let and const:</strong> New ways to declare variables with different scoping rules than the traditional var keyword.</li>
    <li><strong>Classes:</strong> A way to define object-oriented classes, similar to those in other programming languages.</li>
    <li><strong>Modules:</strong> A way to organize and reuse code across multiple files.</li>
    <li><strong>Promises:</strong> A way to handle asynchronous code that is easier to work with than traditional callbacks.</li>
    <li><strong>Spread and Rest Operators:</strong> Operators that allow you to easily spread out an array or object into individual elements, or gather multiple elements into an array or object.</li>
    <li><strong>New Collection Classes:</strong> Set, Map, WeakSet, and WeakMap.</li>
  </ul>`,
  },{
    id: 12,
    question: "Prop Drilling in React",
    answer: `
    <ul>
      <li><strong>Prop Drilling:</strong> Prop drilling refers to the process of passing data from a parent component to deeply nested child components by passing props through each intermediate component in the hierarchy, even if those intermediate components do not need the data themselves.</li>
      <li>Prop drilling can make the code harder to maintain as the component hierarchy grows, especially when many intermediate components are involved.</li>
      <li><strong>Example:</strong>
        <pre>
          <code>
          const ParentComponent = () => {
            const data = "Hello from Parent";
            return &lt;ChildComponent1 data={data} /&gt;;
          };

          const ChildComponent1 = ({ data }) => {
            return &lt;ChildComponent2 data={data} /&gt;;
          };

          const ChildComponent2 = ({ data }) => {
            return &lt;p&gt;{data}&lt;/p&gt;;
          };

          &lt;ParentComponent /&gt;;
          </code>
        </pre>
      </li>
      <li><strong>Solution to Prop Drilling:</strong> To avoid prop drilling, you can use React Context or state management libraries like Redux to manage global state and pass data without having to go through each component in the hierarchy.</li>
    </ul>`
  },{
    id: 13,
    question: "Sending Data from Parent to Child in React",
    answer: `
    <ul>
      <li><strong>Sending Data from Parent to Child:</strong> In React, the most common way to send data from a parent component to a child component is through <code>props</code>. The parent passes data to the child by including it as a prop when rendering the child component.</li>
      <li><strong>Example:</strong>
        <pre>
          <code>
          const ParentComponent = () => {
            const message = "Hello from Parent";
            return &lt;ChildComponent message={message} /&gt;;
          };

          const ChildComponent = ({ message }) => {
            return &lt;p&gt;{message}&lt;/p&gt;;
          };

          &lt;ParentComponent /&gt;;
          </code>
        </pre>
      </li>
    </ul>`
  },{
    id: 14,
    question: "Sending Data from Child to Parent in React",
    answer: `
    <ul>
      <li><strong>Sending Data from Child to Parent:</strong> In React, to send data from a child component to a parent component, the parent passes a callback function as a prop to the child. The child can then call this function and pass data to the parent as an argument.</li>
      <li>This is known as <em>lifting state up</em> because the state is managed by the parent component, but the child component sends updates to the parent.</li>
      <li><strong>Example:</strong>
        <pre>
          <code>
          const ParentComponent = () => {
            const [childData, setChildData] = useState("");

            const handleDataFromChild = (data) => {
              setChildData(data);
            };

            return (
              &lt;div&gt;
                &lt;p&gt;Data from Child: {childData}&lt;/p&gt;
                &lt;ChildComponent sendDataToParent={handleDataFromChild} /&gt;
              &lt;/div&gt;
            );
          };

          const ChildComponent = ({ sendDataToParent }) => {
            const sendData = () => {
              sendDataToParent("Hello from Child");
            };

            return &lt;button onClick={sendData}&gt;Send Data to Parent&lt;/button&gt;;
          };

          &lt;ParentComponent /&gt;;
          </code>
        </pre>
      </li>
    </ul>`
  },{
    id: 15,
    question: "Class and Functional Components, React Release Year, Current Version, Hooks, Advantages and Disadvantages",
    answer: `
      <ul>
        <li><strong>Class Components:</strong>
          <ul>
            <li>Class components are ES6 classes that extend from <code>React.Component</code> and can use state and lifecycle methods.</li>
            <li>They were the primary way to manage state and lifecycle methods before hooks were introduced.</li>
            <li><strong>Example:</strong>
              <pre>
                <code>
                class MyComponent extends React.Component {
                  constructor(props) {
                    super(props);
                    this.state = { count: 0 };
                  }
                  componentDidMount() {
                    console.log('Component mounted');
                  }
                  render() {
                    return (
                      &lt;div&gt;
                        &lt;p&gt;Count: {this.state.count}&lt;/p&gt;
                        &lt;button onClick={() => this.setState({ count: this.state.count + 1 })}&gt;
                          Increment
                        &lt;/button&gt;
                      &lt;/div&gt;
                    );
                  }
                }
                </code>
              </pre>
            </li>
          </ul>
        </li>
  
        <li><strong>Functional Components:</strong>
          <ul>
            <li>Functional components are simple JavaScript functions that return JSX. They were stateless before hooks but can now manage state and lifecycle with hooks.</li>
            <li>They are easier to write and test compared to class components.</li>
            <li><strong>Example:</strong>
              <pre>
                <code>
                import React, { useState, useEffect } from 'react';
  
                const MyComponent = () => {
                  const [count, setCount] = useState(0);
                  
                  useEffect(() => {
                    console.log('Component mounted');
                  }, []);
  
                  return (
                    &lt;div&gt;
                      &lt;p&gt;Count: {count}&lt;/p&gt;
                      &lt;button onClick={() => setCount(count + 1)}&gt;Increment&lt;/button&gt;
                    &lt;/div&gt;
                  );
                };
                </code>
              </pre>
            </li>
          </ul>
        </li>
  
        <li><strong>React Release Year:</strong> React was first released by Facebook in <strong>May 2013</strong>.</li>
  
        <li><strong>Current React Version:</strong> The current stable version of React is <strong>React 18</strong>, which was introduced in <strong>March 2022</strong>.</li>
  
        <li><strong>Hooks Introduction:</strong> React introduced hooks in <strong>version 16.8</strong>, which was released in <strong>February 2019</strong>. Hooks allow you to use state and other React features in functional components.</li>
  
        <li><strong>Advantages of Hooks:</strong>
          <ul>
            <li>They allow functional components to have state and side effects, which were previously only available in class components.</li>
            <li>Cleaner and more concise syntax compared to class components.</li>
            <li>Hooks can simplify logic reuse across components by using custom hooks.</li>
            <li>No need to worry about the complexities of <code>this</code> keyword in classes.</li>
          </ul>
        </li>
  
        <li><strong>Disadvantages of Hooks:</strong>
          <ul>
            <li>Can make functional components harder to understand if too many hooks are used or hooks are misused.</li>
            <li>Overuse of hooks can lead to "callback hell" in functional components if not properly structured.</li>
            <li>Some developers may find the learning curve steep when migrating from class components to hooks.</li>
          </ul>
        </li>
      </ul>`
  },{
    id: 16,
    question: "Why are Functional Components Preferred Over Class Components?",
    answer: `
      <ul>
        <li><strong>Simplicity:</strong> Functional components are simpler and easier to write compared to class components. They are just JavaScript functions that return JSX, without needing to deal with <code>this</code> or other complexities of class syntax.</li>
  
        <li><strong>Hooks:</strong> With the introduction of hooks in React 16.8, functional components can now manage state, lifecycle methods, and side effects, which were previously only available in class components. This has made functional components more powerful.</li>
  
        <li><strong>Cleaner Code:</strong> Functional components provide a more concise and readable syntax. Without the need for lifecycle methods or binding the <code>this</code> keyword, they make the code cleaner and easier to understand.</li>
  
        <li><strong>Performance:</strong> Functional components tend to have a slight performance advantage, especially when they are pure components. They avoid some overhead that comes with class components, such as handling the <code>this</code> context.</li>
  
        <li><strong>Testing and Debugging:</strong> Functional components are easier to test and debug. Since they are just functions, you can easily mock their inputs and outputs, and avoid the complexity of class component lifecycle hooks.</li>
  
        <li><strong>No Binding of <code>this</code>:</strong> In class components, you often have to bind methods to the class instance (using <code>this</code>), which can be confusing and lead to bugs. Functional components don't require this binding, making them easier to work with.</li>
  
        <li><strong>Reusable Logic with Custom Hooks:</strong> Functional components allow the use of custom hooks to share logic across components. This provides a much cleaner and reusable way to encapsulate component logic compared to class components, where you had to rely on higher-order components or render props for similar functionality.</li>
  
        <li><strong>Modern Approach:</strong> Functional components represent the more modern approach to React development. The React team and the community are focusing more on functional components, and new features in React tend to favor them.</li>
  
        <li><strong>Smaller Component Footprint:</strong> Functional components generally result in fewer lines of code and a smaller component footprint. Without lifecycle methods and class-specific logic, functional components are less verbose.</li>
  
        <li><strong>Future-Proof:</strong> As React evolves, more features are being built around functional components and hooks. Class components are still supported but are no longer the recommended pattern for writing new React code.</li>
      </ul>`
  },{
    id: 17,
    question: "map and filter in React/JavaScript",
    answer: `
      <ul>
        <li><strong><code>map</code> in React/JavaScript:</strong>
          <ul>
            <li>The <code>map</code> function is used to iterate over an array and transform each element, returning a new array of the same length. It’s commonly used in React to dynamically render lists of components based on an array of data.</li>
            <li><strong>Example in React:</strong>
              <pre>
                <code>
                const numbers = [1, 2, 3, 4, 5];
  
                const NumberList = () => {
                  return (
                    &lt;ul&gt;
                      {numbers.map((number) => (
                        &lt;li key={number}&gt;{number}&lt;/li&gt;
                      ))}
                    &lt;/ul&gt;
                  );
                };
  
                &lt;NumberList /&gt;
                </code>
              </pre>
            </li>
          </ul>
        </li>
  
        <li><strong><code>filter</code> in React/JavaScript:</strong>
          <ul>
            <li>The <code>filter</code> function is used to iterate over an array and return a new array that contains only the elements that pass a specific condition or test.</li>
            <li><strong>Example in React:</strong>
              <pre>
                <code>
                const numbers = [1, 2, 3, 4, 5];
  
                const FilteredNumberList = () => {
                  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  
                  return (
                    &lt;ul&gt;
                      {evenNumbers.map((number) => (
                        &lt;li key={number}&gt;{number}&lt;/li&gt;
                      ))}
                    &lt;/ul&gt;
                  );
                };
  
                &lt;FilteredNumberList /&gt;
                </code>
              </pre>
            </li>
          </ul>
        </li>
      </ul>`
  },{
    id: 18,
    question: "Shallow Copy vs. Deep Copy and Copying Objects in React",
    answer: `
      <ul>
        <li><strong>Shallow Copy:</strong>
          <ul>
            <li>A shallow copy of an object is a new object that shares the same references to the nested objects of the original. This means that changes to nested objects in the copied object will reflect in the original object, as they both refer to the same memory location for those nested objects.</li>
            <li><strong>Example of Shallow Copy:</strong>
              <pre>
                <code>
                const original = { name: "John", details: { age: 30 } };
                const shallowCopy = { ...original };
  
                shallowCopy.details.age = 40; // This will also change the age in the original object
  
                console.log(original.details.age); // 40
                </code>
              </pre>
            </li>
          </ul>
        </li>
  
        <li><strong>Deep Copy:</strong>
          <ul>
            <li>A deep copy of an object creates a completely independent clone of the original object, including all nested objects. This means changes to nested objects in the copied object will not affect the original object, as they refer to different memory locations.</li>
            <li><strong>Example of Deep Copy:</strong>
              <pre>
                <code>
                const original = { name: "John", details: { age: 30 } };
                const deepCopy = JSON.parse(JSON.stringify(original));
  
                deepCopy.details.age = 40; // This does not change the age in the original object
  
                console.log(original.details.age); // 30
                </code>
              </pre>
            </li>
          </ul>
        </li>
  
        <li><strong>Copying Objects in React:</strong>
          <ul>
            <li>In React, it's common to create shallow copies of state objects to avoid direct mutations (since React state should be treated as immutable). For nested objects, if deep copies are necessary, they should be created to prevent shared references from causing unintended side effects.</li>
            <li><strong>Shallow Copy in React (using spread operator):</strong>
              <pre>
                <code>
                const [user, setUser] = useState({ name: "John", details: { age: 30 } });
  
                const updateAge = () => {
                  // This creates a shallow copy of 'user'
                  setUser((prevUser) => ({
                    ...prevUser,
                    details: { ...prevUser.details, age: 40 } // Shallow copy of nested object
                  }));
                };
                </code>
              </pre>
            </li>
          </ul>
        </li>
      </ul>`
  }
,{
  id: 19,
  question: "Spread & Rest Operator in React/JavaScript",
  answer: `
    <ul>
      <li><strong>Spread Operator:</strong>
        <ul>
          <li>The spread operator (<code>...</code>) is used to spread out the elements of an array or properties of an object into another array or object. It is commonly used for shallow copying arrays/objects or merging them in React.</li>
          <li><strong>Usage in React:</strong> The spread operator is often used to update state immutably without directly mutating the original state object or array.</li>
          <li><strong>Example in React:</strong>
            <pre>
              <code>
              const [user, setUser] = useState({ name: "John", age: 30 });

              const updateAge = () => {
                // Spread operator to create a new state object with an updated age
                setUser((prevUser) => ({ ...prevUser, age: 31 }));
              };
              </code>
            </pre>
          </li>
        </ul>
      </li>

      <li><strong>Rest Operator:</strong>
        <ul>
          <li>The rest operator (<code>...</code>) is used to gather the remaining elements into an array or remaining properties into an object. It is commonly used in function arguments or destructuring.</li>
          <li><strong>Example of Rest Operator in Function Arguments:</strong>
            <pre>
              <code>
              const sum = (a, b, ...rest) => {
                return rest.reduce((acc, curr) => acc + curr, a + b);
              };

              console.log(sum(1, 2, 3, 4)); // Output: 10 (1 + 2 + 3 + 4)
              </code>
            </pre>
          </li>
        </ul>
      </li>

      <li><strong>Example of Spread and Rest Operator in Destructuring:</strong>
        <pre>
          <code>
          const user = { name: "John", age: 30, city: "New York" };

          // Spread Operator to clone an object
          const updatedUser = { ...user, age: 31 };

          console.log(updatedUser); // Output: { name: "John", age: 31, city: "New York" }

          // Rest Operator to extract remaining properties
          const { name, ...rest } = user;

          console.log(name); // "John"
          console.log(rest); // { age: 30, city: "New York" }
          </code>
        </pre>
      </li>
    </ul>`
}
,
{
  id: 20,
  question: "Differences Between let, var, and const",
  answer: `
    <ul>
      <li><strong>var:</strong>
        <ul>
          <li><strong>Scope:</strong> <code>var</code> is function-scoped, meaning it is accessible anywhere within the function in which it is declared.</li>
          <li><strong>Hoisting:</strong> <code>var</code> is hoisted, which means its declaration is moved to the top of its scope before code execution. However, the value is <strong>undefined</strong> until it is assigned later in the code.</li>
          <li><strong>Re-declaration:</strong> <code>var</code> can be re-declared and updated within the same scope, which can lead to unexpected behavior.</li>
          <li><strong>Example:</strong>
            <pre>
              <code>
              function test() {
                console.log(x); // undefined due to hoisting
                var x = 10;
                console.log(x); // 10
              }
              test();
              </code>
            </pre>
          </li>
        </ul>
      </li>

      <li><strong>let:</strong>
        <ul>
          <li><strong>Scope:</strong> <code>let</code> is block-scoped, meaning it is only accessible within the block in which it is declared (e.g., within a loop, conditional statement, etc.).</li>
          <li><strong>Hoisting:</strong> <code>let</code> is hoisted, but it is not initialized. Accessing it before initialization results in a <strong>ReferenceError</strong>.</li>
          <li><strong>Re-declaration:</strong> <code>let</code> cannot be re-declared in the same block, but it can be updated.</li>
          <li><strong>Example:</strong>
            <pre>
              <code>
              function test() {
                // console.log(x); // ReferenceError: x is not defined
                let x = 10;
                console.log(x); // 10
              }
              test();
              </code>
            </pre>
          </li>
        </ul>
      </li>

      <li><strong>const:</strong>
        <ul>
          <li><strong>Scope:</strong> <code>const</code> is block-scoped, just like <code>let</code>, but it declares constants whose values cannot be reassigned.</li>
          <li><strong>Hoisting:</strong> <code>const</code> is hoisted, but similar to <code>let</code>, it is not initialized, and accessing it before initialization will result in a <strong>ReferenceError</strong>.</li>
          <li><strong>Re-declaration:</strong> <code>const</code> cannot be re-declared or reassigned, though the content of objects and arrays declared with <code>const</code> can be mutated.</li>
          <li><strong>Example:</strong>
            <pre>
              <code>
              const x = 10;
              // x = 20; // Error: Assignment to constant variable
              const obj = { name: "John" };
              obj.name = "Jane"; // This is allowed, the object properties can be mutated
              console.log(obj.name); // "Jane"
              </code>
            </pre>
          </li>
        </ul>
      </li>

      <li><strong>Key Differences:</strong>
        <ul>
          <li><strong>Scope:</strong> <code>var</code> is function-scoped, while <code>let</code> and <code>const</code> are block-scoped.</li>
          <li><strong>Re-declaration:</strong> <code>var</code> can be re-declared, <code>let</code> can be updated but not re-declared, and <code>const</code> cannot be re-declared or updated.</li>
          <li><strong>Hoisting:</strong> While all three are hoisted, <code>var</code> is initialized as <code>undefined</code>, while <code>let</code> and <code>const</code> are not initialized, leading to a <strong>ReferenceError</strong> if accessed before declaration.</li>
        </ul>
      </li>
    </ul>`
}
,{
  id: 21,
  question: "Prototype in JavaScript",
  answer: `
    <ul>
      <li><strong>Prototype:</strong>
        <ul>
          <li>In JavaScript, every object has a hidden property called <code>__proto__</code> (or simply prototype). The prototype is an object from which other objects inherit properties and methods.</li>
          <li>Prototypes are a key part of JavaScript's inheritance model, allowing objects to inherit functionality from other objects.</li>
          <li>When a property or method is accessed on an object, JavaScript first checks if the object itself has the property or method. If not, it looks at the object's prototype. This process is called <strong>prototype chaining</strong>.</li>
        </ul>
      </li>

      <li><strong>Example of Prototype:</strong>
        <pre>
          <code>
          function Person(name, age) {
            this.name = name;
            this.age = age;
          }

          // Adding a method to the prototype
          Person.prototype.greet = function() {
            console.log("Hello, my name is " + this.name);
          };

          const john = new Person("John", 30);
          john.greet(); // Output: Hello, my name is John

          // Even though greet() is not directly on 'john', it is found on the prototype chain
          console.log(john.hasOwnProperty('greet')); // false
          console.log(john.__proto__.hasOwnProperty('greet')); // true
          </code>
        </pre>
      </li>

      <li><strong>Prototype Chain:</strong>
        <ul>
          <li>When an object is created, it has access to the properties and methods defined on its prototype. If you try to access a property or method on an object and it’s not found, JavaScript will keep searching up the prototype chain until it either finds the property/method or reaches the end of the chain.</li>
          <li>The final object in the chain is <code>Object.prototype</code>, which is the root of all objects in JavaScript. Beyond that, the prototype is <code>null</code>.</li>
        </ul>
      </li>

      <li><strong>Advantages of Using Prototype:</strong>
        <ul>
          <li><strong>Memory Efficiency:</strong> Methods defined on the prototype are shared across all instances of an object. This prevents each instance from having its own copy of the method, saving memory.</li>
          <li><strong>Dynamic Inheritance:</strong> New methods or properties can be added to the prototype even after instances have been created, allowing for dynamic updates to all instances.</li>
        </ul>
      </li>

      <li><strong>Prototype vs. Class-based Inheritance:</strong>
        <ul>
          <li>JavaScript uses prototype-based inheritance, unlike class-based inheritance in languages like Java or C++. JavaScript objects inherit directly from other objects via the prototype chain, rather than inheriting from classes.</li>
        </ul>
      </li>
    </ul>`
}

  
  
  



];

export default function Iq() {
  const [selectedId, setSelectedId] = useState(null); // Track which question is open

  // Toggle the display of the answer
  const toggleAnswer = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      {qaArray.map(({ id, question, answer }) => (
        <div key={id} className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(id)}>
            <h3>{question}</h3>
            <span className={`arrow ${selectedId === id ? "open" : ""}`}>
              {selectedId === id ? "−" : "+"}
            </span>
          </div>
          {selectedId === id && (
            <div className="faq-answer" dangerouslySetInnerHTML={{ __html: answer }} />
          )}
        </div>
      ))}
    </div>
  );
}//   return (
//     <div>
//       <h5>Class and Class name</h5>
//       <p>
//         Class is a reserved keyword in JS. React code will be compiled to Js and
//         it will give an error inorder to overcome that we use ClassName Under
//         the hood bable when its doing the translation
//       </p>
//       <h5>Data flow in React</h5>
//       <p>
//         Data flow is unidirectional in React. We are passing data down in
//         unidirectional ex parent to child using props. Data sharing Context,
//         Global state and redux
//       </p>
//       <h5>DOM, Real DOM, Virtual DOM</h5>
//       <p>
//         Document object modal. Is is the structural represntation of all nodes
//         in HTML document. It represents UI of the aplicaiton. DOM manipulation
//         is used to dynamically change the content of web action_page DOM
//         <h5>DOM : </h5>
//         (Document Object Model): It's a tree-like structure that represents the
//         UI of a web page. The browser uses the DOM to manage and render HTML
//         elements. <h5>Real DOM:</h5>
//         This is the actual representation of the UI in the browser. Every time
//         the UI updates, the entire DOM is re-rendered, which can be slow for
//         large or complex applications. <h5>virtual DOM:</h5> React uses a
//         virtual DOM, which is a lightweight copy of the real DOM. When there’s a
//         change in the UI, React updates the virtual DOM first, compares it to
//         the previous version, and then efficiently updates only the parts of the
//         real DOM that changed. This makes React much faster and more efficient.
//       </p>
//       <p>
//         For every DOM update there will be re rendering of all nodes hence it is
//         slow
//       </p>
//       <h5>Virtual DOM</h5>
//       <p> It is the virtual representaion of Real Dom.</p>
//       <p>
//         {" "}
//         React updates the state changes first in Virtual DOM and then it sync
//         with Real Dom
//       </p>
//       <h5>Diffing</h5>
//       <p>
//         Diffing:- React compares the virtual copy of✨ Real DOM to an updated
//         Copy of Virtual DOM, compares or picks out the changes, and finally
//         renders it to real Dom. This process is called Diffing and the algorithm
//         used is called Diffing Algorithm
//       </p>
//       <p>Frequent Dom manipulation is slow</p>
//       <p>Virtual DOM is virtual representaion of DOM in memory</p>
//       <h5>Reconciliation</h5>
//       <p>
//         Virtual DOM is synced with Real DOM with ReactDOM library and this
//         process is called Reconciliation
//       </p>
//       <h5>Keys</h5>
//       <p>React uses keys to avoid unneecessary rerendering</p>
//       <h5>Class Components life cycle hooks</h5>
//       <p>
//         In React JS class components, there are several lifecycle hooks that
//         allow you to run code at specific points in the component's lifecycle.
//         These hooks include:
//       </p>
//       <p className="listElements">
//         <h6>constructor():</h6> Called before the component is mounted. This is
//         the only lifecycle hook called on the server rendering.
//       </p>
//       <p className="listElements">
//         <h6>componentWillMount():</h6> Called before the component is mounted.
//         This is deprecated and will be removed in the future.
//       </p>
//       <p className="listElements">
//         <h6> componentDidMount():</h6> Called after the component is mounted.
//         This is a good place to make API calls or set up any subscriptions.
//       </p>
//       <p className="listElements">
//         <h6> componentWillReceiveProps(nextProps):</h6> Called before the
//         component receives new props.
//       </p>
//       <p className="listElements">
//         <h6> shouldComponentUpdate(nextProps, nextState): </h6>Called before the
//         component updates. You can use this to optimize performance by returning
//         false if you know the component does not need to update.
//       </p>
//       <p className="listElements">
//         <h6> componentWillUpdate(nextProps, nextState): </h6>Called before the
//         component updates. This is deprecated and will be removed in the future.
//       </p>
//       <p className="listElements">
//         <h6> componentDidUpdate(prevProps, prevState): </h6>Called after the
//         component updates.
//       </p>
//       <p className="listElements">
//         <h6> componentWillUnmount(): </h6>Called before the component is
//         unmounted. Use this to clean up any resources or subscriptions.
//       </p>
//       <p>
//         The first lifecycle hook that is called is the constructor() method,
//         followed by componentWillMount() and render() and then
//         componentDidMount()
//       </p>
//       <h5>Life cycle hooks Functional Components</h5>
//       In React JS functional components, there are several lifecycle hooks that
//       allow you to run code at specific points in the component's lifecycle.
//       These hooks include:
//       <p className="listElements">
//         <h6>useState(): </h6>Allows you to add state to a functional component.
//       </p>
//       <p className="listElements">
//         <h6>useEffect():</h6> Allows you to run code after the component has
//         rendered. This is equivalent to the componentDidMount(),
//         componentDidUpdate() and componentWillUnmount() hooks in class
//         components.
//       </p>
//       <p className="listElements">
//         <h6>useContext(): </h6>Allows you to access context in functional
//         components.
//       </p>
//       <p className="listElements">
//         <h6>useReducer(): </h6>Allows you to manage state using a reducer.
//       </p>
//       <p className="listElements">
//         <h6>useCallback():</h6> Allows you to create a callback that only
//         updates when its dependencies change.
//       </p>
//       <p className="listElements">
//         <h6>useMemo(): </h6>Allows you to only re-compute a value when its
//         dependencies change.
//       </p>
//       <p className="listElements">
//         <h6>useRef(): </h6>Allows you to create a reference to a DOM node or a
//         value.
//       </p>
//       <p className="listElements">
//         <h6>useImperativeHandle(): </h6>Allows you to customize the instance
//         value that is exposed to parent components when using ref.
//       </p>
//       <p className="listElements">
//         <h6>useLayoutEffect(): </h6>Allows you to synchronously apply layout and
//         paint changes.
//       </p>
//       <p>
//         {" "}
//         The first lifecycle hook that is called is the useState() method,
//         followed by useEffect() and then useContext(), useReducer(),
//         useCallback(), useMemo(), useRef(), useImperativeHandle() and
//         useLayoutEffect() Note that functional components don't have
//         componentWillReceiveProps() or shouldComponentUpdate() hooks, instead
//         you can use useEffect() with proper dependencies to handle those cases.
//       </p>
//       <div>
//         <h5>Component interactions</h5>
//         In React, components can interact with each other in a few different
//         ways:
//         <p className="listElements">
//           <h6>Props: </h6> Components can pass data down to their children via
//           props. This allows parent components to control the state of their
//           children.
//         </p>
//         <p className="listElements">
//           <h6>Context: </h6>Components can share data across the component tree
//           without passing props down through every level. This can be useful for
//           data that is used by many components, such as the current user or
//           theme.
//         </p>
//         <p className="listElements">
//           <h6>State: </h6>Components can manage their own state using the
//           useState() hook. This allows them to update their own behavior and
//           render based on internal changes.
//         </p>
//         <p className="listElements">
//           <h6>Event handling: </h6>Components can communicate with each other by
//           passing event handlers down via props. For example, a child component
//           could call a function passed down from its parent when a button is
//           clicked.
//         </p>
//         <p className="listElements">
//           <h6>Refs:</h6> Components can create and access references to other
//           components or DOM nodes using the useRef() hook. This can be useful
//           for accessing the DOM directly or for communicating between
//           components.
//         </p>
//         <p className="listElements">
//           <h6>Render Props:</h6> Components can share behavior and logic with
//           other components using a technique called render props. This allows a
//           component to render its children with a specific set of props.
//         </p>
//         <p className="listElements">
//           <h6>Higher-order components: </h6>Similar to render props,
//           higher-order components are a way to reuse component logic. A
//           higher-order component is a function that takes a component as an
//           argument and returns a new component.
//         </p>
//         <p className="listElements">
//           <h6>Hooks: </h6> Components can share state and behavior with other
//           components by using hooks. Hooks can be used to create state, manage
//           side effects and context, and handle other logic that would otherwise
//           have to be handled by a class component.
//         </p>
//         All of these methods can be used in combination to create complex
//         interactions between components. But, it's important to keep in mind
//         that with more complex interactions, it's harder to understand what's
//         happening in the app and also harder to debug.
//       </div>
//       <div>
//         <h5>ES6 new features</h5>
//         ES6 (ECMAScript 6) is the latest version of the JavaScript programming
//         language. Some of the new features introduced in ES6 include:
//         <p className="listElements">
//           <h6>Arrow Functions:</h6> A shorthand syntax for defining anonymous
//           functions that can be more concise and easier to read.
//         </p>
//         <p className="listElements">
//           <h6>Template Literals: </h6>A way to include expressions and variables
//           within string literals, using backticks (`) instead of single or
//           double quotes.
//         </p>
//         <p className="listElements">
//           <h6>Destructuring:</h6>A way to extract values from arrays or objects
//           and assign them to variables in a single line of code.
//         </p>
//         <p className="listElements">
//           <h6>let and const: </h6>New ways to declare variables that have
//           different scoping rules than the traditional var keyword.
//         </p>
//         <p className="listElements">
//           <h6>Classes: </h6>A way to define object-oriented classes, similar to
//           those in other programming languages.
//         </p>
//         <p className="listElements">
//           <h6>Modules:</h6> A way to organize and reuse code across multiple
//           files.
//         </p>
//         <p className="listElements">
//           <h6>Promises: </h6>A way to handle asynchronous code that is easier to
//           work with than traditional callbacks.
//         </p>
//         <p className="listElements">
//           <h6>Spread and Rest Operators:</h6> Operators that allow you to easily
//           spread out an array or object into individual elements, or gather
//           multiple elements into an array or object.
//         </p>
//         <p className="listElements">
//           <h6>New collection classes: </h6>Set, Map and WeakSet, WeakMap
//         </p>
//         These are some of the new features added to ES6, there are many more new
//         features added.
//       </div>
//     </div>
//   );
// }
