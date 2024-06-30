import { useState } from 'react'
import styles from './PostForm.module.css'

// eslint-disable-next-line react/prop-types
const PostForm = ({addPost}) => {
    const [title, settitle] = useState("")
    let resetForm = () =>{
      settitle("")
    }
    let uploadPost= (e)=>{
      e.preventDefault();
      let post = {
        id: Math.floor(Math.random()*10000),
        title: title
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
            <input type="text" onChange={(e)=> settitle(e.target.value)} value={title}/>
        </div>
        <p>{title}</p>

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