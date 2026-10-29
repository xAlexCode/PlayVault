export type Game = {
    id: string
    title: string
    platform: string
    status: string
    rating: number | null
    coverUrl: string
    notes: string
}

export type Status = 'want' | 'playing' | 'completed' | 'dropped'

export type NewGame = {
    title: string
    platform: string
    status: Status
    rating: number | null
    coverUrl: string
    notes: string
}