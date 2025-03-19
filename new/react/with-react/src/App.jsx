import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [value,setValue] = useState(0);
  return (
    <>
      <div className='App'>
        <Navbar logoText="Coding"/>
        <div className="value" color='black'>{value}</div>
        <button onClick={()=>{setValue(value + 1)}}>Click me</button>
      </div>
    </>
  )
}

export default App;