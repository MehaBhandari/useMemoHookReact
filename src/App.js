import React, {useState} from 'react';

export default function App() {
  const [count, setCount] = useState(1000);

  function returnValue(inputVal){
    console.log('returnValue function is called...');
    return inputVal+10;
  }

  var calculatedValue = returnValue(10);

  setTimeout(()=>{
    setCount(count+1);
  },1000)

  return (
    <div>
      <h1>Hello App</h1>
      <p>You clicked: {count} times.</p>
      <p>Random value: {calculatedValue} times.</p>
      <button onClick={()=>{setCount(count+1)}}>Update Count</button>
    </div>
  )
    
}
