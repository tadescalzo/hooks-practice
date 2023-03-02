import { useRef } from "react"

export const FocusScreen = () => {

  const inputRef = useRef();

  const setFocus = () =>{
    console.log(inputRef)
  }

  return (
    <>
    <h1>Focus screen</h1>
    <hr />

    <input 
    ref={inputRef}
    type="text" 
    placeholder="Ingrese su nombre"
    className="form-control mb-5"
    />

    <button 
    className="btn btn-primary"
    onClick={setFocus}
    >Set focus</button>
    </>
  )
}
