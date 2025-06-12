export default function Exercicio4( {cor} ) {

    
        const estiloTitulo = {
            border: "2px solid " + cor,
            textAlign : "center",
            color : cor
        };
        
        return (

            <div>
                <h2 style={estiloTitulo}>Exercício 4</h2>
                <p style={ {color : cor}}>Este parágrafo está com a cor {cor}.</p>
            </div>
        );
    
}
