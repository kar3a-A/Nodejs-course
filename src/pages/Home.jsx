import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch.js'
import styles from './Home.module.css'

function Home() {
    let url = 'http://localhost:5000/blogs'
    let {data: blogs, loading, error} =useFetch(url)
    return (
        <div className='Home'>
            { error && <h1>{error}</h1> }
            { loading && <h1>Loading...</h1> }
            { blogs &&
                blogs.map((blog)=>{
                    return( 
                        <div 
                            className={styles.card}
                            key={blog.id}>
                            <h1>{blog.title}</h1>
                            <p>Posted by: {blog.author}</p>
                            <Link to={`/blogs/${blog.id}`}>Read More</Link>
                        </div>
                    )
                })    
            }
        </div>
    )
}

export default Home
