import { useDispatch, useSelector } from "react-redux";
import { InitialStateType } from "@/types/PokemonType/PokemonType";
import { getPokemonData } from "@/store/utils/PokemonDetails/getPokemonData";

export const Pokemon = () => 
{
    const dispatch = useDispatch();
    const PokemonProfile = useSelector((state: InitialStateType) => state.pokemon);
    const {id, name, image} = PokemonProfile
    const status = useSelector((state: InitialStateType) => state.status);

    return (
        <main>
            {status!=="idle" && (
                status === "loading" ? 
                    <>
                        <h1 className="loader-title">Obteniendo datos de tú pokemon</h1>
                        <span className="loader"></span>
                    </> :
                    <div className="pokemon-card">
                        
                        <h1 className="pokemon-name">{name}</h1>
                        <h2 className="pokemon-number">{id}</h2>

                        <img src={image} className="pokemon-img" />
                    </div>
                )         
        }    
            <button className="pokemon-button" onClick={() => getPokemonData(dispatch)}>Buscar datos de un Pokemon</button>            
        </main> 
    )
}