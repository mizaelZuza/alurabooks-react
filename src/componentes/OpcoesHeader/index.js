import styled from "styled-components";
const opcoes = ['Categorias', 'Favoritos', 'Minha Estante']

const Opcoes = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Opcao = styled.li`
    font-size: 24px;
    margin: 0 10px;
    cursor: pointer;
`

function OpcoesHeader() {
    return (
        <Opcoes>
            {
                opcoes.map((opcao) => {
                    return <Opcao>{opcao}</Opcao>
                })
            }
        </Opcoes>
    );
}

export default OpcoesHeader