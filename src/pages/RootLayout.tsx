import { Outlet } from "react-router";
import { Nav } from "../components/Nav";
import { Link } from "react-router";

const RootLayout = () => {
  return (
    <div className="app">
        <header>
            <Nav />
        </header>

        <main>
            <Outlet />
        </main>

        <footer>
            <span> 🕹️ PlayVault</span>
            <div className="footer-links">
                <a href="https://github.com/xAlexCode" target="_blank" rel="noreferrer">GitHub</a>
                <Link to="/games">Games</Link>
            </div>
            <span>©PlayVault {new Date().getFullYear()}</span>
        </footer>
    </div>
  )
}

export default RootLayout