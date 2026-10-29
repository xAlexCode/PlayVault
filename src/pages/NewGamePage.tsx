import { useState } from 'react'
import { useNavigate } from 'react-router'
import { API_URL } from '../../config'
import type { NewGame } from '../types'
import { GameForm } from '../components/GameForm'

const NewGamePage = () => {
    const navigate = useNavigate()
    const [message, setMessage] = useState('')

    const createGame = async (values: NewGame) => { // GameForm calls this function when pressing save och sends all fields as values
        console.log(values)
        setMessage('')

        try {
            const response = await fetch(`${API_URL}/games`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(values) // values from the form
            })
            const data = await response.json()

        if (!response.ok) {
            setMessage(data.message)
            return
        } 
        navigate('/games')
        } catch {
        setMessage('Failed to create game')
      
    }
}

  return (
   <section>
        <h1>Add game</h1>
        {message && <p role="alert">{message}</p>}
        {/* Sending createGame to the form as a prop, no initialValues here so the fields starts empty*/ }
        <GameForm onSubmit={createGame} />
    </section>
  )
}

export default NewGamePage