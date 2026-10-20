import CartaoResumo from "./CartaoResumo";
import "./App.css";
import Contador from "./Contador";
import { useState } from "react";

function App() {
  const [despesas, setDespesas] = useState(850);
  const [receitas, setReceitas] = useState(3000);
  const [valorReceita, setValorReceita] = useState("");
  const [valorDespesa, setValorDespesa] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [listaReceitas, setListaReceita] = useState([]);
  const [listaDespesas, setListaDespesa] = useState([]);

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

            if (valorReceita.trim() !== "" && valor > 0) {
              setReceitas((valorAnterior) => valorAnterior + valor);
              setListaReceita((listaAnterior) => [...listaAnterior, valor]);
              setValorReceita("");
              setMensagem("");
            } else {
              setMensagem("Informe um valor da receita maior que zero.");
            }
          }}
        >
          Adicionar receita
        </button>
        <ul>
          {listaReceitas.map((receita, indice) => (
            <li key={indice}>
              Receita: R${" "}
              {receita.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </li>
          ))}
        </ul>
        <input
          type="number"
          placeholder="valor da despesa"
          value={valorDespesa}
          onChange={(evento) => setValorDespesa(evento.target.value)}
        />
        <button
          onClick={() => {
            const valor = Number(valorDespesa);
            if (valorDespesa.trim() !== "" && valor > 0) {
              setDespesas((valorAnterior) => valorAnterior + valor);
              setListaDespesa((valorAnterior) => [...valorAnterior, valor]);
              setValorDespesa("");
              setMensagem("");
            }else{
              setMensagem("Informe um valor de despesa maior que zero.");
            }
          }}
        >
          Adicionar despesa
        </button>
         <ul>
          {listaDespesas.map((despesa, indice) => (
            <li key={indice}>
              Despesa: R${" "}
              {despesa.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </li>
          ))}
        </ul>
        {mensagem && <p className="mensagem-validacao">{mensagem}</p>}
      </div>

      <Contador />
    </main>
  );
}

export default App;
