import { useEffect, useState } from 'react'
import {API_URL} from '../../config'
import type { Game } from '../types'
import { Link } from 'react-router'


const GamePage = () => {
  const [games, setGames] = useState<Game[]>([])
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => { 
    const fetchGames = async () => {
      console.log('Fetching games...')
      try {
        const response = await fetch(`${API_URL}/games`)
        const data = await response.json()

        if (!response.ok) {
          setMessage(data.message)
          return
        }
        setGames(data)
      } catch {
        setMessage('Could not reach the API. Is it running?')
      } finally {
        setLoading(false)
      }
    }
    fetchGames()
  }, [])

  if (loading) { // If the games are still loading, display a loading message
    return <p>Loading games...</p>
  }

  if (message) { // If there's an error message, display it
    return <p>{message}</p>
  }

  if (!games.length) { // If no games are found, display a message
    return <p>No games found.</p>
  }

  return (
    <section>
        <h1>Games</h1>
        {loading && <p>Loading games...</p>}
        {message && <p>{message}</p>}
        <p>This is the gamepage for your games.</p>
        {games.map((game) => (
            <div key={game.id}>
                <h2>{game.title}</h2>
                <p>{game.notes}</p>
                <img src={game.coverUrl} alt={game.title} />
                <Link to={`/games/${game.id}`}>View Game</Link>
            </div>
        ))}
        <Link to="/games/new">Add New Game</Link>
    </section>
  )
}

export default GamePage