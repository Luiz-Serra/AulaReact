import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio2()
{
  const [numero, setNumero] = useState(0);
  const [resultado, setResultado] = useState('');


  function calcular() {
    
    setResultado(
      <div>
        O valor em Celsius é {(Number(numero) - 32)* 5/9} <br />
      </div>
    );
  }



  return (
    <div>
      <h1>Exercício 2</h1>

      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <p>
            Digite o valor em Fahrenheit : <br />
            <input type="number" value={numero} onChange={e => setNumero(e.target.value)} />
          </p>          
          <p>
            <input type="button" value="Calcular" onClick={calcular} />
          </p>
        </form>
        <p>
          Resultado: {resultado}
        </p>
        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}