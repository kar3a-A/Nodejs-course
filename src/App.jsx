import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import PostsList from "./components/PostsList/PostsList"





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

  return (
    <>
      <Navbar />
      <PostsList posts={posts}/>
    </>
  )
}

export default App