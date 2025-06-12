export default function Exercicio1({fah})
{
    let celsius= (Number(fah) -32) * 5 / 9;

    return(
        <div>
            A temperatura {fah} convertida em Celsius é {celsius} {Number}
        </div>
    );
}