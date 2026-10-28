import { Link } from 'react-router'
import type { Game } from '../types'

type Props = {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <div>
            <h2>{game.title}</h2>
            <p>{game.notes}</p>
            <img src={game.coverUrl} alt={game.title} />
            <Link to={`/games/${game.id}`}>View Game</Link>
        </div>
    )
}

export default GameCard