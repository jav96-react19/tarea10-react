
import { InitialStateType } from "@/types/PokemonType/PokemonType";

const initialState = {
    pokemon: {
        id: 0,
        name: "", 
        image: "",
    },
    status: "idle",
    error: null,

}satisfies InitialStateType as InitialStateType

export default initialState;