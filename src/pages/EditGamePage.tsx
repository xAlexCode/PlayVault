import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { API_URL } from '../../config'
import type { Game, NewGame } from '../types'
import { GameForm } from '../components/GameForm'

const EditGamePage = () => {
    const { id } = useParams() // id från adressen: /games/:id/edit
    const navigate = useNavigate()
    const [game, setGame] = useState<Game | null>(null)
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
      const fetchGame = async () => { // Fetch the existing game so the form can be prefilled with current values
        try {
          const response = await fetch(`${API_URL}/games/${id}`)
          const data = await response.json()

          if (!response.ok) {
            setMessage(data.message)
            return
          }
          setGame(data)
        } catch {
            setMessage('Could not reach the API. Is it running?')
        } finally {
            setLoading(false)
        }
      }
      fetchGame()
    }, [id])

    const updateGame = async (values: NewGame) => { // Receives the form values from GameForm and updates the game in the API
        setMessage('')
        try {
            const response = await fetch(`${API_URL}/games/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            const data = await response.json()

            if (!response.ok) {
                setMessage(data.message)
                return
            }
            navigate(`/games/${id}`)
        } catch {
            setMessage('Could not reach the API. Is it running?')
        }
    }

    if (loading) {
        return <p>Loading...</p>
    }

    if (!game) {
        return (
            <section>
                <Link to="/games">Back to all games</Link>
                <p>Game not found</p>
            </section>
        )
    }

  return (
   <section>
        <h1>Edit game</h1>
        {message && <p role="alert">{message}</p>}
        {/* initialValues fills the form fields with the game's current data. onSubmit calls updateGame when the form is submitted */}
        <GameForm initialValues={game} onSubmit={updateGame} />
    </section>
  )
}

export default EditGamePage