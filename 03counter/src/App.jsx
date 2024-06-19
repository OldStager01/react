import {useState} from'react'
import './App.css'

function App() {
  const [counter,setCounter]=useState(0);

  const increment=()=>{
    setCounter(counter+1);
  }
  const decrement=()=>{
    if(counter>0)
      setCounter(counter-1);
  }
  const fourIncrement=()=>{
    //!We'll have to use callback function in setCounter having param as previous value i.e last updated value of counter as using setCounter(counter+1) four times will only lead to increment once due to fiber (Commands are sent in batches and since they are same all four commands will be treated as one command)
    if(counter<=0) return;
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);

  }
  const fourDecrement=()=>{
    //!We'll have to use callback function in setCounter having param as previous value i.e last updated value of counter as using setCounter(counter-1) four times will only lead to decrement once due to fiber (Commands are sent in batches and since they are same all four commands will be treated as one command)
    if(counter<=3) return;
    setCounter((prevCounter)=>prevCounter-1);
    setCounter((prevCounter)=>prevCounter-1);
    setCounter((prevCounter)=>prevCounter-1);
    setCounter((prevCounter)=>prevCounter-1);
  }
  return (
   <>
   <h1>Counter : {counter}</h1>
   <button onClick={increment}>Increment: {counter}</button>
   <br />
   <button onClick={decrement}>Decrement: {counter}</button>
   <br />
   <button onClick={fourIncrement}>Increment by 4: {counter}</button>
   <br />
   <button onClick={fourDecrement}>Decrement by 4: {counter}</button>
   </>
  )
}

export default App
