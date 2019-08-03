import React from 'react';
import './App.css';
import Input from './components/input';

function App() {
  return (
    <div className="App">
      <Input fontSize="24pt" fontFamily="Roboto" fontWeight={300} color="#000" italic={false}></Input>
    </div>
  );
}

export default App;
