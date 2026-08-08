import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <Link to="/" ><button>Home</button></Link> {" | "}
            <Link to="/Login"><button>Login</button></Link> {" | "}
            <Link to="/Signup"><button>Signup</button></Link> {" | "}
            <Link to="/Dashboard"><button>Dashboard</button></Link> {" | "}
            <Link to="/Message"><button>Message</button></Link> {" | "}
        </nav>
    </div>
  )
}

export default Navbar