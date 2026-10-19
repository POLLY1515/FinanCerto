import CartaoResumo from "./CartaoResumo";
import "./App.css";
import Contador from "./Contador";
import { useState } from "react";


 
function App() {

  const [despesas, setDespesas] = useState(850);
  const receitas = 3000;
  const saldo = receitas - despesas;


  return (

    <main>
      <h1>FinanCerto</h1>
      <p>Organize suas receitas e despesas em um só lugar.</p>
      <div className="resumo-financeiro">
          <CartaoResumo titulo="Receitas" valor=" R$ 3.000,00 "/>
          <CartaoResumo titulo="Despesas" valor={`R$ ${despesas.toLocaleString("pt-BR",
            {minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}
            />
            <button onClick={() => setDespesas(
              valorAnterior => valorAnterior + 100
            )}> Adicionar despesa de R$ 100,00</button>
          <CartaoResumo titulo="Saldo"
           valor={`R$ ${saldo.toLocaleString("pt-BR",
            {minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}
            />
          <Contador />
      </div>
     
    </main>

  );
}

export default App;