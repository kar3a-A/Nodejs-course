import { useRef } from 'react'
import styles from './PostForm.module.css'

// eslint-disable-next-line react/prop-types
const PostForm = ({addPost}) => {
    const title = useRef(null)
    let resetForm = () =>{
      if (title.current) {
        title.current.value = ""
      }
    }
    let uploadPost= (e)=>{
      e.preventDefault();
      let post = {
        id: Math.floor(Math.random()*10000),
        title: title.current && title.current.value
      }
      resetForm()
      addPost(post)
    }
  return (
    <>
      <form className={styles.postForm} 
        onSubmit={uploadPost}>
        <h2>Create Post</h2>
        <div className={styles.formControl}>
            <label htmlFor="">Title</label>
            <input type="text" ref={title}/>
        </div>
        <p>{title.current && title.current.value}</p>

        <div className={styles.formControl}>
            <button style={{marginRight:3}}
              type='submit'>
              Post Now
            </button>
        </div>
      </form>
    </>
  )
}

export default PostForm