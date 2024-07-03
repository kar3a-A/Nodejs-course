import { useEffect, useState } from "react"



function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        // abort controller
        let abortController = new AbortController();
        let signal = abortController.signal

        setLoading(true);
        fetch(url,{
            signal: signal
        })
        .then(response =>{
            console.log(response)
            if(!response.ok){
                throw Error("something went wrong")

            }
            return response.json()
        })
        .then(data => {
            setData(data)
            setLoading(false)
            setError(null)
        },[url])
        .catch(err => {
            console.log(err.message);
            setError(err.message)
        })

        // cleanup function
        return () =>{
            abortController.abort()
        }
    }, [url]);
    

    return {data,loading,error}
}

export default useFetch