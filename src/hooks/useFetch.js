import { useEffect, useState } from "react";



function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        setIsPending(true)
        fetch(url)
        .then(res => {
          return res.json()
        })
        .then(data => {
          setData(data)
        //   console.log(data)
          setIsPending(false)
        })
        .catch(err => {
          console.log(err)
        })
      
      }, [url])

    return {data, isPending}
}

export default useFetch
    