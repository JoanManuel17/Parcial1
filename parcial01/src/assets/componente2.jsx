import { useState } from "react";

export const Componente2  =  ()  => {
    const [minutos, setMinutos] = useState(0)
    const [costo, setCosto] = useState(0)
    const [total, setTotal] = useState(0)
    
    const calcular = () => {
        setCosto(100)
        if(minutos > 3){
        setCosto(costo + ((minutos - 3) * 50))
        }
        setTotal(costo)
    }
    
    return (
        <>
        <div>
            <h1>Componente calcular costo de llamada</h1>
            <input type="number" value={minutos} 
            onChange={(evt) => setMinutos(evt.target.value)}
            ></input>

            <button onClick={ () => calcular()}> Calcular </button>
            <p>
            El costo de la llamada es de {total} pesos
            </p>
        </div>
        </>
    )
    }


