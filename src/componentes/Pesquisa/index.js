import styled from "styled-components"
import Input from "../Input"
import { useEffect, useState } from "react"
import { listarLivros } from "../../servicos/livros"

const PesquisaContainer = styled.section`
    backgrund-image: linear-gradient(90deg, #002F52 35%, #326589);
    color: #FFF;
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

const ResultadoDaPesquisa = styled.div`
    margin: 20px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 10px;
    height: 400px;
    max-width: 1000px;

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
const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    font-size: 14px;

`

const P = styled.p`
    margin: 0;
`

function Pesquisa() {
    const [busca, setBusca] = useState([]);
    const [livros, setLivros] = useState([]);

    async function fetchLivros(){
        const livrosDaAPI = await listarLivros()
        setLivros(livrosDaAPI)
    }

    useEffect(() => {
        fetchLivros()
    }, [])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Digite sua busca!"
                onBlur={(e) => {
                    const campoDeBusca = e.target.value;
                    if (campoDeBusca === "") {
                        return setBusca([])
                    }
                    setBusca(livros.filter(livro =>
                        livro.nome.includes(campoDeBusca)
                    ))
                }}
            />

            <ResultadoDaPesquisa >
                {busca.map(livro => (
                    <Div>
                        <img src={livro.imagem} alt={livro.nome} />
                        <P>{livro.nome}</P>
                        <P>{livro.autor}</P>
                    </Div>
                ))}
            </ResultadoDaPesquisa>

        </PesquisaContainer>
    )
}

export default Pesquisa