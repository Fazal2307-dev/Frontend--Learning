1. What are the key differences between React.js and other JavaScript frameworks like Angular and Vue?
Answer:

React.js is a library, not a full-fledged framework. It focuses on building user interfaces through a component-based architecture. It uses a Virtual DOM for optimizing updates and employs JSX to make the code more readable.
Angular is a full MVC framework that handles more of the app lifecycle and includes features like two-way data binding.
Vue.js also uses a Virtual DOM but is more flexible with a gentle learning curve compared to Angular. It is similar to React in being component-based but offers some built-in features that React doesn’t (e.g., a built-in state management solution).

2. Explain how the Virtual DOM works in React.js.
Answer: The Virtual DOM is an in-memory representation of the actual DOM. When a state change occurs in a React component, React first updates the Virtual DOM and then compares it with the previous Virtual DOM (using a process called “diffing”). React only applies the differences to the real DOM, optimizing updates.

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
React only updates the <h1> tag in the real DOM, not the entire component.

3. What are React Hooks, and why were they introduced?
Answer: Hooks were introduced to allow developers to use state and other React features in functional components without needing to convert them into class components. Common hooks include useState, useEffect, useContext, etc.

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

4. How do you manage state in React applications?
Answer: State can be managed in several ways:

Local State: Managed via useState.
Global State: Managed using Context API or state management libraries like Redux or MobX.
// Local state example:
const [count, setCount] = useState(0);

// Context API for global state:
const AppContext = React.createContext();
5. Explain the Context API and its typical use cases.
Answer: The Context API provides a way to pass data through the component tree without passing props manually at every level. It’s useful for global data like user authentication, theme preferences, or language settings.

const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return <button className={theme}>Button</button>;
}

6. How does React’s component lifecycle work, and how has it changed with the introduction of hooks?
Answer: Class components have lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount. Hooks such as useEffect replace these lifecycle methods in functional components.

function Component() {
  useEffect(() => {
    // componentDidMount or componentDidUpdate logic
    return () => {
      // componentWillUnmount logic
    };
  }, []);
}
7. What are the differences between controlled and uncontrolled components in React?
Answer:

Controlled components rely on React state to manage form inputs.
Uncontrolled components rely on the DOM and use refs for accessing values.
// Controlled component example:
function ControlledInput() {
  const [value, setValue] = React.useState('');

  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}

// Uncontrolled component example:
function UncontrolledInput() {
  const inputRef = React.useRef();

  return <input ref={inputRef} />;
}

8. How would you optimize the performance of a React application?
Answer:

Code Splitting: Using React.lazy and Suspense.
Memoization: Using React.memo, useMemo, and useCallback.
Avoid unnecessary re-renders: Proper use of keys and preventing state mutation.
Lazy Loading: Load components and data only when needed.
const MemoizedComponent = React.memo(({ count }) => {
  return <div>{count}</div>;
});
9. What is Prop Drilling, and how can it be avoided in React?
Answer: Prop drilling occurs when data is passed through multiple components that don’t need it, just to reach a child component. This can be avoided by using the Context API or a state management library.

// Avoiding prop drilling using Context API
const UserContext = React.createContext();
10. What is the significance of keys in React, and how do they work in lists?
Answer: Keys help React identify which items in a list have changed, are added, or are removed, thus optimizing re-renders. Keys should be unique and stable.

<ul>
  {items.map(item => <li key={item.id}>{item.name}</li>)}
</ul>


11. How do you handle side effects in React components?
Answer: Side effects such as data fetching or subscriptions are handled using the useEffect hook.

useEffect(() => {
  // Data fetching or subscription
  return () => {
    // Clean-up subscription if necessary
  };
}, []); // Empty dependency array to run only on mount
12. What are Higher-Order Components (HOCs) in React, and when should you use them?
Answer: HOCs are functions that take a component and return a new component, useful for reusing component logic.

function withLoading(Component) {
  return function LoadingWrapper(props) {
    if (props.isLoading) return <div>Loading...</div>;
    return <Component {...props} />;
  };
}
13. What is React.memo, and how does it help with performance optimization?
Answer: React.memo is a higher-order component that prevents a functional component from re-rendering if its props haven't changed.

const MyComponent = React.memo(({ name }) => {
  return <div>{name}</div>;
});

14. Can you explain the difference between functional and class components?
Answer:

Class Components have lifecycle methods and this keyword.
Functional Components are simpler, use hooks like useState and useEffect, and are preferred in modern React development.
// Class component example:
class MyComponent extends React.Component {
  state = { count: 0 };
  render() {
    return <div>{this.state.count}</div>;
  }
}

// Functional component example:
function MyComponent() {
  const [count, setCount] = React.useState(0);
  return <div>{count}</div>;
}
15. What are Fragments in React, and why are they useful?
Answer: Fragments allow grouping multiple elements without adding extra nodes to the DOM, helping to avoid unnecessary wrapping elements like <div>.

return (
  <React.Fragment>
    <h1>Title</h1>
    <p>Paragraph</p>
  </React.Fragment>
);
16. How would you handle form validation in React?
Answer: Form validation can be handled manually or using libraries like Formik or React Hook Form.

// Manual validation example:
function Form() {
  const [value, setValue] = React.useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === '') {
      alert('Field is required');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}