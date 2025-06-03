import styled from "styled-components";
import { Link } from "react-router-dom";
const opcoes = ['Categorias', 'Favoritos', 'Estante']

const Opcoes = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: Arial, sans-serif;
`
const Opcao = styled.li`
    font-size: 24px;
    font-weight: 500;
    color: #333333;
    margin: 0 10px;
    cursor: pointer;
`

function OpcoesHeader() {
    return (
        <Opcoes>
            {
                opcoes.map((opcao) => {
                    return <Link to={`/${opcao.toLowerCase()}`}> <Opcao>{opcao.toUpperCase()}</Opcao> </Link>
                })
            }
        </Opcoes>
    );
}

export default OpcoesHeader