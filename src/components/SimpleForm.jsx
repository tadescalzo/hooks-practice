import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'nacho',
        mail: 'arkie@gmail.com'
    })

    const {username,mail} = formState

    useEffect(()=>{
    },[]);

    useEffect(()=>{
    },[mail]);

    useEffect(()=>{
    },[username]);

    const inputChange = ({target}) =>{

        const {name, value} = target;

        setformState({
            ...formState,
            [name] : value
        });
    }

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input type="text" 
        className="form-control mt-2"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ inputChange }
        />
        <input type="text" 
        className="form-control mt-2"
        placeholder="Email"
        name="mail"
        value={mail}
        onChange={ inputChange }
        />
        {
            (username === 'Arkie') && <Message/>
        }
        
    </>
  )
}
