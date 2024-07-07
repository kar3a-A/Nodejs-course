import { Link, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";


const Detail = () => {
    let param =useParams();
    let url = `http://localhost:5000/blogs/${param.id}`
    let {data: blog, loading, error}=useFetch(url)
  return (
    <div>
        {error && <h1>{error}</h1>}
        {loading && <h1>Loading...</h1>}
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