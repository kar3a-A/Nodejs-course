import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import PostsList from "./components/PostsList/PostsList"
import Modal from "./components/Modal/Modal"





const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [posts, setposts] = useState([
    {
      id: 1,
      title: "post 1"
    },
    {
      id: 2,
      title: "post 2"
    },
    {
      id: 3,
      title: "post 3"
    }
  ])
  const [showModal, setshowModal] = useState(false)
  return (
    <>
      <Navbar setshowModal={setshowModal}/>
      <PostsList posts={posts}/>
      {
        showModal && 
        <Modal setshowModal={setshowModal}>
          { /* Modal content */ }
          <h1>Zoom class is available now.</h1>
          <p>Anyone can join.</p>
        </Modal>
      }

    </>
  )
}

export default App