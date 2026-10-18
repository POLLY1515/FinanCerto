import CartaoResumo from "./CartaoResumo";
import "./App.css";

 
function App() {

  return (

    <main>
      <h1>FinanCerto</h1>
      <p>Organize suas receitas e despesas em um só lugar.</p>
      <div className="resumo-financeiro">
          <CartaoResumo titulo="Receitas" valor=" R$ 3.000,00 "/>
          <CartaoResumo titulo="Despesas" valor=" R$ 850,00 "/>
          <CartaoResumo titulo="Saldo" valor=" R$ 2.150,00 "/>
      </div>
     
    </main>

  );
}

export default App;