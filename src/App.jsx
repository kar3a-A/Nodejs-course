import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import PostsList from "./components/PostsList/PostsList"
import Modal from "./components/Modal/Modal"
import PostForm from "./components/PostForm/PostForm"





const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [posts, setposts] = useState([
    {
      id: 1,
      title: "Manga",
      status: "ongoing"
    },
    {
      id: 2,
      title: "Book",
      status: "dropped"
    },

  ])

  let addPost = (post) =>{
    setposts((prev)=>[...prev, post ])
    setshowModal(false)
  }
  const [showModal, setshowModal] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [danger, setdanger] = useState(true)

  return (
    <>
      <Navbar setshowModal={setshowModal}/>
      <PostsList posts={posts}/>
      {
        showModal && 
        <Modal danger={danger} setshowModal={setshowModal}>
          { /* Modal content */ }
          <PostForm addPost={addPost}/>
        </Modal>
      }

    </>
  )
}

export default App