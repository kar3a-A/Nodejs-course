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
              {post.title}
            </div>
          )
          })
        }
      </div>
    </>

  )
}

export default PostsList