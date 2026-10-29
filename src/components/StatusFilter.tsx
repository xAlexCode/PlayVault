import type { Status } from '../types'

type StatusFilterProps = {
    status: Status | null // Which filter is currently selected
    onChange: (status: Status | null) => void // function from the page, called on click
}
// buttons are defined once and map create a button for each option.
const options: { value: Status | null; label: string }[] = [
    //value is whats sended to the page (and API) and the label is what is displayed for users.
    { value: null, label: 'All' }, 
    { value: 'want', label: 'Want to Play' },
    { value: 'playing', label: 'Currently Playing' },
    { value: 'completed', label: 'Completed' },
    { value: 'dropped', label: 'Dropped' }
]

export const StatusFilter = ({ status, onChange }: StatusFilterProps) => {
    //console.log('GamePage got new filter:', status)
    return (
        <div>
        {options.map((option) => (
            <button
            key={option.value ?? 'all'}
            onClick={() => { /*console.log('Clicked filter:', option.value),*/ onChange(option.value)}}
            disabled={status === option.value} //the button is disabled if it is currently selected
            >
            {option.label}
            </button>
        ))}
        </div>
    )
}

export default StatusFilter