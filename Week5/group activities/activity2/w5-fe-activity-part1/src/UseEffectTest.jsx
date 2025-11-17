// src/UseEffectTest.jsx
import { useState, useEffect } from 'react';

const UseEffectTest = () => {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [count, setCount] = useState(0);

  // Effect 1
  useEffect(() => {
    console.log('UseEffect1 Ran');
  }, []);

  // Effect 2
  useEffect(() => {
    console.log('UseEffect2 Ran');
    if (toggleTwo) {
      console.log('toggleTwo slice of state is true so this code runs');
    }
  }, [toggleTwo]);

  // Effect 3
useEffect(() => {
  const myInterval = setInterval(() => {
    console.log(`UseEffect3 with interval number ${count} is running`);
  }, 1000);
  return () => {
  console.log(
    `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
  );
  clearInterval(myInterval);
};
}, [count]);

  return (
    <div>
      {console.log('rendered or re-rendered')}
      <h1>UseEffectTest Component</h1>
      <button onClick={() => setToggleOne(!toggleOne,setCount(count+1))}>ToggleOne</button>
      <button onClick={() => setToggleTwo(!toggleTwo,setCount(count+1))}>ToggleTwo</button>
      <p>Count:{count}</p>
    </div>
  );
};

export default UseEffectTest;
