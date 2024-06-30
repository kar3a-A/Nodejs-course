import { useState } from 'react'
import styles from './PostForm.module.css'

const PostForm = () => {
    const [title, settitle] = useState("")
  return (
    <>
      <form className={styles.postForm}>
        <h2>Create Post</h2>
        <div className={styles.formControl}>
            <label htmlFor="">Title</label>
            <input type="text" onChange={(e)=> settitle(e.target.value)}/>
        </div>
        <p>{title}</p>
        <div className={styles.formControl}>
            <button >Post Now</button>
        </div>
      </form>
    </>
  )
}

export default PostForm