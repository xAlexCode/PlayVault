import { Link } from 'react-router'
import type { Game } from '../types'

type Props = {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <div className='game-card'>
            <img src={game.coverUrl} alt={game.title} />
            <div className='game-card-body'>
                <h2>{game.title}</h2>
                <p>Status: {game.status}</p>
                <Link to={`/games/${game.id}`} className='button'>View Game</Link>
            </div>
        </div>
    )
}

export default GameCard