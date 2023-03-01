export const CardQuote = ({quote,author}) => {
  return (
        <blockquote className="blockquote text-end">
        <p className="mb-2"> {quote} </p>
        <footer className="blockquote-footer"> {author} </footer>
        </blockquote>
    
    
  )
}
