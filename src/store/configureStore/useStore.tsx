import { configureStore } from '@reduxjs/toolkit'
import {thunk} from "redux-thunk"
import { pokemonSlice } from '../slice/pokemonSlice';

const useStore = configureStore({
    reducer: pokemonSlice.reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend().concat(thunk),
})
export default useStore

