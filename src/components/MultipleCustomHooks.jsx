import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {
    const {data,isLoading,hasError,setState} = useFetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const {quote, author} = data[0]
  return (
    <>
    <h1>Test de quotes:</h1>
    <hr />
    <p> {quote} </p>
    <p> {author} </p>
    </>
  )
}
