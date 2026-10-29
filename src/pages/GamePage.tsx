import { useEffect, useState } from 'react'
import {API_URL} from '../../config'
import type { Game, Status } from '../types'
import { Link, useSearchParams} from 'react-router'
import GameCard from '../components/GameCard'
import StatusFilter from '../components/StatusFilter'


const GamePage = () => {
  const [games, setGames] = useState<Game[]>([])
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [searchParams, setSearchParams] = useSearchParams() //useSearchParams is like useState but for URL parameters, where the values adress is (/games?status=playing
  const status = searchParams.get('status') as Status | null // null, no filter (All)

  useEffect(() => { 
    const fetchGames = async () => {
      console.log('Fetching games...')
      setLoading(true) // show loading when switching filters
      setMessage('') // clear any previous messages
      try {
        const url = status ? `${API_URL}/games?status=${status}` : `${API_URL}/games` //with filter = /games?status=playing, no filter = All games
        const response = await fetch(url)
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
  }, [status]) // Re-fetch games when the status filter changes

  const handleFilterChange = (newStatus: Status | null) => { // Runs when a filterbutton is clicked, it changes the adress and when the adress changes the status changes and the list re-renders. 
    if (newStatus) {
        setSearchParams({ status: newStatus })
    } else {
        setSearchParams({})
    }
  }

  return (
    <section>
        <h1>Games</h1>
         <StatusFilter status={status} onChange={handleFilterChange} />
        {loading && <p>Loading games...</p>}
        {message && <p>{message}</p>}
        {!loading && !message && games.length === 0 && <p>No games found...</p>}
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