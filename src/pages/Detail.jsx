import { Link, useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";


const Detail = () => {
    let param =useParams();
    let url = `http://localhost:5000/blogs/${param.id}`
    let {data: blog, loading, error}=useFetch(url)

    let navigate =useNavigate()
    useEffect(() => {
      if(error){
        setTimeout(() => {
          // redirect to home page 
          navigate('/')
        },[1000])

      }
    }, [error, navigate])
    
  return (
    <div>
        {error && <h1>{error}</h1>}
        {loading && <p>Loading...</p>}
        {blog && 
            <div>
                <h1>{blog.title}</h1>
                <p>Posted by: {blog.author}</p>
                <p>{blog.body}</p>
                <Link to={`/`}>Back</Link>
            </div>
        }
    </div>
  )
}

export default Detail