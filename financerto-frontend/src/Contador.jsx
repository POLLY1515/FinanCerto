import { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contagem: {contador}</p>

      <button onClick={() => setContador(c => c + 1)}>
        Aumentar
      </button>
    </div>
  );
}