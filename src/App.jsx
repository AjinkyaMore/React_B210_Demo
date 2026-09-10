import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Counter from './Components/Counter'
import Demo from './Components/Demo'
import { useState } from 'react'

function App() {
  
  let [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path={''} element={<Home/>}></Route>
          <Route path={'/counter'} element={<Counter/>}></Route>
        </Routes>
      </BrowserRouter>

      {
        isVisible ? <Demo/> : <h1>Component Hide</h1>
      }
       <button onClick={()=>setIsVisible(!isVisible)}>Show/Hide Demo component</button>


    </>
  )
}

export default App
