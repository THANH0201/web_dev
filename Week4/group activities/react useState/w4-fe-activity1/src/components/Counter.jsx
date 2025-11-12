import './Counter.css';
import { useState } from 'react';
const Counter = () => {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      {/* toggle theme buttons */}
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
      <h2>{count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(prevCount => {
        const newCount = prevCount - 1;
        if(newCount < 0) {alert("Count cannot be negative"); return 0;}
        return newCount;
      })}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
