import { NavLink } from "react-router"

export const Nav = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/games">Games</NavLink>
        <NavLink to="/games/new">New Game</NavLink>
    </nav>
  )
}
