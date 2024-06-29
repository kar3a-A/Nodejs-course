import './Navbar.css'

const Navbar = ({setshowModal}) => {
  return (
    <>
      <nav>
          <div className="container">
              <h1>logo</h1>
              <ul>
                  <li>Home</li>
                  <li>Posts</li>
                  <li onClick={()=>setshowModal(true)}>SignIn</li>
              </ul>
          </div>
      </nav>  
    </>

  )
}

export default Navbar