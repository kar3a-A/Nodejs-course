import './PostsList.css'
import styles from './single_post.module.css'
// {posts} is the desctructured props
// for not using props.posts
// eslint-disable-next-line react/prop-types
const PostsList = ({posts}) => {
  return (
    <>
      <div className="postsList-component">
      {/* eslint-disable-next-line react/prop-types */}
        { posts.map((post)=>{
          return (
          <div key={post.id} className={`single-post ${styles.card}`}>
              <h3>{post.title}</h3> 
              <h4>Status: {post.status}</h4>

            </div>
          )
          })
        }
      </div>
    </>

  )
}

export default PostsList