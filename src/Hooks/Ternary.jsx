import React, { useState } from 'react'
import '../App.css/'
const Ternary = () => {
    const [render, setRender] = useState(false)
  return (
    <div>
      {!render ?
      <>
      <div className='box'>
      <img src="https://images.pexels.com/photos/28575769/pexels-photo-28575769/free-photo-of-misty-mountain-peaks-in-soca-valley.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /><br />
      </div>
      <button className='btn' onClick={()=>setRender(true)}>Yes</button>
      <button className='btn' onClick={()=>setRender(false)}>Undo</button>
      </>
      :
      <>
      <h1 className='box'>Element was deleted !!</h1>
      <button className='btn' onClick={()=>setRender(true)}>Yes</button>
      <button className='btn' onClick={()=>setRender(false)}>Undo</button>
      </>
}
    </div>
  )
}

export default Ternary