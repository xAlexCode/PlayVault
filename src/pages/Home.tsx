import { Link } from "react-router/internal/react-server-client"


const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Welcome to PlayVault</h1>
        <p>Keep track of the games you want to play, are playing, have completed or dropped.</p>
        <div className="actions">
          <Link to="/games" className="button">Games</Link>
          <Link to="/games/new" className="button">New games</Link>
        </div>
      </div>
    </section>
  )
}

export default Home