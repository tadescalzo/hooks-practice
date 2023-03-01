import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import { CardQuote } from "./CardQuote";

export const MultipleCustomHooks = () => {

  const {incrementCounter, counter} = useCounter(1)
  const {data,isLoading,hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
  const {author, quote} = !!data && data[0]
    

  return (
    <>
      <h1>Quotes:</h1>
      <hr />
      
      {
        isLoading ? (
          <h2 className="alert alert-info text-center">
          Loading...
          </h2>
        ):
        (
          <CardQuote quote={quote} author={author} />
        )
      }
      <button 
      className="btn btn-primary" 
      disabled={isLoading}
      onClick={incrementCounter}>
        Agregar Quote
      </button>
  </>
    
  )
}
