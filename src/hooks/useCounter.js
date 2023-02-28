import { useState } from "react"

export const useCounter = (initialValue) => {

    const [counter, setCounter] = useState(initialValue)

    const incrementCounter = () =>{
        setCounter(counter+1)
    }

    const decrementCounter = () =>{
        if (counter === 0) return
        setCounter(counter-1)
    }

    const resetCounter = () =>{
        setCounter(initialValue)
    }

    return{
        counter, 
        incrementCounter,
        decrementCounter,
        resetCounter,
    }
}
