import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {formState,onInputChange,username,email,password,onResetForm} = useForm({
        username:'',
        email:'',
        password:''
    })


  return (
    <>
    <h1>Formulario</h1>
    {console.log('test')}
    <input type="text" 
        className="form-control mt-2"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange }
        />
        <input type="text" 
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={ onInputChange }
        />
        <input type="text" 
        className="form-control mt-2"
        placeholder="Email"
        name="password"
        value={password}
        onChange={ onInputChange }
        />
        <button className="btn btn-primary mt-2" onClick={ onResetForm }>Borrar</button>
    </>
  )
}
