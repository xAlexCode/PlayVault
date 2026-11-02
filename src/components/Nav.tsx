import { Link, NavLink } from "react-router"

export const Nav = () => {
  return (
    <>
      <Link to="/">🕹️ PlayVault</Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/games">Games</NavLink>
        <NavLink to="/games/new">New Game</NavLink>
      </nav>
    </>
 
  )
}
