export default function Exercicio3({valor, taxa, tempo})
{ 
    let ValorParcela = Number(valor) + (valor * (taxa**2/100) *tempo) ;

     return(
    <div>
       O tempo {tempo} e a taxa {taxa} é de {valor.toFixed(2)}, e o valor da parcela é {ValorParcela}.
    </div>
);
}