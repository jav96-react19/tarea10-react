import {GetPokemonCharacter} from "@/store/slice/pokemonSlice";

export const getPokemonData = (dispatch) => 
{
    dispatch(GetPokemonCharacter());
}