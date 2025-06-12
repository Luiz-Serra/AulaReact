import Exercicio4 from"./Componentes/Exercicio4"

export default function App()
{
  return(
    <div>
      <h3>Chamada para o Exercicio 4</h3>  
      <Exercicio4 tipo="retangulo" base="10" altura="5"/>
      <Exercicio4 tipo="triangulo" base="10" altura="5"/>
      <Exercicio4 tipo="quadrado" base="10" altura="10"/>
    </div>
  )
}
