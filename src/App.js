import React, { useState } from 'react'
import './App.css'

function App() {
  const[result,setResult]=useState('');
  
const HandleClick=(e)=>{
   setResult(result.concat(e.target.name))
}
const clear =()=>{
  setResult('')
}
const backspace=()=>{
  setResult(result.slice(0,-1))
}
const Calculate=(e)=>{
  try{
  setResult(eval(result).toString())
}catch(err){
  setResult('Error')
}
}
  
  return (
    <div>
      <>
       <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="notepad">
          
       <button className='heihlight' onClick={clear}  id='clear'>Clear</button>
       <button className='heihlight' onClick={(e)=>backspace(e)} id='backspace'>C</button>
       <button name='0' onClick={(e)=>HandleClick(e)}>0</button>
       <button name='/'className='heihlight' onClick={(e)=>HandleClick(e)}>&divide;</button>
       <button name='9' onClick={(e)=>HandleClick(e)}>9</button>
       <button name='8' onClick={(e)=>HandleClick(e)}>8</button>
       <button name='7' onClick={(e)=>HandleClick(e)}>7</button>
       <button name='-'className='heihlight' onClick={(e)=>HandleClick(e)}>&ndash;</button>
       <button name='6' onClick={(e)=>HandleClick(e)}>6</button>
       <button name='5' onClick={(e)=>HandleClick(e)}>5</button>
       <button name='4' onClick={(e)=>HandleClick(e)}>4</button>
       <button name='*'className='heihlight' onClick={(e)=>HandleClick(e)}>&times;</button>
       <button name='3' onClick={(e)=>HandleClick(e)}>3</button>
       <button name='2' onClick={(e)=>HandleClick(e)}>2</button>
       <button name='1' onClick={(e)=>HandleClick(e)}>1</button>
       <button name='+'className='heihlight' onClick={(e)=>HandleClick(e)}>+</button>
       <button name='.'  onClick={(e)=>HandleClick(e)}>.</button>
        <button id='equal' className='heihlight'onClick={(e)=>Calculate(e)}>=</button>
        </div>
       </div>
      </>
    </div>
  )
}

export default App;
