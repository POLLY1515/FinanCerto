import "./CartaoResumo.css";

export default function CartaoResumo(props) {

  return (

    <section className="cartao-resumo">
      <h2>{props.titulo}</h2>
      <p>{props.valor}</p>
    </section>

  );

}