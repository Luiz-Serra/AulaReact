import {Link} from "react-router-dom";
import { useState } from "react";
export default function Exemplo2() {

  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);

  
  function calcular() {
    let n1 = Number(numero1);
    let n2 = Number(numero2);

    let soma = n1 + n2;
    let subtracao = n1 - n2;
    let multiplicacao = n1 * n2;
    let divisao = n2 !== 0 ? n1 / n2 : "Não pode dividir por zero";
    let exponenciacao = Math.pow(n1, n2);
    let restoDivisao = n2 !== 0 ? n1 % n2 : "Não pode dividir por zero";

    setResultado(
      <div>
        <p>A soma é {soma}</p>
        <p>A subtração é {subtracao}</p>
        <p>A multiplicação é {multiplicacao}</p>
        <p>A divisão é {divisao}</p>
        <p>A exponenciação é {exponenciacao}</p>
        <p>O resto da divisão é {restoDivisao}</p>
      </div>
    );
  }

  
  function limpar() {
    setNumero1("");
    setNumero2("");
    setResultado(null);
  }

  return (
    <div style={{ margin: "20px", padding: "20px", border: "2px solid red", width: "300px" }}>
      <h1>Calculadora</h1>
      <div className="container">
        <form>
          <p>
            Digite o número 1: <br />
            <input
              type="number"
              value={numero1}
              onChange={(e) => setNumero1(e.target.value)}
            />
          </p>

          <p>
            Digite o número 2: <br />
            <input
              type="number"
              value={numero2}
              onChange={(e) => setNumero2(e.target.value)}
            />
          </p>

          <p>
            <button
              type="button"
              style={{ backgroundColor: "#800000", color: "white", padding: "5px 10px", border: "none", cursor: "pointer" }}
              onClick={calcular}
            >
              Calcular
            </button>
            <button
              type="button"
              style={{ marginLeft: "10px", backgroundColor: "#800000", color: "white", padding: "5px 10px", border: "none", cursor: "pointer" }}
              onClick={limpar}
            >
              Limpar
            </button>
          </p>

          <p>
            <b>Resultado:</b> <br />
            {resultado}
          </p>
        </form>
      </div>
    </div>
  );
}
