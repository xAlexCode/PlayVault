import { useEffect, useState } from 'react'
import {API_URL} from '../../config'
import type { Game } from '../types'
import { Link } from 'react-router'


const GamePage = () => {
  const [games, setGames] = useState<Game[]>([])
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('Fetching games...') //Check to avoid loop, get 2 per time
    fetch(`${API_URL}/games`)
    .then((response) => {
      if (!response.ok) throw new Error('Bad response')
      return response.json()
      })
    .then((data: Game[]) => setGames(data))
    .catch(() => setMessage('Could not fetch games. Is the API running?'))
    .finally(() => setLoading(false))
  }, [])

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
            </div>
        ))}
        <Link to="/games/new">Add New Game</Link>
    </section>
  )
}

export default GamePage