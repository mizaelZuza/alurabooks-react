import styled from 'styled-components'
import Perfil from '../../img/perfil.svg'
import Sacola from '../../img/sacola.svg'

const icones = [Perfil, Sacola]

const ContainerIcones = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Icone = styled.img`
    margin: 0 10px;
    cursor: pointer;
`

function IconesHeader() {
    return (
        <ContainerIcones>
            {icones.map((icone) => {
                return <Icone src={icone} alt="icone" />
            })}
        </ContainerIcones>
    )
}

export default IconesHeader