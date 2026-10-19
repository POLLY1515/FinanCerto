import CartaoResumo from "./CartaoResumo";
import "./App.css";
import Contador from "./Contador";
import { useState } from "react";

function App() {
  const [despesas, setDespesas] = useState(850);
  const [receitas, setReceitas] = useState(3000);
  const [valorReceita, setValorReceita] = useState("");
  const [valorDespesa, setValorDespesa] = useState("");
  const saldo = receitas - despesas;

  return (
    <main>
      <h1>FinanCerto</h1>
      <p>Organize suas receitas e despesas em um só lugar.</p>
      <div className="resumo-financeiro">
        <CartaoResumo
          titulo="Receitas"
          valor={`R$ ${receitas.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
        />

        <CartaoResumo
          titulo="Despesas"
          valor={`R$ ${despesas.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
        />
        <CartaoResumo
          titulo="Saldo"
          valor={`R$ ${saldo.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
        />
      </div>
      <div className="acoes-financeiras">
        <input
          type="number"
          placeholder="Valor da receita"
          value={valorReceita}
          onChange={(evento) => setValorReceita(evento.target.value)}
        />
        <button
          onClick={() => {
            const valor = Number(valorReceita);

            if (valor > 0) {
              setReceitas((valorAnterior) => valorAnterior + valor);
              setValorReceita("");
            }
          }}
        >
          Adicionar receita
        </button>
        <input 
        type="number"
        placeholder="valor da despesa"
        value={valorDespesa}
        onChange={(evento) => setValorDespesa(evento.target.value)} 
        />
        <button
          onClick={() => {
            const valor = Number(valorDespesa);
            if(valor > 0){
              setDespesas((valorAnterior) => valorAnterior + valor);
              setValorDespesa("");
            }
          }}
        >
          Adicionar despesa 
        </button>
      </div>

      <Contador />
    </main>
  );
}

export default App;
