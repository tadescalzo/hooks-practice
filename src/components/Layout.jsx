import { useCounter, useFetch } from "../hooks";
import { CardQuote } from "./CardQuote";
import { Loading } from "./Loading";

export const Layout = () => {

  const {incrementCounter, counter} = useCounter(1)
  const {data,isLoading,hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
  const {author, quote} = !!data && data[0]
    

  return (
    <>
      <h1>Quotes:</h1>
      <hr />
      
      {
        isLoading 
        ? <Loading/> 
        : <CardQuote quote={quote} author={author} />
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
