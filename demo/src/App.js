import React from 'react';
import './App.css';
import Users from'./Page/user'
function App(props) {
  console.log(props)
  return (
    <div>
      <Users props/>
    </div>
  );
}

export default App;
