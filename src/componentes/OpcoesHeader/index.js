import './estilo.css';
const opcoes = ['Categorias', 'Favoritos', 'Minha Estante']
function OpcoesHeader(){
    return (
        <ul className='opcoes'>
            {
                opcoes.map((opcao)=> {
                    return <li className='opcoes-item'>{opcao}</li>
                })
            }
        </ul>
    );
}

export default OpcoesHeader