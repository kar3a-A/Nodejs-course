import './Navbar.css'

// eslint-disable-next-line react/prop-types
const Navbar = ({setshowModal}) => {
  return (
    <div className="navbar-component">
      <nav>
          <div className="container">
              <h1>logo</h1>
              <ul>
                  <li>Home</li>
                  <li>Posts</li>
                  <li onClick={()=>setshowModal(true)}>Create Post</li>
              </ul>
          </div>
      </nav>  
    </div>

  )
}

export default Navbar