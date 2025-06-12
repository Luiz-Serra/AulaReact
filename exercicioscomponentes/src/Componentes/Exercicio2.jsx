export default function Exercicio1({peso,altura})
{
    let IMC= Number(peso) / Number(altura)
    return(
        <div>
           IMC da pessoa com peso {peso}kg e altura {altura} é de {IMC.toFixed(2)} 
        </div>
    );
}