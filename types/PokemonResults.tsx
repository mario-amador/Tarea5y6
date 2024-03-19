import Pokemon from "./Pokemon"

type PokemonResults = {
    count: number,
    next: null | string,
    previous: null | string,
    results: Pokemon [],

}
export default PokemonResults;