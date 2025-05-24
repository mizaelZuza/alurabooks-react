import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #f1f7fa;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo></Logo>
            <OpcoesHeader></OpcoesHeader>
            <IconesHeader></IconesHeader>
        </HeaderContainer>
    )

}

export default Header