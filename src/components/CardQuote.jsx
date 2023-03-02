import { useLayoutEffect, useRef, useState } from "react";

export const CardQuote = ({quote,author}) => {

  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({
    width:0,
    height:0
  })

  const {width,height} = boxSize

  useLayoutEffect(() => {
    const {width,height} = pRef.current.getBoundingClientRect()
    setBoxSize({
      width: width,
      height: height
    })
  }, [quote])

  return (
        
    <>
    <blockquote 
        className="blockquote text-end"
        style={{display: 'flex'}}>
        <p className="mb-2" ref={pRef}> {quote} </p>
        <footer className="blockquote-footer"> {author} </footer>
    </blockquote>
    <h5>El ancho es: {width} y el alto es: {height} </h5>
    </>
    
  )
}
