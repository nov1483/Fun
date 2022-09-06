import React, { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='counter'>
        <h1>{count}</h1>
        <button onClick={() => setCount( count + 1 )}>Like</button>
        <button onClick={() => setCount( count - 1 )}>Dislike</button>
    </div>
  )
}

export default Counter