import { useState, type SubmitEvent } from 'react'
import type { NewGame, Status } from '../types'

type GameFormProps = {
    initialValues?: NewGame // optional prefilled initial values for the form, used when editing an existing game
    onSubmit: (game: NewGame) => void // function to be called when the form is submitted

}

export const GameForm = ({ initialValues, onSubmit }: GameFormProps) => {
    // One state variable for each form field. "?? ''" means use the initial value if it exists, otherwise use an empty string
    const [title, setTitle] = useState(initialValues?.title ?? '')
    const [platform, setPlatform] = useState(initialValues?.platform ?? '')
    const [status, setStatus] = useState<Status>(initialValues?.status ?? 'want')
    const [rating, setRating] = useState<number | null>(initialValues?.rating ?? null)
    const [coverUrl, setCoverUrl] = useState(initialValues?.coverUrl ?? '')
    const [notes, setNotes] = useState(initialValues?.notes ?? '')

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit({ title, platform, status, rating, coverUrl, notes }) // Submit the funktion from the page with (createGame) and sends all fields as values
    }

  return (
    <form onSubmit={handleSubmit}>
            <label>
            Title
            <input value={title} onChange={(e) => setTitle(e.target.value)} required />
            </label>

            <label>
            Platform
            <input value={platform} onChange={(e) => setPlatform(e.target.value)} required />
            </label>

            <label>
            Status
            {/* value= is the API value ex (want) and th etet is what the user should see*/}
            <select value={status} onChange={(e) => setStatus(e.target.value as Status)}>
                <option value="want">Want to play</option>
                <option value="playing">Playing</option>
                <option value="completed">Completed</option>
                <option value="dropped">Dropped</option>
            </select>
            </label>

            <label>
            Rating
            <select
                value={rating ?? ''}
                onChange={(e) =>
                    setRating(e.target.value === '' ? null : Number(e.target.value))
                }
                >
                <option value="">No rating</option>
                {[1, 2, 3, 4, 5].map((rating) => (
                    <option key={rating} value={rating}>{rating}</option>
                ))}
                </select>
            </label>

            <label>
            Cover URL
            <input value={coverUrl} onChange={(e) => setCoverUrl(e.target.value)} />
            </label>

            <label>
            Notes
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
            </label>

            <button>Save</button>
      </form>
  )
}

export default GameForm



