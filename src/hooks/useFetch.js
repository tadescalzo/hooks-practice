import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })
  
    const getFetch = async() =>{

        setState({
            ...state,
            isLoading:true
        })

        const resp = await fetch(url)
        const data = await resp.json()

        console.log(data)

        setState({
            ...state,
            data:data,
            isLoading:false
        })
    }

    useEffect(() => {
        getFetch()
    }, [url])
    
  
    return({
        ...state,
        state,
        setState
   })
}
