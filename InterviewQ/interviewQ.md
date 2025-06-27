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