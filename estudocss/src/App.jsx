import Exercicio1 from "./Paginas/Exercicio1";
import Exercicio2 from "./Paginas/Exercicio2";
import Exercicio3 from "./Paginas/Exercicio3";
import Exercicio4 from "./Paginas/exercicio4";


export default function App() {
  return (
      <div>
        <h1> Aula 02 - Estilos CSS no React</h1>
        <Exercicio1/>
        <Exercicio2/>
        <Exercicio3/>
    <hr/ >
        <Exercicio4 cor="red" />
        <Exercicio4 cor="blue" />
        <Exercicio4 cor="green" />
        <Exercicio4 cor="magenta" />

        </div>
  );
}

