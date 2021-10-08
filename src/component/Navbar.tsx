import { Link, NavLink } from "react-router-dom"

export const Navbar: React.FC = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper purple darken-4 px1">
          <Link to="/" className="brand-logo">React + Typescript</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/">MyPosts</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}