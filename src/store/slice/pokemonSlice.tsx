import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {endpoint} from "@/services/api/instance/axios.tsx" 
import initialState from "@/store/initialState/initialState.tsx";
import {randomPokemon} from "@/store/utils/PokemonDetails/getRandomNumber";
import type { PayloadAction } from '@reduxjs/toolkit'
import { PayloadType } from "@/types/PayloadType/PayloadType.tsx"


//Obtenemos de forma asincrona con createAsyncThunk los datos de pikachu
export const GetPokemonCharacter = createAsyncThunk("pokemon/character", 
    async() => 
    {
        try
        {
            const request = await endpoint.get(`/${randomPokemon()}`);
            return request.data
        }
        catch(error) {
            return error;
        }
    }
)

//Creamos el reductor con cada una de las acciones que va a tener nuestra store
export const pokemonSlice = createSlice({
    //Identifica de forma única el slice
    name: "pokemon",
    //Inicializa el estado para el pokemon
    initialState,
    //Crea los reductores (reducers)
    reducers : {},

    //Obtenemos los tres tipos de estado de createAsyncThunk (pending, fulfilled y rejected)
    extraReducers: (builder) => {
        //Se ejecuta cuando la tarea asincrona de createAsyncThunk se inicia
        builder.addCase(GetPokemonCharacter.pending, (state, ) => {
            state.status = "loading"
        });
        //Se ejecuta cuando la tarea asincrona de createAsyncThunk se completa
        builder.addCase(GetPokemonCharacter.fulfilled, (state, action: PayloadAction<PayloadType>) => {
            state.status = "success"
            //Exportamos el nombre y la imagen de los datos regresados
            const {name, sprites} = action.payload;
            const {front_shiny} = sprites;
            state.pokemon = {
                id: randomPokemon(),
                name: name,
                image: front_shiny
            }
        });
        //Se ejecuta cuando la tarea asincrona de createAsyncThunk falla
        builder.addCase(GetPokemonCharacter.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        });
    },
  }
)
export default pokemonSlice.reducer
