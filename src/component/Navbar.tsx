import { Link, NavLink } from "react-router-dom"

export const Navbar: React.FC = () => (
  <nav >
    <div className="nav-wrapper purple darken-4  px1" >
      <Link to="/" style={{fontSize:'20px'}}>React + Typescript</Link>
      <ul id="nav-mobile" className="right ">
        <li><NavLink to="/">MyPosts</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </div>
  </nav>
)