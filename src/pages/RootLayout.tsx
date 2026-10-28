import { Outlet } from "react-router";
import { Nav } from "../components/Nav";

const RootLayout = () => {
  return (
    <div>
        <header>
            <Nav />
        </header>

        <main>
            <Outlet />
        </main>

        <footer>
            {new Date().getFullYear()} @ All rights reserved
        </footer>
    </div>
  )
}

export default RootLayout