
export type PokemonType = {
    id: number,
    name: string,
    image: string
}

export type InitialStateType = {
    pokemon: PokemonType,
    status: string,
    error: string | null | undefined
}