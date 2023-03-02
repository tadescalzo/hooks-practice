import { useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small'

export const Memorize = () => {

   const {counter, incrementCounter } = useCounter(10)
   const [show, setShow] = useState(true)

    return (
        <>
            <Small value={counter} />
            <button 
            className='btn btn-primary'
            onClick={incrementCounter}>
            +1
            </button>
            <button
            className='btn btn-outline-primary'
            onClick={()=>setShow(!show)}>
                Show/hide {JSON.stringify(show)}
            </button>
        </>
    )
}
