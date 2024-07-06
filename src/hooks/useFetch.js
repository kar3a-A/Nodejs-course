import { useEffect, useState } from "react";



function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [filtered, setFiltered] = useState(data)

    useEffect(() => {
        setIsPending(true)
        fetch(url)
        .then(res => {
          return res.json()
        })
        .then(data => {
          setData(data)
          setFiltered(data)
          console.log(filtered)
          setIsPending(false)
        })
        .catch(err => {
          console.log(err)
        })
      
      }, [url])

    return {data,setData,filtered,setFiltered, isPending}
}


export default useFetch
    