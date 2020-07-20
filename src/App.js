import React, {useState, useMemo} from 'react';

export default function App() {
  const [count, setCount] = useState(1000);

  function returnValue(inputVal){
    console.log('returnValue function is called...');
    return inputVal+10;
  }
  
  // var calculatedValue = returnValue(10);
  
  // An empty array will also solves our purpose
  // var calculatedValue = useMemo(()=>returnValue(10),[]);
  var calculatedValue = useMemo(()=>returnValue(10),[10]);

  return (
    <div>
      <h1>Hello App</h1>
      <p>You clicked: {count} times.</p>
      <p>Random value: {calculatedValue} times.</p>
      <button onClick={()=>{setCount(count+1)}}>Update Count</button>
    </div>
  )
    
}
// React’s useMemo hook enables us to memoize the result of the execution of a function with a given set of parameters. 
// Next time the function is called with the same parameter, we can return the data that has been cached, rather than re-executing the entire function.
