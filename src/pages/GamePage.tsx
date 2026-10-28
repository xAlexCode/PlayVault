import { useEffect, useState } from 'react'
import {API_URL} from '../../config'
import type { Game } from '../types'
import { Link } from 'react-router'
import GameCard from '../components/GameCard'


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

  if (!games.length) { // If no games are found
    return <p>No games found.</p>
  }

  return (
    <section>
        <h1>Games</h1>
        {loading && <p>Loading games...</p>}
        {message && <p>{message}</p>}
        <p>This is the gamepage for your games.</p>
        {games.map((game) => (
            <GameCard 
                key={game.id} 
                game={game} 
            />
        ))}
        <Link to="/games/new">Add New Game</Link>
    </section>
  )
}

export default GamePage