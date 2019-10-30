import React, { useState } from 'react';
import './App.css';
import Users from'./Page/user'
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <Users />
    </div>
  );
}

export default App;
