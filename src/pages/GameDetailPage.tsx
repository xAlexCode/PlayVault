import { useEffect, useState } from 'react'
import { API_URL } from '../../config'
import type { Game } from '../types'
import { Link, useNavigate, useParams} from 'react-router'


const GameDetailPage = () => {
    const { id } = useParams() // Get the game ID from the URL 
    const navigate = useNavigate()
    const [game, setGame] = useState<Game | null>(null) // The selected game from the api
    const [message, setMessage] = useState('') // for displaying error messages
    const [loading, setLoading] = useState(true) // Use while waiting for API response

    useEffect(() => {
      console.log(`Fetching details for game with ID: ${id}`)
        const fetchGameDetails = async () => {
            try {
                const response = await fetch(`${API_URL}/games/${id}`)
                const data = await response.json()

                if (!response.ok) {
                    setMessage(data.message)
                    return
                }
                setGame(data)
            }  catch {
                setMessage('Could not reach the API. Is it running?') //sets the error message in {message}
            } finally {
                setLoading(false)
            }
        }   
        fetchGameDetails()
    }, [id])

   const deleteGame = async () => {
        try {
            const response = await fetch(`${API_URL}/games/${id}`, { method: 'DELETE' })
            if (response.ok) {
            navigate('/games')
            } else {
            setMessage('Could not delete the game.')
            }
        } catch {
        setMessage('Could not reach the API. Is it running?')
        }
    }

    if (loading) { // If the game is still loading, display a loading message
        return <p>Loading game...</p>
    }

    if (message) { // If there's an error message, display it
        return (
        <section>
            <p>{message}</p>
            <Link to="/games">Back to all Games</Link>
        </section>
        ) // borde de va så
    }

    if (!game) { // If no game is found
        return <p>Game not found.</p>
    }

    return (
     <section>
            <h1>{game.title}</h1>
            <img src={game.coverUrl} alt={game.title} />
            <p>Platform: {game.platform}</p>
            <p>Status: {game.status}</p>
            <p>Rating: {game.rating ?? 'No rating'}</p>
            <p>Notes: {game.notes}</p>
            <Link to={`/games/${game.id}/edit`}>Edit</Link>{' '}
            <button onClick={deleteGame}>Delete</button>
            <p>
                <button onClick={() => navigate(-1)}>Go back</button> 
            </p>
        </section>
    )
}

export default GameDetailPage