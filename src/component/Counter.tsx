import { useState } from 'react'
const Counter = () => {
    const [count, setCount] = useState<number>(0)
    const handleClick = () => {
         setCount(prev => prev + 1)
         setCount(prev => prev + 1)
         setCount(prevd => prevd + 1)
         console.log(count);
    }
  return (
    <>
    <button onClick={handleClick}>Increment</button>
    <div>Counter is {count}</div>
    </>
  )
}
// services/counter.ts
export default Counter