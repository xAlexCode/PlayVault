import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
        <header>
            <nav />
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