import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio1()
{
  const [numero, setNumero] = useState(0);
  const [resultado, setResultado] = useState('');


  function calcular() {
    
    setResultado(
      <div>
        O quadrado do número é {Number(numero) * Number(numero)} <br />
        O cubo do número é {Number(numero) * Number(numero) * Number(numero)} <br />
      </div>
    );
  }



  return (
    <div>
      <h1>Exercício 1</h1>

      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <p>
            Digite o número : <br />
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