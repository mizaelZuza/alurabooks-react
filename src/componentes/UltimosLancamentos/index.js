import { listaDeLivrosLancamentos } from "./ultimosLancamentosLista";
import styled from "styled-components";
import { Titulo } from "../Titulo";
import CardRecomenda from "../CardRecomenda";
import imagemLivro from '../../img/livro2.png'

const UlimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    margin: 0;
`
const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    padding: 10px;
    margin: 10px;

    overflow-x: auto;
    
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    &::-webkit-scrollbar{
        height: 10px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #002F52;
        border-radius: 20px;
    }

`
const DivLivros = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    
`
const P = styled.p`
    margin: 0;
`
const Img = styled.img`
padding: 10px;
`

function UltimosLancamentos() {
    return (

        <UlimosLancamentosContainer>
            <Titulo
                cor="#EB9B00"
                tamanho="36px"
            >ÚLTIMOS LANÇAMENTOS</Titulo>
            <Div>
                {
                    listaDeLivrosLancamentos.map((livro) =>
                    (
                        <DivLivros>
                            <Img src={livro.imagem} alt={livro.titulo} />
                            <P>{livro.titulo}</P>
                            <P>{livro.autor}</P>
                        </DivLivros>
                    )
                    )

                }
            </Div>
                <CardRecomenda
                    titulo = "Talvez voce também se interesse por"
                    subtitulo = "Angular 11"
                    descricao = "Construindo uma aplicação com a plataforma Google"
                    img = {imagemLivro}
                />
        </UlimosLancamentosContainer>

    )
}

export default UltimosLancamentos