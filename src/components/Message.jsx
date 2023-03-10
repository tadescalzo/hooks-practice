import { useEffect, useState } from "react"

export const Message = () => {

    const [mouseCoord, setMouseCoord] = useState({
        x:0,
        y:0
    })

    useEffect(() => {
        const onMouseMove= ({x,y}) =>{
            setMouseCoord({x,y})
        }    
            window.addEventListener('mousemove',onMouseMove)
            
        return () => {
            window.removeEventListener('mousemove',onMouseMove)
        }
    }, [])
    
  return (
    <>
        <h3>Usuario ya existe test</h3>
        {
           JSON.stringify(mouseCoord)
        }
    </>
  )
}
