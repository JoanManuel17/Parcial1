import { useState } from "react";

export const Componente = () => {
  const [segundos, setSegundos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);

  const convertir = () => {
    setHoras(Math.floor(segundos / 3600));
    setMinutos(Math.floor((segundos % 3600) / 60));
    setSegundos(Math.floor((segundos % 3600) % 60));
    console.log(horas);
    console.log(minutos);
    console.log(segundos);
  };

  return (
    <>
      <div>
        <h1>Componente convertir segundos</h1>
        <input
          type="number"
          value={segundos}
          onChange={(evt) => setSegundos(evt.target.value)}
        ></input>

        <button onClick={() => convertir()}> Convertir </button>
        <p>
          {horas} horas, {minutos} minutos y {segundos} segundos
        </p>
      </div>
    </>
  );
};
