import { useState } from 'react'
import Title from '../Title/Title'


const Counter = ({ children, render }) => {
    const initial = 10
    let [count, setCount] = useState(initial)

    const decrement = () => {
        // accu = accu - 1
        if(count > 0) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        // accu = accu + 1
        setCount(count + 1)
    }

    const reset = () => {
        setCount("0")
    }

    return (
        <div>
             <div>
            <Title title="Comprar"/>
            {children}
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={reset}>Reset</button>
            {render}
        </div>
        </div>
    )
}

export default Counter