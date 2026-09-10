import { useState } from "react"

function Counter() {

    let [counter,setCounter] = useState(0);
    let [clr, setClr] = useState("white"); 
    

  return (
    <div style={{backgroundColor:clr}}>

        <h1>Counter : {counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>++</button>
        <button onClick={()=>setClr("blue")}>Blue Color</button>

        <button>Light Theme</button>
        <button>Dark Theme</button>
    </div>
  )
}

export default Counter